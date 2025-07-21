'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { Card } from '@/components/ui/Card'
import { Home, ArrowLeft, Bug, Search } from 'lucide-react'

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const codeSnippet = `// Error 404: Page Not Found
function findPage(url) {
  const pages = [
    '/about',
    '/skills', 
    '/projects',
    '/education',
    '/resume',
    '/contact'
  ];
  
  return pages.find(page => page === url) || null;
}

const result = findPage('${typeof window !== 'undefined' ? window.location.pathname : '/unknown'}');
if (!result) {
  throw new PageNotFoundError('404: Page does not exist');
}`

  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <GradientText as="h1" className="text-8xl md:text-9xl font-bold mb-4">
              404
            </GradientText>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Looks like this page got lost in the digital void. Don't worry, 
              even the best developers encounter 404 errors!
            </p>
          </motion.div>

          {/* Code Block */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card variant="glass" className="font-mono text-sm text-left overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-3 bg-background-tertiary border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <span className="text-text-secondary text-xs ml-2">debug.js</span>
                </div>
                <Bug className="w-4 h-4 text-error" />
              </div>
              
              {/* Code Content */}
              <div className="p-6 bg-background-tertiary">
                <pre className="text-text-primary text-xs leading-relaxed overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </Card>
          </motion.div>

          {/* Navigation Options */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button 
                  variant="gradient" 
                  size="lg"
                  leftIcon={<Home className="w-5 h-5" />}
                >
                  Go Home
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<ArrowLeft className="w-5 h-5" />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link href="/about">
                <Button variant="ghost" size="sm" className="w-full">
                  About Me
                </Button>
              </Link>
              <Link href="/skills">
                <Button variant="ghost" size="sm" className="w-full">
                  My Skills
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="ghost" size="sm" className="w-full">
                  Projects
                </Button>
              </Link>
              <Link href="/education">
                <Button variant="ghost" size="sm" className="w-full">
                  Education
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="ghost" size="sm" className="w-full">
                  Resume
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card variant="bordered" className="max-w-md mx-auto">
              <div className="p-6 text-center">
                <Search className="w-8 h-8 text-gradient-start mx-auto mb-3" />
                <p className="text-text-secondary text-sm">
                  "The best error messages are the ones that lead you to the solution."
                </p>
                <p className="text-text-secondary text-xs mt-2 italic">
                  - Every Developer Ever
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 