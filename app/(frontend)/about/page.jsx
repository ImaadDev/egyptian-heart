'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../../../hooks/useTranslations'

export default function About() {
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
                {t('about.title')}
                <span 
                  className={`block text-3xl md:text-5xl font-extralight mt-8 tracking-[0.3em] transition-all duration-1500 ease-out delay-300 ${
                    isVisible('hero-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ color: '#e8c74f' }}
                >
                  {t('hero.title')}
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
                {t('about.subtitle')}
                <span className="block mt-2 text-base md:text-xl text-gray-500">
                  {t('about.description')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[#000000] z-0" />
        
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#e8c74f]/30 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="who-we-are-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('who-we-are-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('about.whoWeAreTitle')}
              </h2>
            </div>
            <div 
              id="who-we-are-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('who-we-are-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="overflow-hidden">
              <p 
                id="who-we-are-p1"
                data-animate
                className={`text-2xl md:text-3xl text-gray-300 leading-relaxed font-light transition-all duration-1500 ease-out delay-600 ${
                  isVisible('who-we-are-p1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('about.whoWeAreDesc1')}
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p 
                id="who-we-are-p2"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 leading-relaxed font-light transition-all duration-1500 ease-out delay-900 ${
                  isVisible('who-we-are-p2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('about.whoWeAreDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[#000000] z-0" />
        
        <div className="absolute right-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#e8c74f]/20 to-transparent z-10" />
        
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
                {t('about.ourServices')}
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div 
              id="services-left"
              data-animate
              className={`space-y-8 transition-all duration-1500 ease-out delay-600 ${
                isVisible('services-left') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ color: '#e8c74f' }}>
                {t('about.weManufacture')}
              </h3>
              <div className="space-y-6">
                {t('about.servicesList').map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start group transition-all duration-700 ease-out ${
                      isVisible('services-left') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
                  >
                    <span className="text-[#e8c74f] mr-4 text-2xl font-light">—</span>
                    <span className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              id="services-right"
              data-animate
              className={`space-y-8 transition-all duration-1500 ease-out delay-900 ${
                isVisible('services-right') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ color: '#e8c74f' }}>
                {t('about.ourCapabilities')}
              </h3>
              <div className="space-y-6">
                {t('about.capabilitiesList').map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start group transition-all duration-700 ease-out ${
                      isVisible('services-right') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
                    <span className="text-[#e8c74f] mr-4 text-2xl font-light">—</span>
                    <span className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="overflow-hidden">
              <p 
                id="services-footer"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-5xl transition-all duration-1500 ease-out delay-1500 ${
                  isVisible('services-footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {t('about.servicesFooter')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids-2.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 via-[#000000]/50 to-[#000000]/70 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="ceo-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('ceo-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('about.ceoMessage')}
              </h2>
            </div>
            <div 
              id="ceo-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('ceo-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <blockquote 
                id="ceo-quote"
                data-animate
                className={`text-xl md:text-3xl text-gray-300 leading-relaxed font-light transition-all duration-1500 ease-out delay-600 ${
                  isVisible('ceo-quote') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-[#e8c74f] text-6xl md:text-8xl font-serif leading-none">"</span>
                <span className="block mt-4">
                  {t('about.ceoQuote')}
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Alumetal */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null && hoveredCard.startsWith('why-choose') 
              ? `url('${backgroundImages[hoveredCard.split('-').pop() % backgroundImages.length]}')`
              : "url('/pyramids-3.png')",
            opacity: hoveredCard !== null && hoveredCard.startsWith('why-choose') ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/40 z-10" />
        
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
                {t('about.whyChooseUs')}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('about.whyChooseCards').map((item, index) => (
              <div
                key={index}
                id={`why-choose-card-${index}`}
                data-animate
                onMouseEnter={() => setHoveredCard(`why-choose-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                  isVisible(`why-choose-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-6 font-light transition-transform duration-500 group-hover:scale-110" style={{ color: '#e8c74f' }}>—</div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null && (hoveredCard.includes('vision') || hoveredCard.includes('glass') || hoveredCard.includes('future'))
              ? `url('${backgroundImages[(hoveredCard.includes('vision') ? 1 : hoveredCard.includes('glass') ? 2 : 3)]}')` 
              : "url('/pyramids-4.png')",
            opacity: hoveredCard !== null && (hoveredCard.includes('vision') || hoveredCard.includes('glass') || hoveredCard.includes('future')) ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/50 via-[#000000]/40 to-[#000000]/30 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="external-resources-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('external-resources-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('about.resources')}
              </h2>
            </div>
            <div 
              id="external-resources-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('external-resources-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
            <div className="overflow-hidden mt-8">
              <p 
                id="external-resources-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('external-resources-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('about.resourcesSubtitle')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              id="vision-2030-card"
              data-animate
              onMouseEnter={() => setHoveredCard('vision-2030')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-10 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                isVisible('vision-2030-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight" style={{ color: '#e8c74f' }}>
                {t('about.vision2030')}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
                {t('about.vision2030Desc1')}
              </p>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                {t('about.vision2030Desc2')}
              </p>
            </div>
            
            <div 
              id="glass-innovations-card"
              data-animate
              onMouseEnter={() => setHoveredCard('glass-innovations')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-10 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                isVisible('glass-innovations-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight" style={{ color: '#e8c74f' }}>
                {t('about.glassInnovations')}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
                {t('about.glassInnovationsDesc1')}
              </p>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                {t('about.glassInnovationsDesc2')}
              </p>
            </div>
          </div>
                  
          <div className="mt-16">
            <div 
              id="future-vision-card"
              data-animate
              onMouseEnter={() => setHoveredCard('future-vision')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-10 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out max-w-5xl mx-auto cursor-pointer ${
                isVisible('future-vision-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight" style={{ color: '#e8c74f' }}>
                {t('about.futureVision')}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                {t('about.futureVisionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/pyramids-5.png')"
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
              {t('about.ctaTitle')}
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
              {t('about.ctaDescription')}
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
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-2xl hover:shadow-[#e8c74f]/20 transform hover:scale-105"
            >
              {t('about.contactUsNow')}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              {t('about.ourServices')}
            </a>
          </div>
          
          <div 
            id="cta-footer"
            data-animate
            className={`mt-20 text-center transition-all duration-1500 ease-out delay-900 ${
              isVisible('cta-footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{ color: '#e8c74f' }}>
              {t('about.trustedByArchitects')}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              {t('about.trustedByArchitectsDesc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}