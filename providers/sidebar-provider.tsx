'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface SidebarContextType {
  isCollapsed: boolean
  isMobile: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true) // Start collapsed to prevent hydration issues
  const [isMobile, setIsMobile] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Define toggleSidebar first to avoid initialization issues
  const toggleSidebar = useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Set initial state based on screen size
      if (!isInitialized) {
        setIsCollapsed(mobile) // Collapsed on mobile, expanded on desktop
        setIsInitialized(true)
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      // Toggle sidebar with Ctrl/Cmd + B
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('keydown', handleKeydown)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [toggleSidebar, isInitialized])

  const closeSidebar = useCallback(() => {
    setIsCollapsed(true)
  }, [])

  return (
    <SidebarContext.Provider value={{ isCollapsed, isMobile, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}