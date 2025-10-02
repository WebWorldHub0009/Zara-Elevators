import React from 'react'
import Hero from './HomeComponent/Hero'
import HeroSection from './HomeComponent/HeroSection'
import StatsSection from './HomeComponent/StatsSection'
import AboutSection from './AboutComponent/AboutSection'
import ServicesHero from './ServiceComponent/ServicesHero'
import TeamSection from './AboutComponent/TeamSection'
import KeyServices from './HomeComponent/KeyServices'
import ContactPage from './ContactComponent/ContactPage'
import Testimonials from './HomeComponent/Testimonials'

function Home() {
  return (
    <div>
      <Hero/>
      <HeroSection/>
      <AboutSection/>
      <ServicesHero/>
      <KeyServices/>
      <StatsSection/>
      <TeamSection/>
      <Testimonials/>
      <ContactPage/>

    </div>
  )
}

export default Home
