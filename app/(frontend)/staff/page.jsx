'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../../../hooks/useTranslations'
import SEOHead from '../../../components/SEOHead'
import { BreadcrumbStructuredData } from '../../../components/StructuredData'

export default function Staff() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  const backgroundImages = [
    '/pyramids.png',
    '/pyramids-2.png',
    '/pyramids-3.png',
    '/pyramids-4.png'
  ];

  const departments = [
    {
      id: 'engineering',
      title: t('staff.engineeringTitle'),
      description: t('staff.engineeringDesc'),
      features: Array.isArray(t('staff.engineeringFeatures')) ? t('staff.engineeringFeatures') : [],
      bgImage: backgroundImages[0]
    },
    {
      id: 'production',
      title: t('staff.productionTitle'),
      description: t('staff.productionDesc'),
      features: Array.isArray(t('staff.productionFeatures')) ? t('staff.productionFeatures') : [],
      bgImage: backgroundImages[1]
    },
    {
      id: 'installation',
      title: t('staff.installationTitle'),
      description: t('staff.installationDesc'),
      features: Array.isArray(t('staff.installationFeatures')) ? t('staff.installationFeatures') : [],
      bgImage: backgroundImages[2]
    },
    {
      id: 'quality',
      title: t('staff.qualityTitle'),
      description: t('staff.qualityDesc'),
      features: Array.isArray(t('staff.qualityFeatures')) ? t('staff.qualityFeatures') : [],
      bgImage: backgroundImages[3]
    },
    {
      id: 'logistics',
      title: t('staff.logisticsTitle'),
      description: t('staff.logisticsDesc'),
      features: Array.isArray(t('staff.logisticsFeatures')) ? t('staff.logisticsFeatures') : [],
      bgImage: backgroundImages[0]
    }
  ];

  const whyChooseUs = [
    {
      title: t('staff.deepExpertise'),
      description: t('staff.deepExpertiseDesc')
    },
    {
      title: t('staff.collaborativeApproach'),
      description: t('staff.collaborativeApproachDesc')
    },
    {
      title: t('staff.relentlessQuality'),
      description: t('staff.relentlessQualityDesc')
    },
    {
      title: t('staff.clientCentricFocus'),
      description: t('staff.clientCentricFocusDesc')
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Working Staff - Expert Team"
        description="Meet Al Fouad Company's expert team - Highly skilled professionals with international experience in aluminum, glass, curtain walls, and architectural systems. Engineering, production, installation, and quality assurance specialists."
        keywords={[
          'aluminum experts',
          'glass specialists',
          'curtain wall engineers',
          'fabrication team',
          'installation experts',
          'quality assurance',
          'architectural team',
          'experienced professionals'
        ]}
        canonical="/staff"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Staff', path: '/staff' }
        ]}
      />
      <div className="min-h-screen bg-[#000000]">
        {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-60 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-[#000000]/60 to-[#000000]/80 z-10" />
        
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#e8c74f 1px, transparent 1px), linear-gradient(90deg, #e8c74f 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
          <div className="text-center space-y-8 max-w-6xl mx-auto px-4">
            <div className="overflow-hidden">
              <h1 
                id="hero-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none transition-all duration-1500 ease-out ${
                  isVisible('hero-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {t('staff.title')}
                <span 
                  className={`block text-3xl md:text-5xl font-extralight mt-8 tracking-[0.3em] transition-all duration-1500 ease-out delay-300 ${
                    isVisible('hero-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ color: '#e8c74f' }}
                >
                  {t('hero.companyName')}
                </span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p 
                id="hero-description"
                data-animate
                className={`text-lg md:text-2xl text-gray-400 font-light tracking-wide max-w-4xl mx-auto leading-relaxed transition-all duration-1500 ease-out delay-600 ${
                  isVisible('hero-description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('staff.subtitle')}
                <span className="block mt-2 text-base md:text-xl text-gray-500">
                  {t('staff.description')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Overview */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[#000000] z-0" />
        
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#e8c74f]/30 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="overview-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('overview-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('staff.ourTeam')}
              </h2>
            </div>
            <div 
              id="overview-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('overview-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="overflow-hidden">
              <p 
                id="overview-p1"
                data-animate
                className={`text-2xl md:text-3xl text-gray-300 leading-relaxed font-light transition-all duration-1500 ease-out delay-600 ${
                  isVisible('overview-p1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('staff.teamDescription')}
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p 
                id="overview-p2"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 leading-relaxed font-light transition-all duration-1500 ease-out delay-900 ${
                  isVisible('overview-p2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('staff.teamSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null 
              ? `url('${departments.find(d => d.id === hoveredCard)?.bgImage || backgroundImages[0]}')`
              : "url('/pyramids-2.png')",
            opacity: hoveredCard !== null ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/40 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="experts-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('experts-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('staff.meetTheExperts')}
              </h2>
            </div>
            <div 
              id="experts-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('experts-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
            <div className="overflow-hidden mt-8">
              <p 
                id="experts-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('experts-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('staff.expertsSubtitle')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <div
                key={department.id}
                id={`department-card-${index}`}
                data-animate
                onMouseEnter={() => setHoveredCard(department.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                  isVisible(`department-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-6 font-light transition-transform duration-500 group-hover:scale-110" style={{ color: '#e8c74f' }}>—</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{ color: '#e8c74f' }}>
                  {department.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
                  {department.description}
                </p>
                <div className="space-y-3">
                  {department.features && department.features.length > 0 ? (
                    department.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <span className="text-[#e8c74f] mr-3 text-xl font-light">•</span>
                        <span className="text-gray-400 font-light leading-relaxed">{feature}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 font-light">Features loading...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our People Make the Difference */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids-3.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 via-[#000000]/50 to-[#000000]/70 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="why-people-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('why-people-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('staff.whyOurPeople')}
              </h2>
            </div>
            <div 
              id="why-people-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('why-people-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
            <div className="overflow-hidden mt-8">
              <p 
                id="why-people-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('why-people-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('staff.makeTheDifference')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                id={`why-choose-card-${index}`}
                data-animate
                className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                  isVisible(`why-choose-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-6 font-light transition-transform duration-500 group-hover:scale-110" style={{ color: '#e8c74f' }}>—</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" style={{ color: '#e8c74f' }}>
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids-4.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 via-[#000000]/50 to-[#000000]/70 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="contact-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('staff.quickContact')}
              </h2>
            </div>
            <div 
              id="contact-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('contact-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
            <div className="overflow-hidden mt-8">
              <p 
                id="contact-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('contact-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('staff.needExpertAdvice')}
              </p>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div 
                id="contact-info"
                data-animate
                className={`transition-all duration-1500 ease-out delay-900 ${
                  isVisible('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                    {t('staff.getInTouch')}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-4" style={{ color: '#e8c74f' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-lg text-gray-300">+966-55-251-4044</p>
                        <p className="text-lg text-gray-300">+966-56-672-2297</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-4" style={{ color: '#e8c74f' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-lg text-gray-300">Egyptian.heart@hotmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                id="discover-more"
                data-animate
                className={`transition-all duration-1500 ease-out delay-1200 ${
                  isVisible('discover-more') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                    {t('staff.discoverMore')}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {t('staff.curiousAboutOurStory')}
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="/about"
                      className="block text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300"
                    >
                      {t('staff.aboutUsLink')}
                    </a>
                    <a 
                      href="/services"
                      className="block text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300"
                    >
                      {t('staff.servicesLink')}
                    </a>
                    <a 
                      href="/projects"
                      className="block text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300"
                    >
                      {t('staff.projectsLink')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}