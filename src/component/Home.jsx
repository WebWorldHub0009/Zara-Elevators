import React from 'react'
import Hero from './HomeComponent/Hero'
import HeroSection from './HomeComponent/HeroSection'
import StatsSection from './HomeComponent/StatsSection'
import AboutSection from './AboutComponent/AboutSection'
import ServicesHero from './ServiceComponent/ServicesHero'

function Home() {
  return (
    <div>
      <Hero/>
      <HeroSection/>
      <AboutSection/>
      <ServicesHero/>
      <StatsSection/>

    </div>
  )
}

export default Home
