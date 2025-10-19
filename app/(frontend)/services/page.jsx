'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../../../hooks/useTranslations'

export default function Services() {
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

  const services = [
    {
      id: 'windows',
      title: t('services.windowsSystems'),
      description: t('services.windowsDesc'),
      features: t('services.windowsFeatures'),
      bgImage: backgroundImages[0]
    },
    {
      id: 'doors',
      title: t('services.doorsSystems'),
      description: t('services.doorsDesc'),
      features: t('services.doorsFeatures'),
      bgImage: backgroundImages[1]
    },
    {
      id: 'facades',
      title: t('services.frontsFacades'),
      description: t('services.frontsDesc'),
      features: t('services.frontsFeatures'),
      bgImage: backgroundImages[2]
    },
    {
      id: 'shutters',
      title: t('services.shutterSystems'),
      description: t('services.shutterDesc'),
      features: t('services.shutterFeatures'),
      bgImage: backgroundImages[3]
    },
    {
      id: 'cladding',
      title: t('services.claddingSystems'),
      description: t('services.claddingDesc'),
      features: t('services.claddingFeatures'),
      bgImage: backgroundImages[0]
    },
    {
      id: 'showers',
      title: t('services.showerSystems'),
      description: t('services.showerDesc'),
      features: t('services.showerFeatures'),
      bgImage: backgroundImages[1]
    },
    {
      id: 'handrails',
      title: t('services.handrailSystems'),
      description: t('services.handrailDesc'),
      features: t('services.handrailFeatures'),
      bgImage: backgroundImages[2]
    }
  ];

  return (
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
                {t('services.title')}
              <span 
                  className={`block text-3xl md:text-5xl font-extralight mt-8 tracking-[0.3em] transition-all duration-1500 ease-out delay-300 ${
                    isVisible('hero-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ color: '#e8c74f' }}
                >
                  ALUMETAL
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
                {t('services.subtitle')}
                <span className="block mt-2 text-base md:text-xl text-gray-500">
                  {t('services.description')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
                {t('services.whyChooseUs')}
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
                {t('services.overviewDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null 
              ? `url('${services.find(s => s.id === hoveredCard)?.bgImage || backgroundImages[0]}')`
              : "url('/pyramids-2.png')",
            opacity: hoveredCard !== null ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/40 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="services-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('services-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('services.whatWeOffer')}
            </h2>
            </div>
            <div 
              id="services-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('services-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${index}`}
                data-animate
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                  isVisible(`service-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-6 font-light transition-transform duration-500 group-hover:scale-110" style={{ color: '#e8c74f' }}>—</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{ color: '#e8c74f' }}>
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-[#e8c74f] mr-3 text-xl font-light">•</span>
                      <span className="text-gray-400 font-light leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  </div>
                <div className="mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-lg transform hover:scale-105"
                  >
                    {t('services.orderNow')}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Alumetal */}
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
                id="why-choose-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('why-choose-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('services.whyChooseUs')}
            </h2>
            </div>
            <div 
              id="why-choose-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('why-choose-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <p 
                id="why-choose-text"
                data-animate
                className={`text-xl md:text-2xl text-gray-300 leading-relaxed font-light transition-all duration-1500 ease-out delay-600 ${
                  isVisible('why-choose-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('services.whyChooseDesc')}
              </p>
                  </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                id="why-choose-left"
                data-animate
                className={`transition-all duration-1500 ease-out delay-900 ${
                  isVisible('why-choose-left') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                  {t('services.learnMoreAboutUs')}
                </h3>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
                >
                  {t('services.aboutUs')}
                </a>
                </div>
                
              <div 
                id="why-choose-right"
                data-animate
                className={`transition-all duration-1500 ease-out delay-1200 ${
                  isVisible('why-choose-right') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                  {t('services.contactUsForConsultation')}
                </h3>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-lg transform hover:scale-105"
                >
                  {t('services.freeConsultation')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids-4.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 via-[#000000]/50 to-[#000000]/70 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="overflow-hidden mb-12">
            <h2 
              id="cta-title"
              data-animate
              className={`text-5xl lg:text-9xl font-black tracking-tighter text-center transition-all duration-1500 ease-out ${
                isVisible('cta-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ color: '#e8c74f' }}
            >
              {t('services.exploreOurProjects')}
          </h2>
          </div>
          <div className="overflow-hidden">
            <p 
              id="cta-description"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-4xl mx-auto text-center leading-relaxed transition-all duration-1500 ease-out delay-300 ${
                isVisible('cta-description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('services.discoverOurLatest')}
            </p>
          </div>
          <div 
            id="cta-buttons"
            data-animate
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1500 ease-out delay-600 ${
              isVisible('cta-buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="/projects" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-2xl hover:shadow-[#e8c74f]/20 transform hover:scale-105"
            >
              {t('services.viewProjects')}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              {t('services.contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}