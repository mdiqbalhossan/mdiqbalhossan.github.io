import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      
      <div className="space-y-0">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </>
  )
} 