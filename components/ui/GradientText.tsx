import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
  gradient?: 'primary' | 'secondary' | 'accent' | 'custom'
  animate?: boolean
}

const GradientText = forwardRef<HTMLElement, GradientTextProps>(
  ({
    className,
    as: Component = 'span',
    gradient = 'primary',
    animate = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = 'bg-clip-text text-transparent font-bold'
    
    const gradients = {
      primary: 'bg-gradient-to-r from-gradient-start to-gradient-end',
      secondary: 'bg-gradient-to-r from-primary to-gradient-end',
      accent: 'bg-gradient-to-r from-gradient-end to-gradient-start',
      custom: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
    }
    
    const animationClasses = animate ? 'animate-pulse' : ''

    return (
      <Component
        className={cn(
          baseClasses,
          gradients[gradient],
          animationClasses,
          className
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

GradientText.displayName = 'GradientText'

export { GradientText } 