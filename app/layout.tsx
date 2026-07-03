import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Soham Thakur — Full-Stack Developer',
    template: '%s | Soham Thakur',
  },
  description:
    'Full-Stack Developer specialising in MERN stack and AI-integrated web applications. Open to SDE roles.',
  keywords:
    'Soham Thakur, Full-Stack Developer, MERN Stack, React, Node.js, AI, Portfolio, Web Developer, Mumbai',
  authors: [{ name: 'Soham Sagar Thakur' }],
  creator: 'Soham Sagar Thakur',
  openGraph: {
    title: 'Soham Thakur — Full-Stack Developer',
    description:
      'Full-Stack Developer specialising in MERN stack and AI-integrated web applications.',
    url: 'https://soham-thakur.vercel.app',
    siteName: 'Soham Thakur Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soham Thakur — Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soham Thakur — Full-Stack Developer',
    description:
      'Full-Stack Developer specialising in MERN stack and AI-integrated web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Soham Sagar Thakur',
  url: 'https://soham-thakur.vercel.app',
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack Developer with 1+ year of experience building production-grade MERN applications.',
  email: 'thakursoham131@gmail.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: "Vivekanand Education Society's Institute of Technology (VESIT)",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'TypeScript',
    'JavaScript',
    'REST APIs',
    'AI Integration',
    'Full-Stack Development',
  ],
  sameAs: [
    'https://github.com/Thakur0706',
    'https://www.linkedin.com/in/soham-thakur-285a242b1',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${mono.variable} font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="relative flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
