'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import CodeSnippetCard from '@/components/CodeSnippetCard'
import { PERSONAL_INFO, SOCIAL_LINKS, CODE_SNIPPETS } from '@/lib/constants'
import { Github, Linkedin, Twitter, Mail, ChevronDown, MessageCircle } from 'lucide-react'

const iconMap = {
  Github,
  Linkedin, 
  Twitter,
  Mail
}

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = PERSONAL_INFO.title
  const [currentSnippet, setCurrentSnippet] = useState(0)

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  // Rotate code snippets
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % CODE_SNIPPETS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="grid lg:grid-cols-12 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
              variants={itemVariants}
            >
              <Badge variant="gradient" className="animate-pulse">
                Software Engineer
              </Badge>
              <Badge variant="default">Full Stack Developer</Badge>
              <Badge variant="outline">PHP Enthusiast</Badge>
              <Badge variant="default">Coffee Lover ☕</Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Hi, I'm{' '}
                <GradientText as="span" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {PERSONAL_INFO.name}
                </GradientText>
              </h1>
            </motion.div>

            {/* Typewriter Subtitle */}
            <motion.div variants={itemVariants}>
              <div className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-2 font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4 mb-8"
              variants={itemVariants}
            >
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <Button
                    key={link.platform}
                    variant="ghost"
                    size="sm"
                    className="p-3 hover:scale-110 transition-all duration-300"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button 
                variant="gradient" 
                size="lg"
                onClick={scrollToAbout}
                leftIcon={<ChevronDown className="w-5 h-5" />}
                className="group"
              >
                Learn More About Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Profile & Code */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="flex flex-col items-center space-y-6"
              variants={itemVariants}
            >
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-start shadow-glow animate-float">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgMABAUGITFRkbHB/9oADAMBAAIRAxEAPwCdwLjU9JvBBE0aoCVVehgBQiYEugucdjAUvLigWF0wEOemNu6KqYGksOEPgMgHuOKGowKUk9dKqiKquqQSgGHcQKOw4pGjEQ4CQfGBUW6+SWQIYkMFLQRRDVgLZgHQ/wBClxjqMwbISYKKwW+OQmHEWjkOH2xwQ4eDVk7dXUEiRfG6pKTlGdOOAq/h/9k="
                  />
                </div>
                {/* Floating status indicator */}
                <div className="absolute -bottom-2 -right-2 bg-success text-white px-3 py-1 rounded-full text-xs font-medium border-2 border-background animate-pulse">
                  Available for hire
                </div>
              </div>

              {/* Floating Code Snippet */}
              <motion.div
                className="w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <CodeSnippetCard
                  title={CODE_SNIPPETS[currentSnippet].title}
                  language={CODE_SNIPPETS[currentSnippet].language}
                  code={CODE_SNIPPETS[currentSnippet].code}
                  badges={CODE_SNIPPETS[currentSnippet].badges}
                  floating
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-gradient-start" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 