'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from '../hooks/useTranslations'

export default function Footer() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());

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

  const navigationLinks = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.projects'), href: '/projects' },
    { name: t('navigation.staff'), href: '/staff' },
    { name: t('navigation.contact'), href: '/contact' }
  ];

  const services = [
    t('services.windowsSystems'),
    t('services.doorsSystems'), 
    t('services.frontsFacades'),
    t('services.shutterSystems'),
    t('services.claddingSystems'),
    t('services.showerSystems'),
    t('services.handrailSystems')
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1Ar2LTWc4g/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/abdofouad51991?s=21',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/bdhfwd15?igsh=MWI5dHVicTB4dnR1MA%3D%3D&utm_source=qr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
    { 
      name: 'Snapchat', 
      url: 'https://snapchat.com/t/qZuZSSCP',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-1.228-.015-2.669-.015-2.669.165.06.553.405.689.599l.201.293c.151.22.24.399.34.639.284.714.529 1.479.868 2.169.603 1.228 1.478 1.946 2.604 2.124.09.014.184.021.287.021.68 0 1.569-.227 1.569-.227a.465.465 0 01.408.842s-.669.488-1.613.76c-.199.055-.436.103-.654.149-.134.028-.27.054-.396.081.082.112.22.302.33.458.157.218.338.468.441.687.113.244.226.557.196.872-.027.296-.191.537-.455.682a2.639 2.639 0 01-.721.286 4.634 4.634 0 01-.891.12h-.014c-.76.011-1.754-.087-2.717.129-.363.082-.673.247-.962.418l-.206.12c-.446.257-.926.533-1.532.533a.928.928 0 01-.257-.032c-.607-.16-1.111-.427-1.556-.682l-.188-.11a2.996 2.996 0 00-.967-.419c-.964-.215-1.958-.118-2.717-.129h-.012a4.64 4.64 0 01-.894-.12 2.648 2.648 0 01-.72-.287c-.265-.145-.429-.386-.456-.682-.03-.314.083-.627.196-.872.104-.219.284-.469.441-.687.11-.156.249-.346.33-.458a9.844 9.844 0 01-.396-.081 4.326 4.326 0 01-.654-.149c-.944-.272-1.613-.76-1.613-.76a.465.465 0 01.408-.842s.889.227 1.569.227a.98.98 0 00.287-.021c1.126-.178 2.001-.896 2.604-2.124.339-.69.584-1.455.868-2.169.1-.24.189-.419.34-.639l.201-.293c.136-.194.524-.539.689-.599 0 0-.315 1.441-.015 2.669.198 0 .326-.045.401-.09a33.03 33.03 0 01-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821zm.02 1.209C10.85 1.987 10.712 4.2 10.712 6c0 .617 0 .949.793.949 0 0-.006-2.688 1.286-4.146a.447.447 0 01.671-.033c.058.06.087.14.087.223-.006.095-.036.185-.087.263-1.292 1.458-1.286 4.146-1.286 4.146.793 0 .793-.332.793-.949 0-1.8-.138-4.013-1.514-5.015a.48.48 0 01-.233-.437c0-.267.217-.483.484-.483z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/channel/UC20GL6cG7KlSv8iqBtKnjig?si=wUm-gCtGvhIXKYKM',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative w-full bg-[#000000] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e8c74f]/5 to-transparent z-0" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#e8c74f 1px, transparent 1px), linear-gradient(90deg, #e8c74f 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8c74f]/30 to-transparent z-10" />
      
      <div className="relative z-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Company Info */}
            <div 
              id="footer-company"
              data-animate
              className={`transition-all duration-1500 ease-out ${
                isVisible('footer-company') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
               <div className="mb-10">
                 <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-[#e8c74f] via-[#ffd17a] to-[#e8c74f] bg-clip-text text-transparent">
                   {t('hero.title')}
                 </h3>
                 <div className="w-24 h-1 bg-gradient-to-r from-[#e8c74f] to-transparent mb-6" />
                 <p className="text-lg text-gray-400 font-light leading-relaxed">
                   {t('hero.description')}
                 </p>
               </div>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                   <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                     <p className="text-sm text-gray-500 mb-2">{t('contact.phone')}</p>
                     <a href="tel:+966533805593" className="text-white font-semibold hover:text-[#e8c74f] transition-colors duration-300 block">+966 533805593</a>
                     <a href="tel:+201007456882" className="text-white font-semibold hover:text-[#e8c74f] transition-colors duration-300 block">+201007456882</a>
                   </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                   <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                     <p className="text-sm text-gray-500 mb-2">{t('contact.email')}</p>
                     <a href="mailto:Egyptian.heart@hotmail.com" className="text-white hover:text-[#e8c74f] transition-colors duration-300 block">Egyptian.heart@hotmail.com</a>
                   </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#e8c74f]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                   <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                     <p className="text-sm text-gray-500 mb-2">{t('contact.whatsapp')}</p>
                     <a href="https://wa.me/201007456882" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e8c74f] transition-colors duration-300 block">+201007456882</a>
                   </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center group-hover:bg-[#e8c74f]/20 group-hover:border-[#e8c74f] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#e8c74f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                   <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                     <p className="text-sm text-gray-500 mb-2">{t('contact.address')}</p>
                     <p className="text-white text-sm leading-relaxed">
                      2FQ3+QGJ Damanhour, Egypt
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* Quick Links & Services Combined */}
            <div 
              id="footer-links"
              data-animate
              className={`transition-all duration-1500 ease-out ${
                isVisible('footer-links') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-[#e8c74f] to-[#ffd17a] bg-clip-text text-transparent">
                  {t('footer.quickLinks')}
                </h4>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#e8c74f] to-transparent mb-6" />
                <div className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-[#e8c74f] transition-all duration-300 text-base font-light"
                    >
                      <svg className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-[#e8c74f] to-[#ffd17a] bg-clip-text text-transparent">
                  {t('footer.ourServices')}
                </h4>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#e8c74f] to-transparent mb-6" />
                <div className="space-y-3">
                  {services.slice(0, 4).map((service, index) => (
                    <div 
                      key={service}
                      className="flex items-center group cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-[#e8c74f] mr-3 group-hover:w-3 transition-all duration-300" />
                      <p className="text-gray-400 group-hover:text-white text-base font-light transition-colors duration-300">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media & CTA */}
            <div 
              id="footer-social"
              data-animate
              className={`transition-all duration-1500 ease-out ${
                isVisible('footer-social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h4 className="text-2xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-[#e8c74f] to-[#ffd17a] bg-clip-text text-transparent">
                {t('footer.followUs')}
              </h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#e8c74f] to-transparent mb-8" />
              
              <div className="grid grid-cols-3 gap-4 mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full aspect-square bg-[#e8c74f]/10 border-2 border-[#e8c74f]/30 flex items-center justify-center hover:bg-[#e8c74f] hover:border-[#e8c74f] transition-all duration-300"
                    title={social.name}
                  >
                    <div className="text-[#e8c74f] group-hover:text-black transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e8c74f]/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div 
                id="footer-copyright"
                data-animate
                className={`transition-all duration-1500 ease-out ${
                  isVisible('footer-copyright') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                 <p className="text-gray-500 text-sm font-light">
                   {t('footer.copyright')}
                 </p>
              </div>
              
              <div 
                id="footer-legal"
                data-animate
                className={`flex space-x-6 transition-all duration-1500 ease-out ${
                  isVisible('footer-legal') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <a href="#" className="text-gray-500 hover:text-[#e8c74f] transition-colors duration-300 text-sm font-light">
                  Privacy Policy
                </a>
                <span className="text-gray-700">|</span>
                <a href="#" className="text-gray-500 hover:text-[#e8c74f] transition-colors duration-300 text-sm font-light">
                  Terms of Service
                </a>
                <span className="text-gray-700">|</span>
                <a href="#" className="text-gray-500 hover:text-[#e8c74f] transition-colors duration-300 text-sm font-light">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#e8c74f] to-transparent" />
      </div>
    </footer>
  )
}