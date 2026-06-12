import { NextResponse } from 'next/server'
import { getAllTierPricing } from '@/lib/ticket-pricing'
import { getSalesCounts } from '@/lib/store'
import { TICKET_TIERS } from '@/lib/tickets'

export async function GET() {
  const sales = await getSalesCounts()
  const pricing = getAllTierPricing(sales)

  const tiers = TICKET_TIERS.map((tier) => {
    const priceInfo = pricing.tiers.find((item) => item.tierId === tier.id)
    return {
      id: tier.id,
      price: priceInfo?.price ?? 0,
      wave: priceInfo?.wave ?? 'early',
      remaining: priceInfo?.remaining ?? 0,
      sold: priceInfo?.sold ?? 0,
      available: (priceInfo?.remaining ?? 0) > 0,
    }
  })

  return NextResponse.json({
    dateWave: pricing.dateWave,
    tiers,
  })
}
