'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { TicketTierId } from '@/lib/tickets'
import { useCheckout } from './CheckoutContext'

type OpenCheckoutButtonProps = {
  tierId?: TicketTierId
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function OpenCheckoutButton({
  tierId,
  children,
  type = 'button',
  onClick,
  ...props
}: OpenCheckoutButtonProps) {
  const { openCheckout } = useCheckout()

  return (
    <button
      type={type}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented && !props.disabled) {
          openCheckout(tierId)
        }
      }}
    >
      {children}
    </button>
  )
}
