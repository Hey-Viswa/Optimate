'use client'

import React, { createContext, useContext, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const setOpen = () => setIsOpen(true)
  const setClose = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, setClose }}>
      {children}
    </ModalContext.Provider>
  )
}
