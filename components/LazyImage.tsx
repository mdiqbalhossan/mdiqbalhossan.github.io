'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  placeholder,
  blurDataURL,
  priority = false,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current && !priority) {
      observer.observe(imgRef.current)
    } else {
      setIsInView(true)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgMABAUGITFRkbHB/9oADAMBAAIRAxEAPwCdwLjU9JvBBE0aoCVVehgBQiYEugucdjAUvLigWF0wEOemNu6KqYGksOEPgMgHuOKGowKUk9dKqiKquqQSgGHcQKOw4pGjEQ4CQfGBUW6+SWQIYkMFLQRRDVgLZgHQ/wDClxjqMwbISYKKwW+OQmHEWjkOH2xwQ4eDVk7dXUEiRfG6pKTlGdOOAq/h/9k='

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden transition-opacity duration-300',
        !isLoaded && 'animate-pulse bg-background-tertiary',
        className
      )}
      style={fill ? {} : { width, height }}
    >
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-background-tertiary via-background-secondary to-background-tertiary',
            'animate-shimmer bg-[length:200%_100%]'
          )}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background-tertiary text-text-secondary">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-xs">Failed to load</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {(isInView || priority) && !hasError && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          placeholder={placeholder || 'blur'}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          priority={priority}
          onLoad={handleLoad}
          onError={handleError}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  )
} 