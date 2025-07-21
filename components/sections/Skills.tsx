'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { SKILLS, SKILL_CATEGORIES } from '@/lib/constants'
import { Code, Database, Server, Wrench, Palette, Star, Zap, TrendingUp, Award } from 'lucide-react'

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Wrench,
  design: Palette,
  other: Star
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'chart' | 'compact'>('grid')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.1 })


  // Enhanced animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const skillCardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -45,
      z: -100
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // Enhanced data processing
  const categories = [
    { key: 'all', label: 'All Skills', icon: Star, count: SKILLS.length },
    ...Object.entries(SKILL_CATEGORIES).map(([key, label]) => ({
      key,
      label,
      icon: categoryIcons[key as keyof typeof categoryIcons],
      count: SKILLS.filter(skill => skill.category === key).length
    }))
  ]

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory)

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { text: 'Master', color: 'success' as const, glow: 'shadow-green-500/30' }
    if (level >= 80) return { text: 'Expert', color: 'success' as const, glow: 'shadow-emerald-500/20' }
    if (level >= 70) return { text: 'Advanced', color: 'default' as const, glow: 'shadow-blue-500/20' }
    if (level >= 60) return { text: 'Proficient', color: 'warning' as const, glow: 'shadow-yellow-500/20' }
    return { text: 'Learning', color: 'error' as const, glow: 'shadow-orange-500/20' }
  }

  const getSkillStats = () => {
    const totalSkills = SKILLS.length
    const expertSkills = SKILLS.filter(skill => skill.level >= 80).length
    const avgLevel = Math.round(SKILLS.reduce((sum, skill) => sum + skill.level, 0) / totalSkills)
    const totalExperience = SKILLS.reduce((sum, skill) => sum + (skill.yearsOfExperience || 0), 0)
    
    return { totalSkills, expertSkills, avgLevel, totalExperience }
  }

  const stats = getSkillStats()

  return (
    <section className="section-padding overflow-x-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          className="relative"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-full blur-3xl"
              animate={floatingAnimation}
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/20 to-gradient-start/20 rounded-full blur-3xl"
              animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 1}}}
            />
          </div>

          {/* Enhanced Section Header */}
          <motion.div 
            variants={skillCardVariants}
            className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10"
          >
            <motion.div
              className="inline-block mb-4 sm:mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-gradient-start to-gradient-end rounded-2xl flex items-center justify-center shadow-glow-lg">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </motion.div>
            
            <GradientText as="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Skills & Expertise
            </GradientText>
            
            <p className="text-text-secondary text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4">
              A showcase of my technical expertise across various domains, 
              from cutting-edge frontend frameworks to robust backend systems.
            </p>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 px-4"
              variants={containerVariants}
            >
              {[
                { label: 'Total Skills', value: stats.totalSkills, icon: Star },
                { label: 'Expert Level', value: stats.expertSkills, icon: Award },
                { label: 'Avg. Proficiency', value: `${stats.avgLevel}%`, icon: TrendingUp },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  className="flex items-center space-x-2 sm:space-x-3 bg-background-secondary/50 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border hover:border-gradient-start transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gradient-start" />
                  <div className="text-left">
                    <div className="text-lg sm:text-2xl font-bold text-gradient-start">{stat.value}</div>
                    <div className="text-xs sm:text-xs text-text-secondary">{stat.label}</div>
                    <div className="text-xs text-text-secondary">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* View Mode Toggle & Category Filter */}
          <motion.div 
            variants={skillCardVariants}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 sm:space-x-2 bg-background-secondary/50 backdrop-blur-sm p-1 rounded-xl border border-border order-2 sm:order-1">
              {[
                { mode: 'grid', icon: '⊞', label: 'Grid' },
                { mode: 'chart', icon: '📊', label: 'Chart' },
                { mode: 'compact', icon: '☰', label: 'List' }
              ].map(({ mode, icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === mode 
                      ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-glow' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-background-tertiary'
                  }`}
                >
                  <span className="text-sm sm:text-lg">{icon}</span>
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 order-1 sm:order-2 w-full sm:w-auto">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory === category.key
                
                return (
                  <motion.button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm ${
                      isActive 
                        ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-glow' 
                        : 'bg-background-secondary/50 text-text-secondary hover:text-text-primary hover:bg-background-tertiary border border-border hover:border-gradient-start'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <span className="sm:hidden">{category.key}</span>
                    <Badge 
                      variant={isActive ? "secondary" : "outline"} 
                      size="sm"
                      className={`ml-1 text-xs ${isActive ? 'bg-white/20' : ''}`}
                    >
                      {category.count}
                    </Badge>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Skills Display - Grid View */}
          {viewMode === 'grid' && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`grid-${activeCategory}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredSkills.map((skill, index) => {
                  const skillLevelInfo = getSkillLevel(skill.level)
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillCardVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group perspective-1000"
                    >
                      <Card 
                        variant="gradient" 
                        className={`h-full transition-all duration-500 transform-gpu ${
                          hoveredSkill === skill.name 
                            ? `shadow-2xl ${skillLevelInfo.glow} scale-105 rotate-1` 
                            : 'hover:shadow-glow'
                        }`}
                      >
                        {/* Skill Header */}
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className="text-3xl p-2 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-xl"
                                animate={hoveredSkill === skill.name ? pulseAnimation : {}}
                              >
                                {skill.icon}
                              </motion.div>
                              <div>
                                <CardTitle className="text-lg font-bold group-hover:text-gradient-start transition-colors">
                                  {skill.name}
                                </CardTitle>
                                <Badge 
                                  variant={skillLevelInfo.color} 
                                  size="sm"
                                  className="mt-1 group-hover:scale-110 transition-transform"
                                >
                                  {skillLevelInfo.text}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <motion.div 
                                className="text-3xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent"
                                animate={isVisible ? { scale: [0, 1.2, 1] } : {}}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                              >
                                {skill.level}%
                              </motion.div>
                              {skill.yearsOfExperience && (
                                <div className="text-xs text-text-secondary font-medium">
                                  {skill.yearsOfExperience}+ years
                                </div>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          {/* Animated Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-text-secondary">Proficiency</span>
                              <span className="text-gradient-start font-medium">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"
                                variants={progressVariants}
                                custom={skill.level}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                              />
                            </div>
                          </div>
                          
                          {skill.description && (
                            <motion.p 
                              className="text-text-secondary text-sm leading-relaxed"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ delay: 0.3 }}
                            >
                              {skill.description}
                            </motion.p>
                          )}

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            <Badge variant="outline" size="sm" className="text-xs">
                              {SKILL_CATEGORIES[skill.category as keyof typeof SKILL_CATEGORIES]}
                            </Badge>
                            {skill.level >= 80 && (
                              <Badge variant="success" size="sm" className="text-xs">
                                ⭐ Expert
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Skills Display - Chart View */}
          {viewMode === 'chart' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {Object.entries(SKILL_CATEGORIES).map(([categoryKey, categoryLabel]) => {
                const categorySkills = SKILLS.filter(skill => skill.category === categoryKey)
                if (categorySkills.length === 0) return null

                return (
                  <motion.div
                    key={categoryKey}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Object.keys(SKILL_CATEGORIES).indexOf(categoryKey) * 0.1 }}
                  >
                    <Card variant="glass" className="p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        {(() => {
                          const Icon = categoryIcons[categoryKey as keyof typeof categoryIcons];
                          return <Icon className="w-6 h-6 text-gradient-start" />;
                        })()}
                        <h3 className="text-xl font-bold">{categoryLabel}</h3>
                        <Badge variant="outline">{categorySkills.length} skills</Badge>
                      </div>
                      
                      <div className="space-y-4">
                        {categorySkills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center space-x-4"
                          >
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <span className="text-xl">{skill.icon}</span>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-medium text-text-primary truncate">{skill.name}</span>
                                  <span className="text-sm font-bold text-gradient-start ml-2">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Skills Display - Compact View */}
          {viewMode === 'compact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-3"
            >
              {filteredSkills.map((skill, index) => {
                const skillLevelInfo = getSkillLevel(skill.level)
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center justify-between p-4 bg-background-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-gradient-start transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-gradient-start transition-colors">
                          {skill.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Badge variant={skillLevelInfo.color} size="sm">{skillLevelInfo.text}</Badge>
                          {skill.yearsOfExperience && (
                            <span>{skill.yearsOfExperience}+ years</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                        />
                      </div>
                      <span className="text-lg font-bold text-gradient-start min-w-[3rem] text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Enhanced Skills Insights */}
          <motion.div 
            variants={skillCardVariants}
            className="mt-20 space-y-12"
          >
            {/* Skill Mastery Overview */}
            <Card variant="glass" className="overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10" />
              <CardContent className="relative z-10 py-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <GradientText>Skill Mastery Overview</GradientText>
                  </h3>
                  <p className="text-text-secondary text-lg">
                    Distribution of expertise across different technology domains
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                  {Object.entries(SKILL_CATEGORIES).map(([key, label], index) => {
                    const categorySkills = SKILLS.filter(skill => skill.category === key)
                    const averageLevel = categorySkills.length > 0 
                      ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
                      : 0
                    const expertCount = categorySkills.filter(skill => skill.level >= 80).length
                    
                    return (
                      <motion.div 
                        key={key} 
                        className="text-center group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="mb-4">
                          {(() => {
                            const Icon = categoryIcons[key as keyof typeof categoryIcons];
                            return <Icon className="w-12 h-12 mx-auto text-gradient-start group-hover:scale-110 transition-transform" />;
                          })()}
                        </div>
                        
                        <motion.div 
                          className="text-4xl font-bold mb-2"
                          animate={isVisible ? { scale: [0, 1.2, 1] } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        >
                          <GradientText>{averageLevel}%</GradientText>
                        </motion.div>
                        
                        <div className="text-text-primary font-semibold mb-2">{label}</div>
                        
                        <div className="space-y-1">
                          <Badge variant="outline" size="sm">
                            {categorySkills.length} skills
                          </Badge>
                          {expertCount > 0 && (
                            <Badge variant="success" size="sm">
                              {expertCount} expert
                            </Badge>
                          )}
                        </div>

                        {/* Mini progress ring */}
                        <div className="relative w-16 h-16 mx-auto mt-4">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-background-tertiary"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="url(#gradient)"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                              animate={isVisible ? {
                                strokeDasharray: 176,
                                strokeDashoffset: 176 - (176 * averageLevel) / 100
                              } : {}}
                              transition={{ delay: 0.8 + index * 0.1, duration: 1.5 }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="100%" stopColor="#EC4899" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-gradient-start">{averageLevel}%</span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Top Skills Showcase */}
            <Card variant="gradient" className="overflow-hidden">
              <CardContent className="py-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <GradientText>Top Skills Arsenal</GradientText>
                  </h3>
                  <p className="text-text-secondary text-lg">
                    My strongest and most frequently used technologies
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {SKILLS
                    .filter(skill => skill.level >= 80)
                    .sort((a, b) => b.level - a.level)
                    .slice(0, 10)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          delay: index * 0.1, 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100 
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotateY: 10,
                          z: 50,
                          transition: { duration: 0.3 }
                        }}
                        className="group cursor-pointer"
                      >
                        <div className="relative">
                          <div className="bg-background-secondary/80 backdrop-blur-sm p-6 rounded-2xl border border-border group-hover:border-gradient-start transition-all duration-300 text-center transform-gpu group-hover:shadow-glow">
                            <motion.div 
                              className="text-4xl mb-3"
                              animate={hoveredSkill === skill.name ? pulseAnimation : {}}
                            >
                              {skill.icon}
                            </motion.div>
                            <h4 className="font-bold text-text-primary group-hover:text-gradient-start transition-colors mb-2">
                              {skill.name}
                            </h4>
                            <div className="text-2xl font-bold text-gradient-start mb-2">
                              {skill.level}%
                            </div>
                            <Badge variant="success" size="sm">
                              Expert
                            </Badge>
                          </div>
                          
                          {/* Hover overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            initial={false}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Journey Timeline */}
            <Card variant="glass">
              <CardContent className="py-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <GradientText>Continuous Learning</GradientText>
                  </h3>
                  <p className="text-text-secondary text-lg">
                    Technologies I'm currently exploring and mastering
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gradient-start to-gradient-end rounded-full opacity-30" />
                    
                    <div className="space-y-12">
                      {[
                        { category: 'frontend', skills: SKILLS.filter(s => s.category === 'frontend' && s.level < 80) },
                        { category: 'backend', skills: SKILLS.filter(s => s.category === 'backend' && s.level < 80) },
                        { category: 'tools', skills: SKILLS.filter(s => s.category === 'tools' && s.level < 80) }
                      ].filter(group => group.skills.length > 0).map((group, groupIndex) => (
                        <motion.div
                          key={group.category}
                          initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: groupIndex * 0.2 }}
                          className={`flex items-center ${groupIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                          <div className={`w-5/12 ${groupIndex % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <Card variant="bordered" className="p-6">
                              <h4 className="text-xl font-bold mb-4 capitalize">
                                {group.category} Development
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                  <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center space-x-2 bg-background-tertiary px-3 py-2 rounded-lg"
                                  >
                                    <span className="text-sm">{skill.icon}</span>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <Badge variant="outline" size="sm">
                                      {skill.level}%
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </Card>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="w-4 h-4 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full shadow-glow" />
                          </div>
                          
                          <div className="w-5/12" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}