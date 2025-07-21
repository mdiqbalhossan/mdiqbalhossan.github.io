import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ParticlesBackground from '@/components/ParticlesBackground'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'MD Iqbal Hossen - Full Stack Engineer',
    template: '%s | MD Iqbal Hossen - Full Stack Engineer'
  },
  description: 'Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions with clean code and exceptional user experiences.',
  keywords: [
    'Full Stack Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Web Development',
    'Frontend',
    'Backend',
    'Portfolio',
    'Software Engineer',
    'UI/UX',
    'Responsive Design',
    'API Development',
    'Database Design'
  ],
  authors: [{ name: 'Md Iqbal Hossen', url: 'https://iqbalhossen.me' }],
  creator: 'Md Iqbal Hossen',
  publisher: 'Md Iqbal Hossen',
  metadataBase: new URL('https://iqbalhossen.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iqbalhossen.me',
    title: 'MD Iqbal Hossen - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'MD Iqbal Hossen Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MD Iqbal Hossen - Full Stack Engineer Portfolio',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 400,
        height: 400,
        alt: 'MD Iqbal Hossen - Full Stack Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Iqbal Hossen - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@iqbalhossen',
    site: '@iqbalhossen',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Portfolio',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a78bfa" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#0d1117" />
        <meta name="msapplication-TileColor" content="#0d1117" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'MD Iqbal Hossen',
              jobTitle: 'Full Stack Engineer',
              description: 'Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.',
              url: 'https://iqbalhossen.me',
              image: 'https://iqbalhossen.me/og-image.png',
              sameAs: [
                'https://github.com/iqbalhossen',
                'https://linkedin.com/in/iqbalhossen',
                'https://twitter.com/iqbalhossen'
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance'
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Technology'
              },
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Node.js',
                'Web Development',
                'Frontend Development',
                'Backend Development',
                'API Development',
                'Database Design'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Your City',
                addressCountry: 'Your Country'
              }
            })
          }}
        />
      </head>
      
      <body 
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        
        {/* Performance Monitoring */}
        <PerformanceMonitor />

        <ThemeProvider>
          <div className="relative min-h-screen">
            <ParticlesBackground />
            <main id="main-content" className="relative z-10" tabIndex={-1}>
              {children}
            </main>
          </div>
        </ThemeProvider>

        {/* Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />

            {/* Vercel Analytics */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
} 