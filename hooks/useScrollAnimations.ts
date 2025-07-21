'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { throttle } from '@/lib/utils'

interface UseScrollAnimationsOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  enabled?: boolean
}

interface ScrollAnimation {
  isVisible: boolean
  hasTriggered: boolean
  progress: number
}

export function useScrollAnimations(options: UseScrollAnimationsOptions = {}): {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
  hasTriggered: boolean
  progress: number
} {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    enabled = true
  } = options

  const ref = useRef<HTMLElement>(null)
  const [animation, setAnimation] = useState<ScrollAnimation>({
    isVisible: false,
    hasTriggered: false,
    progress: 0
  })

  useEffect(() => {
    if (!enabled || !ref.current) return

    const element = ref.current
    let observer: IntersectionObserver

    // Create intersection observer for visibility detection
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting
          const progress = Math.min(Math.max(entry.intersectionRatio, 0), 1)

          setAnimation(prev => ({
            isVisible,
            hasTriggered: prev.hasTriggered || isVisible,
            progress
          }))

          // Disconnect if triggerOnce and element is visible
          if (triggerOnce && isVisible) {
            observer.disconnect()
          }
        })
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // 0, 0.1, 0.2, ..., 1.0
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, enabled])

  return {
    ref,
    isVisible: animation.isVisible,
    hasTriggered: animation.hasTriggered,
    progress: animation.progress
  }
}

// Hook for scroll progress tracking
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(
    throttle(() => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(Math.max(scrollPercent, 0), 100))
    }, 16), // ~60fps
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', updateProgress)
  }, [updateProgress])

  return progress
}

// Hook for element visibility with callback
export function useInView(
  callback: (isVisible: boolean) => void,
  options: UseScrollAnimationsOptions = {}
): React.RefObject<HTMLElement> {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  const ref = useRef<HTMLElement>(null)
  const callbackRef = useRef(callback)
  const hasTriggeredRef = useRef(false)

  // Update callback ref
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting

          if (triggerOnce && hasTriggeredRef.current && !isVisible) {
            return // Don't trigger again if triggerOnce is true
          }

          if (isVisible) {
            hasTriggeredRef.current = true
          }

          callbackRef.current(isVisible)

          if (triggerOnce && isVisible) {
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return ref
}

// Hook for parallax scrolling effects
export function useParallax(speed: number = 0.5): {
  ref: React.RefObject<HTMLElement>
  transform: string
} {
  const ref = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('translateY(0px)')

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const updateParallax = throttle(() => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setTransform(`translateY(${rate}px)`)
      }
    }, 16)

    window.addEventListener('scroll', updateParallax, { passive: true })
    updateParallax() // Initial call

    return () => window.removeEventListener('scroll', updateParallax)
  }, [speed])

  return { ref, transform }
}

// Hook for scroll direction detection
export function useScrollDirection(): 'up' | 'down' | null {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateScrollDirection = throttle(() => {
      const scrollY = window.pageYOffset
      
      if (Math.abs(scrollY - lastScrollY.current) < 10) {
        return // Ignore small movements
      }

      const direction = scrollY > lastScrollY.current ? 'down' : 'up'
      
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }
      
      lastScrollY.current = scrollY
    }, 10)

    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection])

  return scrollDirection
} 