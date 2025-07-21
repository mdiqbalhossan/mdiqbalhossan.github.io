export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'design' | 'other'
  status: 'completed' | 'in-progress' | 'planned'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design' | 'other'
  icon?: string
  description?: string
  yearsOfExperience?: number
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  grade?: string
  description?: string
  achievements?: string[]
  image?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: Date
  endDate?: Date
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance'
  companyUrl?: string
  companyLogo?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: Date
  expiryDate?: Date
  credentialId?: string
  verificationUrl?: string
  image?: string
}

export interface SocialLink {
  platform: string
  url: string
  username?: string
  icon: string
  color?: string
}

export interface ContactForm {
  name: string
  email: string
  subject?: string
  message: string
  company?: string
  phone?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  tags: string[]
  category: string
  published: boolean
  featured: boolean
  readingTime: number
  createdAt: Date
  updatedAt: Date
  views?: number
  likes?: number
}

export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
}

export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    accent: string
  }
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone?: string
  website?: string
  avatar: string
  resume?: string
  socialLinks: SocialLink[]
  skills: Skill[]
  languages: Array<{
    name: string
    level: 'native' | 'fluent' | 'conversational' | 'basic'
  }>
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  search?: string
  filters?: Record<string, any>
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Animation and UI types
export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
  repeat?: boolean | number
}

export interface MotionVariants {
  initial: any
  animate: any
  exit?: any
  whileHover?: any
  whileTap?: any
}

export interface LoadingState {
  isLoading: boolean
  error?: string | null
  data?: any | null
}

// Form types
export interface FormField {
  name: string
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file'
  label: string
  placeholder?: string
  required?: boolean
  validation?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
    min?: number
    max?: number
    custom?: (value: any) => boolean | string
  }
  options?: Array<{ label: string; value: string | number }>
}

export interface FormState {
  values: Record<string, any>
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
  isValid: boolean
} 