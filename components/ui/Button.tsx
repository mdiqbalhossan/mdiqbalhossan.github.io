import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'default',
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gradient-start focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-primary hover:bg-primary-hover text-white hover:scale-105 hover:shadow-glow',
      secondary: 'bg-background-secondary hover:bg-background-tertiary text-text-primary border border-border hover:border-gradient-start',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105',
      ghost: 'text-text-primary hover:bg-background-secondary hover:text-text-primary',
      gradient: 'bg-gradient-primary text-white hover:scale-105 hover:shadow-glow-lg'
    }
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      default: 'h-11 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
      xl: 'h-14 px-10 text-xl'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          loading && 'animate-pulse',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : (
          leftIcon && <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 