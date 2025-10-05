import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'




const Home = () => {
  return (
    <div className='min-h-screen'>
        <ThemeToggle />
        <StarBackground />
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
    </div>
  )
}

export default Home
