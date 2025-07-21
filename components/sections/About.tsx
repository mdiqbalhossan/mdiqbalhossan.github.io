'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { PERSONAL_INFO, ABOUT_STATS } from '@/lib/constants'
import { Terminal, Coffee, Code, Heart, MapPin, Mail } from 'lucide-react'

export default function About() {
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

  const terminalCommands = [
    "$ whoami",
    `> ${PERSONAL_INFO.name}`,
    "$ cat about.txt",
    `> Passionate developer who loves creating digital experiences`,
    "$ ls skills/",
    `> frontend/ backend/ databases/ tools/`,
    "$ echo $PASSION",
    `> "Building innovative solutions with clean code"`
  ]

  return (
    <section className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <GradientText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </GradientText>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Personal Story */}
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-gradient-start" />
                      <span>My Story</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      Hello! I'm {PERSONAL_INFO.name}, a passionate full-stack developer based in {PERSONAL_INFO.location}. 
                      My journey in web development started during my computer science studies, where I discovered 
                      my love for creating digital solutions that make a real impact.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      What drives me is the endless possibility to learn and grow in this ever-evolving field. 
                      From crafting pixel-perfect user interfaces to architecting robust backend systems, 
                      I enjoy every aspect of the development process.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                      projects, or enjoying a good cup of coffee while reading tech blogs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mission Statement */}
              <motion.div variants={itemVariants}>
                <Card variant="bordered" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-gradient-end" />
                      <span>My Mission</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg italic text-text-primary border-l-4 border-gradient-start pl-6 bg-gradient-to-r from-gradient-start/10 to-transparent p-4 rounded-r-lg">
                      "{PERSONAL_INFO.mission}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fun Facts */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Coffee className="w-5 h-5 text-warning" />
                      <span>Fun Facts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant="gradient" size="sm">💻</Badge>
                        <span className="text-text-secondary">Favorite IDE: VS Code</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="gradient" size="sm">☕</Badge>
                        <span className="text-text-secondary">Coffee consumed daily: 4+ cups</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="gradient" size="sm">🌙</Badge>
                        <span className="text-text-secondary">Coding time: Late night owl</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="gradient" size="sm">🎵</Badge>
                        <span className="text-text-secondary">Coding playlist: Lo-fi hip hop</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Terminal Window */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" padding="none" className="font-mono text-sm">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between p-3 bg-background-tertiary border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-error"></div>
                        <div className="w-3 h-3 rounded-full bg-warning"></div>
                        <div className="w-3 h-3 rounded-full bg-success"></div>
                      </div>
                      <Terminal className="w-4 h-4 text-text-secondary" />
                      <span className="text-text-secondary text-xs">terminal</span>
                    </div>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-4 bg-background space-y-2">
                    {terminalCommands.map((command, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.5, duration: 0.3 }}
                        className={command.startsWith('$') 
                          ? 'text-gradient-start font-semibold' 
                          : 'text-text-secondary ml-2'
                        }
                      >
                        {command}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ABOUT_STATS.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-text-secondary">{stat.label}</span>
                          <Badge variant="gradient" size="sm">{stat.value}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <Card variant="bordered" hover>
                  <CardHeader>
                    <CardTitle>Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gradient-start" />
                        <span className="text-text-secondary text-sm">{PERSONAL_INFO.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gradient-end" />
                        <span className="text-text-secondary text-sm">{PERSONAL_INFO.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}