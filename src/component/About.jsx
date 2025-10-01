import React from 'react'
import AboutHero from './AboutComponent/AboutHero'
import AboutSection from './AboutComponent/AboutSection'
import StatsSection from './HomeComponent/StatsSection'
import TeamSection from './AboutComponent/TeamSection'
import MissionVision from './AboutComponent/MissionVision'

function About() {
  return (
    <div >
      <AboutHero/>
      <AboutSection/>
      <StatsSection/>
      <TeamSection/>
      <MissionVision/>
    </div>
  )
}

export default About
