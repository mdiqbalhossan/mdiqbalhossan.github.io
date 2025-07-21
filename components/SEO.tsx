import Head from 'next/head'
import { SEOData } from '@/types'

interface SEOProps extends SEOData {
  children?: React.ReactNode
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  children
}: SEOProps) {
  const fullTitle = title.includes('|') ? title : `${title} | Your Name - Full Stack Developer`
  const canonicalUrl = url || 'https://yourname.dev'
  const ogImage = image || '/og-image.png'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Full Stack Developer',
    description: description,
    url: canonicalUrl,
    image: ogImage,
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourusername'
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Web Development',
      'Frontend Development',
      'Backend Development'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Technology'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressCountry: 'Your Country'
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Your Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Your Name Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@yourusername" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0d1117" />
      <meta name="msapplication-TileColor" content="#0d1117" />
      <meta name="application-name" content="Your Name Portfolio" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {children}
    </Head>
  )
} 