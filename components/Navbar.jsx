"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from '../hooks/useTranslations';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, isRTL } = useTranslations();
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items dynamically translated
  const navigationItems = [
    { name: t("navigation.home"), href: '/' },
    { name: t("navigation.services"), href: '/services' },
    { name: t("navigation.staff"), href: '/staff' },
    { name: t("navigation.projects"), href: '/projects' },
    { name: t("navigation.about"), href: '/about' },
    { name: t("navigation.contact"), href: '/contact' },
  ];

 






  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${isRTL ? 'right-0' : 'left-0'} ${scrolled ? 'py-2 bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-2xl' : 'py-4 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-0">
          <div className={`flex justify-between items-center h-12 md:h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
           <div className={`flex-shrink-0 relative group ${isRTL ? 'ml-4' : 'mr-4'}`}>
  <Link href="/">
    <Image
      src='/Logo.png'
      alt="Al Fouad Company Logo"
      width={45}
      height={25}
      className="filter brightness-110 cursor-pointer"
    />
  </Link>
</div>
          {/* Desktop navigation */}
<div className="hidden md:flex items-center">
  <div className={`flex items-center space-x-2 bg-black/20 backdrop-blur-lg px-2 py-3 border border-white/10 shadow-lg ${isRTL ? 'space-x-reverse' : ''}`}>
    {navigationItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="relative group px-4 py-2 text-white/90 hover:text-white text-sm font-semibold transition-all duration-300 uppercase tracking-wider hover:bg-white/10"
      >
        {item.name}
        <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300 ${isRTL ? 'right-1/2 w-0 group-hover:right-0' : 'left-1/2 w-0 group-hover:left-0'}`}></span>
      </a>
    ))}
    
    {/* Language Switcher */}
    <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
      <LanguageSwitcher />
    </div>
  </div>
</div>



            {/* Mobile menu button */}
            <div className={`md:hidden flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-4'}`}>
              {/* Language Switcher for mobile */}
              <div className={`${isRTL ? 'mr-2' : 'ml-2'}`}>
                <LanguageSwitcher />
              </div>
              
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative hover:border-yellow-400/50 text-white transition-all duration-300">
                {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-0 h-full w-full z-50 transform transition-all duration-500 ease-out md:hidden ${isRTL ? 'right-0' : 'left-0'} ${mobileMenuOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        <div className={`relative h-full w-full bg-[#242021] backdrop-blur-xl border-white/10 shadow-2xl ${isRTL ? 'ml-auto border-l' : 'mr-auto border-r'}`}>
          <div className={`flex justify-between items-center p-8 border-b border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`group flex items-center text-white/90 hover:text-white text-lg font-medium transition-all duration-300 uppercase tracking-wider p-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 ${isRTL ? 'flex-row-reverse justify-between' : 'justify-between'}`} style={{ animationDelay: `${index * 100}ms`, animation: mobileMenuOpen ? (isRTL ? 'slideInLeft 0.5s ease-out forwards' : 'slideInRight 0.5s ease-out forwards') : 'none' }}>
                  <span className="relative">
                    {item.name}
                    <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300 ${isRTL ? 'right-0' : 'left-0'}`}></span>
                  </span>
                  <ChevronRight size={18} className={`text-yellow-400 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              ))}
            </nav>
          </div>
          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="text-center space-y-2 mt-4">
              <p className="text-white/50 text-sm font-medium">© 2025 Al Fouad Company</p>
              <p className="text-white/30 text-xs">Expert Aluminum & Glass Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)} />}

      <style jsx>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;