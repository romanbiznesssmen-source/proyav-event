'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { TicketTierId } from '@/lib/tickets'

type CheckoutContextValue = {
  isOpen: boolean
  tierId: TicketTierId | null
  openCheckout: (tierId?: TicketTierId) => void
  closeCheckout: () => void
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null)

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [tierId, setTierId] = useState<TicketTierId | null>(null)

  const openCheckout = useCallback((nextTierId?: TicketTierId) => {
    setTierId(nextTierId ?? 'standard')
    setIsOpen(true)
  }, [])

  const closeCheckout = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({ isOpen, tierId, openCheckout, closeCheckout }),
    [isOpen, tierId, openCheckout, closeCheckout],
  )

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
}

export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error('useCheckout must be used within CheckoutProvider')
  }
  return context
}
