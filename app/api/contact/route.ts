import { NextRequest, NextResponse } from 'next/server'
import { ContactForm } from '@/types'

// Rate limiting (simple in-memory store - in production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
  return ip
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per window

  const record = rateLimitMap.get(key)
  
  if (!record || now - record.lastReset > windowMs) {
    rateLimitMap.set(key, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count++
  return false
}

function validateContactForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email format is invalid')
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long')
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  // Optional company field validation
  if (data.company && typeof data.company !== 'string') {
    errors.push('Company name must be a string')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request)
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          code: 'RATE_LIMITED'
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    
    // Validate input
    const { isValid, errors } = validateContactForm(body)
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors
        },
        { status: 400 }
      )
    }

    // Extract validated data
    const contactData: ContactForm = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      company: body.company?.trim() || undefined,
      phone: body.phone?.trim() || undefined
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    // 4. Integrate with third-party services (EmailJS, SendGrid, etc.)

    // Example: Log the contact form (in production, save to database)
    console.log('Contact form submission:', {
      ...contactData,
      timestamp: new Date().toISOString(),
      ip: getRateLimitKey(request)
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Example: Send email using EmailJS or similar service
    // await sendContactEmail(contactData)

    // Example: Save to database
    // await saveContactToDatabase(contactData)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
        data: {
          id: `contact_${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests to provide form information
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      data: {
        fields: {
          name: { required: true, minLength: 2 },
          email: { required: true, type: 'email' },
          subject: { required: true, minLength: 3 },
          message: { required: true, minLength: 10 },
          company: { required: false },
          phone: { required: false }
        },
        rateLimit: {
          maxRequests: 5,
          windowMinutes: 15
        }
      }
    },
    { status: 200 }
  )
}

// Optional: Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
} 