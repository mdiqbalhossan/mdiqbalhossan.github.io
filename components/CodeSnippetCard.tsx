'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Copy, Check, Minimize2, Maximize2 } from 'lucide-react'

interface CodeSnippetCardProps {
  title: string
  language: string
  code: string
  badges?: string[]
  className?: string
  floating?: boolean
}

export default function CodeSnippetCard({
  title,
  language,
  code,
  badges = [],
  className,
  floating = false
}: CodeSnippetCardProps) {
  const [copied, setCopied] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Card
      className={cn(
        'font-mono text-sm transition-all duration-300 hover:shadow-glow',
        floating && 'animate-float',
        isMinimized && 'h-12 overflow-hidden',
        className
      )}
      variant="glass"
      padding="none"
    >
      {/* VS Code-style header */}
      <div className="flex items-center justify-between p-3 bg-background-tertiary border-b border-border">
        <div className="flex items-center space-x-2">
          {/* Traffic light buttons */}
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <span className="text-text-secondary text-xs ml-2">{title}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 h-6 w-6"
          >
            {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
          </Button>
        </div>
      </div>

      {/* Code content */}
      {!isMinimized && (
        <div className="relative">
          <div className="flex items-center justify-between p-3 bg-background-secondary border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-start rounded-full"></div>
              <span className="text-xs text-text-secondary">{language}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="p-1 h-6 w-6"
            >
              {copied ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3" />}
            </Button>
          </div>
          
          <div className="p-4 bg-background-tertiary">
            <pre className="text-text-primary text-xs leading-relaxed overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="p-3 bg-background-secondary border-t border-border">
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="gradient" size="sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  )
} 