'use client'

import React from 'react'
import Hero from '../../components/Hero'
import OurVision from '../../components/OurVision'
import StaffSection from '../../components/StaffSection'
import ProjectsSection from '../../components/ProjectsSection'
import ContactSection from '../../components/ContactSection'
import ReviewCarousel from '../../components/ReviewCarousel'

function HomePage() {
  return (
    <div>
        <Hero />
        <OurVision />
        <StaffSection />
        <ProjectsSection />
        <ReviewCarousel />
        <ContactSection />
    </div>
  )
}

export default HomePage