"use client"

import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import Image from 'next/image';

const Hero = () => {
  const { t, isRTL } = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const slides = [
    {
      image: '/pyramids.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    },
    {
      image: '/pyramids-2.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    },
    {
      image: '/pyramids-3.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    },
    {
      image: '/pyramids-4.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    },
    {
      image: '/pyramids-5.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    },
    {
      image: '/pyramids-6.png',
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description")
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (difference > swipeThreshold) {
      nextSlide();
    } else if (difference < -swipeThreshold) {
      prevSlide();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     

      {/* Hero Section */}
      <header
        className="relative w-full h-[70vh] md:h-screen overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Images */}
        <div className="absolute top-0 left-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-20" />

        {/* Content */}
        <div className="relative z-30 mt-14 md:mt-10 flex flex-col items-center justify-center h-full text-white">
          <div className={`text-center space-y-8 max-w-5xl mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`space-y-6 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h1 className={`text-3xl md:text-8xl font-bold tracking-tight uppercase leading-none ${isRTL ? 'text-right' : 'text-left'}`}>
                  {slide.title}
                  <span 
                    className="block text-xl md:text-4xl font-light mt-6 tracking-wider"
                    style={{ color: '#e8c74f' }}
                  >
                    {slide.subtitle}
                  </span>
                </h1>
                <p className={`text-base md:text-xl text-gray-200 font-light tracking-wide ${isRTL ? 'text-right' : 'text-left'}`}>
                  {slide.description}
                </p>
                <div className="pt-6">
                  <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <button className="px-8 py-3 bg-[#e8c74f] text-black font-bold hover:bg-[#ffd17a] transition-all duration-300">
                      {t("hero.getStarted")}
                    </button>
                    <button className="px-8 py-3 border border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black transition-all duration-300">
                      {t("hero.learnMore")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-2 h-2 transition-all duration-300 ${
                index === currentSlide ? 'w-8 h-2' : 'hover:opacity-75'
              }`}
              style={{ 
                backgroundColor: index === currentSlide ? '#e8c74f' : 'rgba(255, 255, 255, 0.5)' 
              }}
            />
          ))}
        </div>

      </header>
    </>
  );
};

export default Hero;