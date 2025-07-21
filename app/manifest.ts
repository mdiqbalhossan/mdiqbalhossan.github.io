import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MD Iqbal Hossen - Software Engineer',
    short_name: 'Md Iqbal Hossen',
    description: 'Passionate Software Engineer with expertise in modern web technologies. I love creating innovative digital solutions that solve real-world problems with clean, efficient code.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#a78bfa',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['portfolio', 'developer', 'business'],
    
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    
    screenshots: [
      {
        src: '/images/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
      },
      {
        src: '/images/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
      }
    ],
    
    shortcuts: [
      {
        name: 'View Projects',
        short_name: 'Projects',
        description: 'View my portfolio projects',
        url: '/#projects',
        icons: [
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Contact Me',
        short_name: 'Contact',
        description: 'Get in touch with me',
        url: '/#contact',
        icons: [
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Download Resume',
        short_name: 'Resume',
        description: 'Download my resume',
        url: '/resume.pdf',
        icons: [
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    ],
    
    prefer_related_applications: false,
  }
} 