import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'gradient' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'default' | 'lg'
  rounded?: boolean
  icon?: React.ReactNode
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({
    className,
    variant = 'default',
    size = 'default',
    rounded = true,
    icon,
    children,
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-start focus:ring-offset-2'
    
    const variants = {
      default: 'bg-background-tertiary text-text-primary border border-border hover:bg-background-secondary',
      secondary: 'bg-background-secondary text-text-secondary border border-border hover:bg-background-tertiary',
      outline: 'text-text-primary border border-border hover:bg-background-secondary',
      gradient: 'bg-gradient-primary text-white shadow-glow',
      success: 'bg-success/20 text-success border border-success/30 hover:bg-success/30',
      warning: 'bg-warning/20 text-warning border border-warning/30 hover:bg-warning/30',
      error: 'bg-error/20 text-error border border-error/30 hover:bg-error/30'
    }
    
    const sizes = {
      sm: 'px-2 py-1 text-xs',
      default: 'px-3 py-1 text-sm',
      lg: 'px-4 py-2 text-base'
    }
    
    const roundedClasses = rounded ? 'rounded-full' : 'rounded-md'

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          roundedClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge } 