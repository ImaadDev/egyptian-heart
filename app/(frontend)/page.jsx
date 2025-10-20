'use client'

import React from 'react'
import Head from 'next/head'
import Hero from '../../components/Hero'
import OurVision from '../../components/OurVision'
import StaffSection from '../../components/StaffSection'
import ProjectsSection from '../../components/ProjectsSection'
import ContactSection from '../../components/ContactSection'
import ReviewCarousel from '../../components/ReviewCarousel'
import StructuredData from '../../components/StructuredData'

function HomePage() {
  return (
    <>
      <StructuredData type="organization" />
      <div>
          <Hero />
          <OurVision />
          <StaffSection />
          <ProjectsSection />
          <ReviewCarousel />
          <ContactSection />
      </div>
    </>
  )
}

export default HomePage