'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { EXPERIENCE } from '@/lib/constants'
import { Calendar, MapPin, Building, Trophy, ExternalLink } from 'lucide-react'

export default function Experience() {
  console.log('Using experience data, count:', EXPERIENCE.length)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date()
    const months = (end.getFullYear() - startDate.getFullYear()) * 12 + (end.getMonth() - startDate.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`
    } else {
      return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-600'
      case 'freelance':
        return 'bg-blue-600'
      case 'internship':
        return 'bg-yellow-600'
      case 'contract':
        return 'bg-purple-600'
      default:
        return 'bg-gray-600'
    }
  }

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

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-white mb-12 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            <GradientText>Professional Experience</GradientText> ({EXPERIENCE.length})
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg">
            My professional journey and the impactful projects I've contributed to in the tech industry.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                        <Badge className={`${getTypeColor(exp.type)} text-white text-xs`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                        <Building className="w-4 h-4" />
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-colors flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 mb-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </div>
                      <div className="text-sm text-gray-400">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">🛠️ Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              <GradientText>Professional Skills</GradientText>
            </h3>
            <p className="text-gray-300">Core competencies gained through professional experience</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack Development",
              "Team Leadership",
              "Project Management",
              "Performance Optimization",
              "CI/CD Implementation",
              "Code Review",
              "Mentoring",
              "Client Communication",
              "System Architecture",
              "API Development",
              "Database Design",
              "DevOps Practices",
              "Agile Methodology",
              "Technical Documentation"
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 text-white px-3 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
