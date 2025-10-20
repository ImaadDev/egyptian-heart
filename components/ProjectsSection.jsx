'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../hooks/useTranslations'

export default function ProjectsSection() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const projectCategories = [
    { id: 'all', name: t('projects.allProjects'), count: 50 },
    { id: 'cladding', name: t('projects.claddingSystems'), count: 25 },
    { id: 'facade', name: t('projects.aluminumFacades'), count: 12 },
    { id: 'windows', name: t('projects.windowsSystems'), count: 4 },
    { id: 'doors', name: t('projects.doorsSystems'), count: 3 },
    { id: 'shutters', name: t('projects.shutterSystems'), count: 4 },
    { id: 'handrails', name: t('projects.handrailSystems'), count: 2 }
  ];

  const projects = [
    {
      id: 'cladding-1',
      category: 'cladding',
      title: t('projects.claddingProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.claddingProject1Desc'),
      image: backgroundImages[0],
      features: Array.isArray(t('projects.residentialFeatures')) ? t('projects.residentialFeatures') : []
    },
    {
      id: 'windows-1',
      category: 'windows',
      title: t('projects.windowsProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.windowsProject1Desc'),
      image: backgroundImages[1],
      features: Array.isArray(t('projects.residentialFeatures')) ? t('projects.residentialFeatures') : []
    },
    {
      id: 'handrails-1',
      category: 'handrails',
      title: t('projects.handrailProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.handrailProject1Desc'),
      image: backgroundImages[2],
      features: Array.isArray(t('projects.commercialFeatures')) ? t('projects.commercialFeatures') : []
    },
    {
      id: 'doors-1',
      category: 'doors',
      title: t('projects.doorsProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.doorsProject1Desc'),
      image: backgroundImages[3],
      features: Array.isArray(t('projects.industrialFeatures')) ? t('projects.industrialFeatures') : []
    },
    {
      id: 'facade-1',
      category: 'facade',
      title: t('projects.facadeProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.facadeProject1Desc'),
      image: backgroundImages[0],
      features: Array.isArray(t('projects.commercialFeatures')) ? t('projects.commercialFeatures') : []
    },
    {
      id: 'shutters-1',
      category: 'shutters',
      title: t('projects.shutterProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.shutterProject1Desc'),
      image: backgroundImages[1],
      features: Array.isArray(t('projects.industrialFeatures')) ? t('projects.industrialFeatures') : []
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects.slice(0, 4) // Show only 4 projects on home page
    : projects.filter(project => project.category === selectedCategory).slice(0, 4);

  return (
    <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
        style={{
          backgroundImage: hoveredCard !== null 
            ? `url('${projects.find(p => p.id === hoveredCard)?.image || backgroundImages[0]}')`
            : "url('/pyramids-6.png')",
          opacity: hoveredCard !== null ? 0.7 : 0.5
        }}
      />
      <div className="absolute inset-0 bg-[#000000]/40 z-10" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
        <div className="mb-20">
          <div className="overflow-hidden mb-4">
            <h2 
              id="projects-title"
              data-animate
              className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                isVisible('projects-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ color: '#e8c74f' }}
            >
              {t('home.ourProjects')}
            </h2>
          </div>
          <div 
            id="projects-line"
            data-animate
            className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
              isVisible('projects-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
          <div className="overflow-hidden mt-8">
            <p 
              id="projects-subtitle"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                isVisible('projects-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('home.projectsDescription')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${index}`}
              data-animate
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out cursor-pointer ${
                isVisible(`project-card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-5xl mb-6 font-light transition-transform duration-500 group-hover:scale-110" style={{ color: '#e8c74f' }}>—</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" style={{ color: '#e8c74f' }}>
                {project.title}
              </h3>
              <p className="text-lg text-gray-400 mb-2">{project.location}</p>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="space-y-2">
                {project.features && project.features.length > 0 ? (
                  project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-[#e8c74f] mr-3 text-lg font-light">•</span>
                      <span className="text-gray-400 font-light">{feature}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 font-light">Features loading...</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/projects"
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
