'use client'

import type { ReactNode } from 'react'
import { CheckoutProvider } from './CheckoutContext'
import CheckoutModal from './CheckoutModal'

export default function CheckoutShell({ children }: { children: ReactNode }) {
  return (
    <CheckoutProvider>
      {children}
      <CheckoutModal />
    </CheckoutProvider>
  )
}
