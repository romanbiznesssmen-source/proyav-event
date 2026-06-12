import { NextResponse } from 'next/server'
import { sendTicketEmail } from '@/lib/ticket-email'
import { getOrder, incrementSale, updateOrder } from '@/lib/store'
import {
  amountsMatch,
  buildWayForPayAcceptResponse,
  parseWayForPayCallbackBody,
  verifyWayForPayCallback,
  type WayForPayCallbackBody,
} from '@/lib/wayforpay'

const FAILED_STATUSES = new Set(['Declined', 'Expired', 'Voided'])

function getMerchantAccount() {
  return process.env.WAYFORPAY_MERCHANT_ACCOUNT?.trim() ?? ''
}

function getSecretKey() {
  return process.env.WAYFORPAY_SECRET_KEY?.trim() ?? ''
}

function acceptResponse(orderReference: string, secretKey: string) {
  return NextResponse.json(buildWayForPayAcceptResponse(orderReference, secretKey))
}

async function handleApproved(orderReference: string, body: WayForPayCallbackBody) {
  const order = await getOrder(orderReference)
  if (!order) {
    console.error('[wayforpay] Approved payment for unknown order:', orderReference)
    return
  }

  if (order.status === 'paid') return

  if (!amountsMatch(order.amount, body.amount)) {
    console.error(
      '[wayforpay] Amount mismatch for',
      orderReference,
      'expected',
      order.amount,
      'got',
      body.amount,
    )
    return
  }

  const paidOrder = await updateOrder(orderReference, {
    status: 'paid',
    paidAt: new Date().toISOString(),
  })

  await incrementSale(order.tierId, order.wave)

  if (paidOrder && !paidOrder.emailSent) {
    const emailResult = await sendTicketEmail(paidOrder)
    await updateOrder(orderReference, { emailSent: emailResult.success })
  }
}

export async function POST(request: Request) {
  const secretKey = getSecretKey()
  const merchantAccount = getMerchantAccount()

  if (!secretKey || !merchantAccount) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const rawBody = await request.text()
  const contentType = request.headers.get('content-type') ?? ''
  const body = parseWayForPayCallbackBody(rawBody, contentType)

  if (!body) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const orderReference = body.orderReference ?? ''

  if (!verifyWayForPayCallback(body, secretKey)) {
    console.error('[wayforpay] Invalid signature for order:', orderReference || '(missing)')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (body.merchantAccount && body.merchantAccount !== merchantAccount) {
    console.error('[wayforpay] Unexpected merchant account:', body.merchantAccount)
    return NextResponse.json({ error: 'Invalid merchant account' }, { status: 400 })
  }

  if (orderReference && body.transactionStatus === 'Approved') {
    await handleApproved(orderReference, body)
  } else if (
    orderReference &&
    body.transactionStatus &&
    FAILED_STATUSES.has(body.transactionStatus)
  ) {
    const order = await getOrder(orderReference)
    if (order && order.status === 'pending') {
      await updateOrder(orderReference, { status: 'failed' })
    }
  }

  return acceptResponse(orderReference, secretKey)
}
