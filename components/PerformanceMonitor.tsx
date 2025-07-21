'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Track Core Web Vitals
    const trackWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')

        onCLS(sendToAnalytics)
        onINP(sendToAnalytics)
        onFCP(sendToAnalytics)
        onLCP(sendToAnalytics)
        onTTFB(sendToAnalytics)
      } catch (error) {
        console.error('Failed to load web-vitals:', error)
      }
    }

    trackWebVitals()

    // Track custom performance metrics
    const trackCustomMetrics = () => {
      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        sendCustomMetric('page_load_time', loadTime)
      })

      // Track First Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            sendCustomMetric('first_paint', entry.startTime)
          }
          if (entry.name === 'first-contentful-paint') {
            sendCustomMetric('first_contentful_paint', entry.startTime)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['paint'] })
      } catch (error) {
        console.warn('Performance Observer not supported:', error)
      }
    }

    trackCustomMetrics()

    // Cleanup
    return () => {
      // Performance observers are automatically cleaned up
    }
  }, [])

  return null
}

function sendToAnalytics(metric: any) {
  // Send to Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }

  // Send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }

  // You can also send to other analytics providers here
  // Example: Vercel Analytics, PostHog, etc.
}

function sendCustomMetric(name: string, value: number) {
  // Send custom metrics to analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'custom_metric', {
      event_category: 'Performance',
      event_label: name,
      value: Math.round(value),
      non_interaction: true,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Custom Metric - ${name}:`, value)
  }
} 