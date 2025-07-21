'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ScrollProgressProps {
  className?: string
  height?: number
}

export default function ScrollProgress({ className, height = 3 }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        className
      )}
      style={{ height: `${height}px` }}
    >
      <div
        className="h-full bg-gradient-primary transition-all duration-300 ease-out shadow-glow"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
} 