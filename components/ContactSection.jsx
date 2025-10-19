'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../hooks/useTranslations'

export default function ContactSection() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
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
    <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
        style={{
          backgroundImage: "url('/pyramids-7.png')"
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
              {t('home.getInTouch')}
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
              {t('home.contactDescription')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            id="contact-info"
            data-animate
            className={`transition-all duration-1500 ease-out delay-900 ${
              isVisible('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ color: '#e8c74f' }}>
              {t('contact.title')}
            </h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center mr-4 group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('contact.phone')}</h4>
                  <p className="text-lg text-gray-300">+966 552514044</p>
                  <p className="text-lg text-gray-300">+966 566722297</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center mr-4 group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('contact.email')}</h4>
                  <a href="mailto:Egyptian.heart@hotmail.com" className="text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300">
                    Egyptian.heart@hotmail.com
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center mr-4 group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#e8c74f]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('contact.whatsapp')}</h4>
                  <a href="https://wa.me/201007456882" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#e8c74f] transition-colors duration-300">
                    +201007456882
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center mr-4 group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('contact.address')}</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                  2FQ3+QGJ Damanhour, Egypt
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#e8c74f] text-black font-bold tracking-wide transition-all duration-300 hover:bg-[#ffd17a] hover:shadow-lg transform hover:scale-105"
              >
                {t('common.contactUs')}
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div 
            id="contact-form"
            data-animate
            className={`transition-all duration-1500 ease-out delay-1200 ${
              isVisible('contact-form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ color: '#e8c74f' }}>
              {t('contact.stayInTouch')}
            </h3>
            
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
                  rows="4"
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
      </div>
    </section>
  )
}
