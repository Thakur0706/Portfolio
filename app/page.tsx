import type { Metadata } from 'next'
import PageTransition from '@/components/shared/PageTransition'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Soham Thakur — Full-Stack Developer',
}

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </PageTransition>
  )
}
