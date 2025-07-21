import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'bordered' | 'floating' | 'glass'
  hover?: boolean
  padding?: 'none' | 'sm' | 'default' | 'lg' | 'xl'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'default',
    hover = true,
    padding = 'default',
    children,
    ...props
  }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-300'
    
    const variants = {
      default: 'bg-background-secondary border border-border',
      gradient: 'bg-gradient-to-br from-background-secondary to-background-tertiary border border-border',
      bordered: 'bg-background border border-gradient-start/20',
      floating: 'bg-background-secondary border border-border shadow-card',
      glass: 'bg-background-secondary/50 backdrop-blur-sm border border-border'
    }
    
    const hoverEffects = hover ? {
      default: 'hover:border-gradient-start hover:shadow-card-hover',
      gradient: 'hover:shadow-glow',
      bordered: 'hover:border-gradient-start hover:shadow-glow',
      floating: 'hover:shadow-card-hover hover:-translate-y-1',
      glass: 'hover:bg-background-secondary/70 hover:border-gradient-start/40'
    } : {}
    
    const paddings = {
      none: '',
      sm: 'p-4',
      default: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          hover && hoverEffects[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 mb-6', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight text-text-primary', className)}
      {...props}
    >
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-text-secondary', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-6 mt-6 border-t border-border', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} 