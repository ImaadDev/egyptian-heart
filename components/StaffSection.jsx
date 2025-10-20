'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../hooks/useTranslations'

export default function StaffSection() {
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
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
        style={{
          backgroundImage: hoveredCard !== null 
            ? `url('${departments.find(d => d.id === hoveredCard)?.bgImage || backgroundImages[0]}')`
            : "url('/pyramids-5.png')",
          opacity: hoveredCard !== null ? 0.7 : 0.5
        }}
      />
      <div className="absolute inset-0 bg-[#000000]/40 z-10" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
        <div className="mb-20">
          <div className="overflow-hidden mb-4">
            <h2 
              id="staff-title"
              data-animate
              className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                isVisible('staff-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ color: '#e8c74f' }}
            >
              {t('home.ourTeam')}
            </h2>
          </div>
          <div 
            id="staff-line"
            data-animate
            className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
              isVisible('staff-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
          <div className="overflow-hidden mt-8">
            <p 
              id="staff-subtitle"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                isVisible('staff-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('home.teamDescription')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((department, index) => (
            <div
              key={department.id}
              id={`staff-card-${index}`}
              data-animate
              onMouseEnter={() => setHoveredCard(department.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                isVisible(`staff-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
        
        <div className="mt-16 text-center">
          <a 
            href="/staff"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-2xl hover:shadow-[#e8c74f]/20 transform hover:scale-105"
          >
            {t('common.viewAll')}
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
