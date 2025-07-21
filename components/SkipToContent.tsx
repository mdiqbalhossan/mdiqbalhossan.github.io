'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  const handleSkip = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleSkip}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      className={cn(
        'fixed top-4 left-4 z-[100] px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start focus:ring-offset-2',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
      aria-label="Skip to main content"
    >
      Skip to main content
    </button>
  )
} 