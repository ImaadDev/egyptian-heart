'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../../../hooks/useTranslations'
import SEOHead from '../../../components/SEOHead'
import { BreadcrumbStructuredData } from '../../../components/StructuredData'

export default function Contact() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

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

  const socialLinks = [
    { 
      name: t('contact.facebook'), 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      url: 'https://www.facebook.com/share/1Ar2LTWc4g/' 
    },
    { 
      name: t('contact.twitter'), 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      url: 'https://x.com/abdofouad51991?s=21' 
    },
    { 
      name: t('contact.instagram'), 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.816 3.708 13.665 3.708 12.368s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      ), 
      url: 'https://www.instagram.com/bdhfwd15?igsh=MWI5dHVicTB4dnR1MA%3D%3D&utm_source=qr' 
    },
    { 
      name: t('contact.linkedin'), 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      url: 'https://snapchat.com/t/qZuZSSCP' 
    },
    { 
      name: t('contact.youtube'), 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      url: 'https://youtube.com/channel/UC20GL6cG7KlSv8iqBtKnjig?si=wUm-gCtGvhIXKYKM' 
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <>
      <SEOHead 
        title="Contact Us - Get in Touch for Aluminum & Glass Solutions"
        description="Contact Al Fouad Company for Aluminum and PVC Contracting. Offices in Dammam, Saudi Arabia and Damanhour, Egypt. Free consultation for aluminum, glass, curtain wall, and facade projects. Call +966533805593 or +201007456882"
        keywords={[
          'contact aluminum company',
          'aluminum contractor Saudi Arabia',
          'glass solutions Egypt',
          'free consultation',
          'aluminum quote',
          'Dammam aluminum',
          'Damanhour glass',
          'curtain wall contractor'
        ]}
        canonical="/contact"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
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
                {t('contact.title')}
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
                {t('contact.subtitle')}
                <span className="block mt-2 text-base md:text-xl text-gray-500">
                  {t('contact.formDescription')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[#000000] z-0" />
        
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#e8c74f]/30 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="contact-info-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('contact-info-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('contact.title')}
              </h2>
            </div>
            <div 
              id="contact-info-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('contact-info-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div 
              id="phone-card"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('phone-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>📞</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('contact.phone')}
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-300">+966 552514044</p>
                <p className="text-lg text-gray-300">+966 566722297</p>
              </div>
            </div>
            
            <div 
              id="email-card"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('email-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>✉️</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('contact.email')}
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-300">Egyptian.heart@hotmail.com</p>
              </div>
            </div>
            
            <div 
              id="whatsapp-card"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('whatsapp-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>📱</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('contact.whatsapp')}
              </h3>
              <div className="space-y-2">
                <a href="https://wa.me/201007456882" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300 block">+201007456882</a>
              </div>
            </div>
            
            <div 
              id="address-card"
              data-animate
              className={`bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-700 ease-out ${
                isVisible('address-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="text-5xl mb-6 font-light" style={{ color: '#e8c74f' }}>📍</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ color: '#e8c74f' }}>
                {t('contact.address')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('contact.addressText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{
            backgroundImage: hoveredCard !== null 
              ? `url('${backgroundImages[hoveredCard % backgroundImages.length]}')`
              : "url('/pyramids-2.png')",
            opacity: hoveredCard !== null ? 0.7 : 0.5
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/40 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
          <div className="mb-20">
            <div className="overflow-hidden mb-4">
              <h2 
                id="form-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('form-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('contact.stayInTouch')}
              </h2>
            </div>
            <div 
              id="form-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('form-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form 
              onSubmit={handleSubmit}
              className="bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                    {t('contact.name')}*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#000000]/40 border border-[#e8c74f]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8c74f] focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                    {t('contact.email')}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#000000]/40 border border-[#e8c74f]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8c74f] focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                    {t('contact.subject')}*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#000000]/40 border border-[#e8c74f]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8c74f] focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.subjectPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                    {t('contact.phoneNumber')}*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#000000]/40 border border-[#e8c74f]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8c74f] focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                  {t('contact.message')}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#000000]/40 border border-[#e8c74f]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8c74f] focus:border-transparent transition-all duration-300"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-lg transform hover:scale-105"
              >
                {t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media & Map */}
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
                id="social-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('social-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('footer.stayConnected')}
              </h2>
            </div>
            <div 
              id="social-line"
              data-animate
              className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
                isVisible('social-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              id="social-links"
              data-animate
              className={`transition-all duration-1500 ease-out delay-600 ${
                isVisible('social-links') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ color: '#e8c74f' }}>
                {t('contact.followUs')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.isArray(socialLinks) && socialLinks.length > 0 ? socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-6 hover:border-[#e8c74f] hover:bg-[#000000]/60 transition-all duration-300 text-center group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 text-[#e8c74f]">
                      {social.icon}
                    </div>
                    <p className="text-white font-medium">{social.name}</p>
                  </a>
                )) : null}
              </div>
            </div>
            
            <div 
              id="map-section"
              data-animate
              className={`transition-all duration-1500 ease-out delay-900 ${
                isVisible('map-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ color: '#e8c74f' }}>
                {t('contact.findUs')}
              </h3>
              <div className="bg-[#000000]/80 backdrop-blur-sm border-4 border-[#e8c74f]/30 p-4 hover:border-[#e8c74f]/50 transition-all duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3418.5253078812366!2d30.451179475592383!3d31.039472574437834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAyJzIyLjEiTiAzMMKwMjcnMTMuNSJF!5e0!3m2!1sen!2ssa!4v1760882406754!5m2!1sen!2ssa" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Al Fouad Company */}
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
                id="why-choose-title"
                data-animate
                className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                  isVisible('why-choose-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#e8c74f' }}
              >
                {t('contact.whyChooseUs')}
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
                {t('contact.whyChooseDesc')}
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                id="learn-more"
                data-animate
                className={`transition-all duration-1500 ease-out delay-900 ${
                  isVisible('learn-more') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                  {t('contact.learnMoreAboutUs')}
                </h3>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
                >
                  {t('navigation.about')}
                </a>
              </div>
              
              <div 
                id="free-consultation"
                data-animate
                className={`transition-all duration-1500 ease-out delay-1200 ${
                  isVisible('free-consultation') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                  {t('contact.contactUsForConsultation')}
                </h3>
                <a 
                  href="tel:+966552514044"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-lg transform hover:scale-105"
                >
                  {t('common.contactUs')}
                </a>
              </div>
              
              <div 
                id="explore-projects"
                data-animate
                className={`transition-all duration-1500 ease-out delay-1500 ${
                  isVisible('explore-projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ color: '#e8c74f' }}>
                  {t('contact.exploreProjects')}
                </h3>
                <a 
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black font-bold tracking-wide transition-all duration-300 transform hover:scale-105"
                >
                  {t('contact.viewProjects')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}