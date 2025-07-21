'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { PERSONAL_INFO, SKILLS, EDUCATION, PROJECTS } from '@/lib/constants'
import { Download, Eye, FileText, Briefcase, User, Code, GraduationCap, Mail, MapPin, Calendar, Star } from 'lucide-react'

export default function Resume() {
  const [downloadCount, setDownloadCount] = useState(247) // Example download count

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

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a')
    link.href = PERSONAL_INFO.resume
    link.download = `${PERSONAL_INFO.name.replace(' ', '_')}_Resume.pdf`
    link.click()
    setDownloadCount(prev => prev + 1)
  }

  const handlePreview = () => {
    window.open(PERSONAL_INFO.resume, '_blank')
  }

  const topSkills = SKILLS
    .filter(skill => skill.level >= 80)
    .sort((a, b) => b.level - a.level)
    .slice(0, 8)

  const recentProjects = PROJECTS
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 3)

  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2023 // Assuming started in 2020

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
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <GradientText as="h2" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resume & CV
            </GradientText>
            <p className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto">
              Download my latest resume or explore my professional summary, skills, and experience highlights below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Resume Actions - Left Side */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-2 lg:order-1">
              {/* Download Card */}
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>Download Resume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-6">
                      Get the latest version of my resume in PDF format. Updated {new Date().toLocaleDateString()}.
                    </p>
                    
                    <div className="space-y-4">
                      <Button
                        variant="gradient"
                        size="lg"
                        onClick={handleDownload}
                        leftIcon={<Download className="w-5 h-5" />}
                        className="w-full"
                      >
                        Download PDF
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePreview}
                        leftIcon={<Eye className="w-5 h-5" />}
                        className="w-full"
                      >
                        Preview Online
                      </Button>
                    </div>

                    <div className="mt-4 text-sm text-text-secondary">
                      Downloaded {downloadCount} times
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-gradient-start" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Experience</span>
                        <Badge variant="gradient" size="sm">{yearsOfExperience}+ years</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Projects</span>
                        <Badge variant="gradient" size="sm">{PROJECTS.length}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Technologies</span>
                        <Badge variant="gradient" size="sm">{SKILLS.length}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Education</span>
                        <Badge variant="gradient" size="sm">{EDUCATION.length}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <Card variant="bordered" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-gradient-end" />
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gradient-start" />
                        <span className="text-text-secondary text-sm">{PERSONAL_INFO.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gradient-end" />
                        <span className="text-text-secondary text-sm">{PERSONAL_INFO.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-gradient-start" />
                        <span className="text-text-secondary text-sm">Available immediately</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Resume Preview - Right Side */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Professional Summary */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-gradient-start" />
                      Professional Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-text-secondary leading-relaxed">
                        {PERSONAL_INFO.bio}
                      </p>
                      <blockquote className="border-l-4 border-gradient-start pl-4 italic text-text-primary bg-gradient-to-r from-gradient-start/10 to-transparent p-4 rounded-r-lg">
                        "{PERSONAL_INFO.mission}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Core Skills */}
              <motion.div variants={itemVariants}>
                <Card variant="gradient" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2 text-gradient-end" />
                      Core Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                      {topSkills.map((skill, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl mb-2">{skill.icon}</div>
                          <div className="text-text-primary font-medium text-sm">{skill.name}</div>
                          <div className="text-gradient-start text-xs font-semibold">{skill.level}%</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Projects */}
              <motion.div variants={itemVariants}>
                <Card variant="bordered" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-gradient-start" />
                      Recent Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {recentProjects.map((project, index) => (
                        <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-text-primary font-semibold">{project.title}</h4>
                            <Badge variant={project.status === 'completed' ? 'success' : 'warning'} size="sm">
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" size="sm" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="secondary" size="sm" className="text-xs">
                                +{project.technologies.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education Highlights */}
              <motion.div variants={itemVariants}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-gradient-end" />
                      Education Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {EDUCATION.slice(0, 2).map((edu, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-text-primary font-semibold">{edu.degree}</h4>
                            <div className="text-gradient-start text-sm">{edu.institution}</div>
                            <div className="text-text-secondary text-xs">
                              {edu.startDate.getFullYear()} - {edu.endDate?.getFullYear() || 'Present'}
                            </div>
                            {edu.grade && (
                              <Badge variant="gradient" size="sm" className="mt-2">
                                {edu.grade}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
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