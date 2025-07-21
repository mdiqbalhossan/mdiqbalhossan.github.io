import type { Metadata } from 'next'

const siteConfig = {
  name: 'Iqbal Hossen',
  title: 'Iqbal Hossen - Full Stack Engineer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions with clean code and exceptional user experiences.',
  url: 'https://iqbalhossen.me',
  ogImage: 'https://iqbalhossen.me/og-image.png',
  twitterHandle: '@yourusername',
  keywords: [
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
    'Database Design',
    'DevOps',
    'Cloud Computing',
    'Mobile Development',
    'E-commerce',
    'SaaS',
  ],
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} - Full Stack Developer`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 400,
        height: 400,
        alt: siteConfig.name,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#a78bfa' },
    ],
  },
  manifest: '/site.webmanifest',
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
  alternates: {
    canonical: '/',
  },
  category: 'Portfolio',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#0d1117',
    'msapplication-TileColor': '#0d1117',
  },
}

// Page-specific metadata generators
export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url
  const ogImage = image ? `${siteConfig.url}${image}` : siteConfig.ogImage

  return {
    title: title || siteConfig.title,
    description: description || siteConfig.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.title,
        },
      ],
    },
    twitter: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage],
    },
  }
}

// Structured data generators
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Full Stack Developer',
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourusername',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Technology',
    },
    knowsAbout: siteConfig.keywords,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressCountry: 'Your Country',
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export { siteConfig } 