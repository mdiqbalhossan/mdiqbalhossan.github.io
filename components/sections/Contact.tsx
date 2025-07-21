'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
// import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  company?: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  general?: string
}

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email must be less than 100 characters'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Subject must be less than 200 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
    
    // Clear general error when user modifies form
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: ''
        })
      } else {
        setSubmitStatus('error')
        if (result.errors) {
          setErrors(result.errors)
        } else {
          setErrors({ general: result.error || 'Failed to send message. Please try again.' })
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrors({ 
        general: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding">
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
              Let's Work Together
            </GradientText>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-8">
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-6 h-6 mr-3 text-gradient-start" />
                      Send me a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg bg-background-tertiary border ${
                              errors.name ? 'border-error' : 'border-border focus:border-gradient-start'
                            } text-text-primary placeholder-text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start/20`}
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-error flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg bg-background-tertiary border ${
                              errors.email ? 'border-error' : 'border-border focus:border-gradient-start'
                            } text-text-primary placeholder-text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start/20`}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-error flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company and Subject Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                            Company (Optional)
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-border focus:border-gradient-start text-text-primary placeholder-text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start/20"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg bg-background-tertiary border ${
                              errors.subject ? 'border-error' : 'border-border focus:border-gradient-start'
                            } text-text-primary placeholder-text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start/20`}
                            placeholder="What's this about?"
                          />
                          {errors.subject && (
                            <p className="mt-1 text-sm text-error flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.subject}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-background-tertiary border ${
                            errors.message ? 'border-error' : 'border-border focus:border-gradient-start'
                          } text-text-primary placeholder-text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gradient-start/20 resize-none`}
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-error flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="flex items-center justify-between">
                        <Button
                          type="submit"
                          variant="gradient"
                          size="lg"
                          loading={isSubmitting}
                          leftIcon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                          className="min-w-[150px]"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>

                        {submitStatus === 'success' && (
                          <div className="flex items-center text-success">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            {submitMessage}
                          </div>
                        )}

                        {submitStatus === 'error' && (
                          <div className="flex items-center text-error">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            {errors.general}
                          </div>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info - Right Side */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Details */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-gradient-start" />
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-text-primary font-medium">Email</div>
                          <div className="text-text-secondary text-sm">{CONTACT_INFO.email}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-text-primary font-medium">Phone</div>
                          <div className="text-text-secondary text-sm">{CONTACT_INFO.phone}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-text-primary font-medium">Location</div>
                          <div className="text-text-secondary text-sm">{CONTACT_INFO.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-text-primary font-medium">Response Time</div>
                          <div className="text-text-secondary text-sm">{CONTACT_INFO.responseTime}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Card variant="bordered" hover>
                  <CardHeader>
                    <CardTitle>Follow Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {SOCIAL_LINKS.map((link) => {
                        const Icon = iconMap[link.icon as keyof typeof iconMap]
                        return (
                          <Button
                            key={link.platform}
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(link.url, '_blank')}
                            leftIcon={<Icon className="w-4 h-4" />}
                            className="justify-start hover:scale-105 transition-transform"
                          >
                            {link.platform}
                          </Button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Availability */}
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant="success" size="lg" className="mb-3">
                        Available for hire
                      </Badge>
                      <p className="text-text-secondary text-sm">
                        {CONTACT_INFO.availability}
                      </p>
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