'use client'

import React, { createContext, useContext, useState } from 'react'

interface BillingContextType {
  credits: number
  tier: string
  setCredits: (credits: number) => void
  setTier: (tier: string) => void
}

const BillingContext = createContext<BillingContextType | undefined>(undefined)

export const useBilling = () => {
  const context = useContext(BillingContext)
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider')
  }
  return context
}

interface BillingProviderProps {
  children: React.ReactNode
}

export const BillingProvider = ({ children }: BillingProviderProps) => {
  const [credits, setCredits] = useState(10)
  const [tier, setTier] = useState('Free')

  return (
    <BillingContext.Provider value={{ credits, tier, setCredits, setTier }}>
      {children}
    </BillingContext.Provider>
  )
}
