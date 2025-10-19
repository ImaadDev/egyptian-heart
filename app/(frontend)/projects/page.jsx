'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../../../hooks/useTranslations'

export default function Projects() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      features: t('projects.claddingProject1Features')
    },
    {
      id: 'windows-1',
      category: 'windows',
      title: t('projects.windowsProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.windowsProject1Desc'),
      image: backgroundImages[1],
      features: t('projects.windowsProject1Features')
    },
    {
      id: 'handrails-1',
      category: 'handrails',
      title: t('projects.handrailProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.handrailProject1Desc'),
      image: backgroundImages[2],
      features: t('projects.handrailProject1Features')
    },
    {
      id: 'doors-1',
      category: 'doors',
      title: t('projects.doorsProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.doorsProject1Desc'),
      image: backgroundImages[3],
      features: t('projects.doorsProject1Features')
    },
    {
      id: 'facade-1',
      category: 'facade',
      title: t('projects.facadeProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.facadeProject1Desc'),
      image: backgroundImages[0],
      features: t('projects.facadeProject1Features')
    },
    {
      id: 'shutters-1',
      category: 'shutters',
      title: t('projects.shutterProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.shutterProject1Desc'),
      image: backgroundImages[1],
      features: t('projects.shutterProject1Features')
    },
    {
      id: 'shower-1',
      category: 'shower',
      title: t('projects.showerProject1'),
      location: t('projects.saudiArabia'),
      description: t('projects.showerProject1Desc'),
      image: backgroundImages[2],
      features: t('projects.showerProject1Features')
    }
  ];

  const whyChooseUs = [
    {
      title: t('projects.provenExperience'),
      description: t('projects.provenExperienceDesc')
    },
    {
      title: t('projects.qualityCraftsmanship'),
      description: t('projects.qualityCraftsmanshipDesc')
    },
    {
      title: t('projects.advancedTechnology'),
      description: t('projects.advancedTechnologyDesc')
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: t('projects.claddingProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/1.jpg'
    },
    {
      id: 2,
      title: t('projects.windowsProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/2.jpg'
    },
    {
      id: 3,
      title: t('projects.handrailProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/3.jpg'
    },
    {
      id: 4,
      title: t('projects.doorsProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/4.jpg'
    },
    {
      id: 5,
      title: t('projects.facadeProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/5.jpg'
    },
    {
      id: 6,
      title: t('projects.shutterProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/6.jpg'
    },
    {
      id: 7,
      title: t('projects.showerProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/7.jpg'
    },
    {
      id: 8,
      title: t('projects.claddingProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/8.jpg'
    },
    {
      id: 9,
      title: t('projects.windowsProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/9.jpg'
    },
    {
      id: 10,
      title: t('projects.handrailProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/10.jpg'
    },
    {
      id: 11,
      title: t('projects.doorsProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/11.jpg'
    },
    {
      id: 12,
      title: t('projects.facadeProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/12.jpg'
    },
    {
      id: 13,
      title: t('projects.shutterProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/13.jpg'
    },
    {
      id: 14,
      title: t('projects.showerProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/14.jpg'
    },
    {
      id: 15,
      title: t('projects.claddingProject1'),
      location: t('projects.saudiArabia'),
      image: '/images/15.jpg'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryItems[index]);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeImageViewer();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPreviousImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
                {t('projects.title')}
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
                {t('projects.subtitle')}
                <span className="block mt-2 text-base md:text-xl text-gray-500">
                  {t('projects.description')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
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
                {t('projects.ourPortfolio')}
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
                {t('projects.portfolioDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null 
              ? `url('${projects.find(p => p.id === hoveredCard)?.image || backgroundImages[0]}')`
              : "url('/pyramids-2.png')",
            opacity: hoveredCard !== null ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/40 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="categories-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('categories-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('projects.projectCategories')}
            </h2>
            </div>
            <div 
              id="categories-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('categories-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#e8c74f] text-black'
                    : 'bg-[#000000]/60 text-white hover:bg-[#e8c74f]/20'
                }`}
              >
                <div className="text-sm font-bold mb-1">{category.name}</div>
                <div className="text-xs opacity-75">{category.count} {t('projects.projects')}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-[#e8c74f] mr-3 text-lg font-light">•</span>
                      <span className="text-gray-400 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Projects Matter */}
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
                id="why-matter-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('why-matter-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('projects.whyTheseProjects')}
            </h2>
            </div>
            <div 
              id="why-matter-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('why-matter-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
            <div className="overflow-hidden mt-8">
              <p 
                id="why-matter-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('why-matter-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('projects.matter')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              id="matter-card-1"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('matter-card-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>—</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('projects.leadershipInCurtainWall')}
              </h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                {t('projects.leadershipDescription')}
              </p>
            </div>
            
            <div 
              id="matter-card-2"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('matter-card-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>—</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('projects.advancedIntegration')}
              </h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                {t('projects.integrationDescription')}
              </p>
            </div>
            
            <div 
              id="matter-card-3"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('matter-card-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>—</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('projects.precisionDesign')}
              </h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                {t('projects.precisionDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Alumetal */}
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
                id="why-choose-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('why-choose-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('projects.whyChooseAlumetal')}
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
            <div className="overflow-hidden mt-8">
              <p 
                id="why-choose-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                  isVisible('why-choose-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('projects.forYourProject')}
              </p>
            </div>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>—</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
              {t('projects.getInTouch')}
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
              {t('projects.readyToBring')}
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
              href="tel:+966552514044" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-2xl hover:shadow-[#e8c74f]/20 transform hover:scale-105"
            >
              {t('projects.callUsNow')}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a 
              href="mailto:Egyptian.heart@hotmail.com" 
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              {t('projects.emailUs')}
            </a>
                </div>
                
          <div 
            id="cta-footer"
            data-animate
            className={`mt-20 text-center transition-all duration-1500 ease-out delay-900 ${
              isVisible('cta-footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                  {t('projects.phone')}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 font-light">
                  +966-55-251-4044<br />
                  +966-56-672-2297
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                  {t('projects.email')}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 font-light">
                  Egyptian.heart@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative w-full py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{ backgroundImage: "url('/pyramids-9.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/80 via-[#000000]/60 to-[#000000]/80 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-8xl font-bold mb-6 bg-[#e8c74f] bg-clip-text text-transparent"
            >
              {t('projects.gallery')}
            </h2>
            <div className="w-24 h-1 bg-[#e8c74f] mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto">
              {t('projects.galleryDescription')}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => openImageViewer(index)}
                className="group relative overflow-hidden bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 hover:border-[#e8c74f] transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Actions */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-[#e8c74f] text-black font-bold hover:bg-[#ffd17a] transition-all duration-300 transform hover:scale-105">
                {t('projects.viewGallery')}
              </button>
              <button className="px-8 py-4 border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold transition-all duration-300 transform hover:scale-105">
                {t('projects.allProjects')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeImageViewer}
        >
          {/* Close Button */}
          <button
            onClick={closeImageViewer}
            className="absolute top-4 right-4 z-50 p-3 bg-[#e8c74f] text-black hover:bg-[#ffd17a] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-[#e8c74f]/90 text-black hover:bg-[#ffd17a] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-[#e8c74f]/90 text-black hover:bg-[#ffd17a] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-[#e8c74f] via-[#ffd17a] to-[#e8c74f] bg-clip-text text-transparent">
                {selectedImage.title}
              </h3>
              <p className="text-lg text-gray-300 mb-2">{selectedImage.location}</p>
              <p className="text-sm text-gray-400">
                {currentImageIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[#e8c74f]/20 border border-[#e8c74f]/30 text-[#e8c74f]">ESC</kbd>
              {t('notFound.goBack') || 'Close'}
            </span>
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[#e8c74f]/20 border border-[#e8c74f]/30 text-[#e8c74f]">←</kbd>
              <kbd className="px-2 py-1 bg-[#e8c74f]/20 border border-[#e8c74f]/30 text-[#e8c74f]">→</kbd>
              Navigate
            </span>
          </div>
        </div>
      )}
    </div>
  )
}