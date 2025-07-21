import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg' | 'xl'
  variant?: 'primary' | 'gradient' | 'secondary'
  text?: string
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({
    className,
    size = 'default',
    variant = 'gradient',
    text,
    ...props
  }, ref) => {
    const sizes = {
      sm: 'w-4 h-4',
      default: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
    }

    const variants = {
      primary: 'border-primary border-r-transparent',
      gradient: 'border-gradient-start border-r-transparent',
      secondary: 'border-text-secondary border-r-transparent'
    }

    return (
      <div
        className={cn('flex flex-col items-center space-y-2', className)}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'animate-spin rounded-full border-2',
            sizes[size],
            variants[variant]
          )}
        />
        {text && (
          <span className="text-sm text-text-secondary animate-pulse">
            {text}
          </span>
        )}
      </div>
    )
  }
)

LoadingSpinner.displayName = 'LoadingSpinner'

export { LoadingSpinner } 