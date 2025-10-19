'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from '../hooks/useTranslations'

export default function ReviewCarousel() {
  const { t, isRTL } = useTranslations()
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const reviews = [
    {
      id: 1,
      name: t('home.review1Name'),
      position: t('home.review1Position'),
      company: t('home.review1Company'),
      rating: 5,
      review: t('home.review1Text'),
      project: t('home.review1Project')
    },
    {
      id: 2,
      name: t('home.review2Name'),
      position: t('home.review2Position'),
      company: t('home.review2Company'),
      rating: 5,
      review: t('home.review2Text'),
      project: t('home.review2Project')
    },
    {
      id: 3,
      name: t('home.review3Name'),
      position: t('home.review3Position'),
      company: t('home.review3Company'),
      rating: 5,
      review: t('home.review3Text'),
      project: t('home.review3Project')
    },
    {
      id: 4,
      name: t('home.review4Name'),
      position: t('home.review4Position'),
      company: t('home.review4Company'),
      rating: 5,
      review: t('home.review4Text'),
      project: t('home.review4Project')
    },
    {
      id: 5,
      name: t('home.review5Name'),
      position: t('home.review5Position'),
      company: t('home.review5Company'),
      rating: 5,
      review: t('home.review5Text'),
      project: t('home.review5Project')
    },
    {
      id: 6,
      name: t('home.review6Name'),
      position: t('home.review6Position'),
      company: t('home.review6Company'),
      rating: 5,
      review: t('home.review6Text'),
      project: t('home.review6Project')
    }
  ];

  const nextReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative w-full min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#000000]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-700"
        style={{
          backgroundImage: "url('/pyramids-8.png')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 via-[#000000]/50 to-[#000000]/70 z-10" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
        <div className="mb-20">
          <div className="overflow-hidden mb-4">
            <h2 
              id="reviews-title"
              data-animate
              className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-1500 ease-out ${
                isVisible('reviews-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ color: '#e8c74f' }}
            >
              {t('home.clientReviews')}
            </h2>
          </div>
          <div 
            id="reviews-line"
            data-animate
            className={`w-32 h-px bg-[#e8c74f] transition-all duration-1500 ease-out delay-300 ${
              isVisible('reviews-line') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
          <div className="overflow-hidden mt-8">
            <p 
              id="reviews-subtitle"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 font-light max-w-5xl transition-all duration-1500 ease-out delay-600 ${
                isVisible('reviews-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('home.reviewsDescription')}
            </p>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-[#000000]/80 backdrop-blur-sm border border-[#e8c74f]/20 p-12 relative overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`transition-all duration-1000 ease-out ${
                  index === currentReview
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute top-0 left-0 w-full'
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {renderStars(review.rating)}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{review.review}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white mb-2">{review.name}</h4>
                    <p className="text-lg text-gray-400">{review.position}</p>
                    <p className="text-lg text-gray-400">{review.company}</p>
                    <p className="text-lg" style={{ color: '#e8c74f' }}>{review.project}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#e8c74f] text-black rounded-full flex items-center justify-center hover:bg-[#ffd17a] transition-all duration-300 disabled:opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextReview}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#e8c74f] text-black rounded-full flex items-center justify-center hover:bg-[#ffd17a] transition-all duration-300 disabled:opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'w-8' : 'hover:opacity-75'
                }`}
                style={{ 
                  backgroundColor: index === currentReview ? '#e8c74f' : 'rgba(255, 255, 255, 0.3)' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
