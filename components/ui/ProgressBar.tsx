import { cn } from '@/lib/utils'
import { forwardRef, useEffect, useState } from 'react'

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  showValue?: boolean
  animated?: boolean
  size?: 'sm' | 'default' | 'lg'
  color?: 'primary' | 'gradient' | 'success' | 'warning' | 'error'
  label?: string
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({
    className,
    value,
    max = 100,
    showValue = false,
    animated = true,
    size = 'default',
    color = 'gradient',
    label,
    ...props
  }, ref) => {
    const [animatedValue, setAnimatedValue] = useState(0)
    const percentage = Math.min((value / max) * 100, 100)

    useEffect(() => {
      if (animated) {
        const timer = setTimeout(() => {
          setAnimatedValue(percentage)
        }, 300)
        return () => clearTimeout(timer)
      } else {
        setAnimatedValue(percentage)
      }
    }, [percentage, animated])

    const sizes = {
      sm: 'h-2',
      default: 'h-3',
      lg: 'h-4'
    }

    const colors = {
      primary: 'bg-primary',
      gradient: 'bg-gradient-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-error'
    }

    return (
      <div className={cn('w-full', className)} ref={ref} {...props}>
        {label && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-text-primary">{label}</span>
            {showValue && (
              <span className="text-sm text-text-secondary">{value}%</span>
            )}
          </div>
        )}
        <div className={cn(
          'w-full bg-background-tertiary rounded-full overflow-hidden',
          sizes[size]
        )}>
          <div
            className={cn(
              'h-full rounded-full transition-all duration-1000 ease-out',
              colors[color],
              animated && 'transform'
            )}
            style={{ width: `${animatedValue}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar } 