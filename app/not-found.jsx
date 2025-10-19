'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from '../hooks/useTranslations'

export default function NotFound() {
  const { t, isRTL } = useTranslations()

  return (
    <div className={`min-h-screen bg-[#000000] text-white relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/pyramids.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/95 via-[#000000]/90 to-[#000000]/95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e8c74f]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e8c74f]/5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8 relative">
            <h1 className="text-[150px] sm:text-[200px] lg:text-[300px] font-black leading-none bg-gradient-to-r from-[#e8c74f] via-[#ffd17a] to-[#e8c74f] bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl sm:text-8xl lg:text-9xl opacity-20">🏜️</div>
            </div>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#e8c74f] via-[#ffd17a] to-[#e8c74f] bg-clip-text text-transparent">
              {t('notFound.title')}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#e8c74f] to-transparent mx-auto"></div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('notFound.description')}
          </p>

          {/* Error Code Box */}
          <div className="mb-12 inline-block bg-[#000000]/80 backdrop-blur-md border-2 border-[#e8c74f]/30 px-8 py-4">
            <p className="text-sm sm:text-base text-gray-400">
              <span className="text-[#e8c74f] font-bold">{t('notFound.errorCode')}</span> 404_NOT_FOUND
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/"
              className="group px-8 py-4 bg-gradient-to-r from-[#e8c74f] to-[#ffd17a] text-black font-bold hover:from-[#ffd17a] hover:to-[#e8c74f] transition-all duration-300 hover:shadow-xl hover:shadow-[#e8c74f]/30 transform hover:scale-105 border-2 border-[#e8c74f] w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl">🏠</span>
                {t('notFound.goHome')}
              </span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group px-8 py-4 border-2 border-[#e8c74f] text-[#e8c74f] hover:bg-[#e8c74f] hover:text-black transition-all duration-300 hover:shadow-xl hover:shadow-[#e8c74f]/30 transform hover:scale-105 font-bold w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl">{isRTL ? '→' : '←'}</span>
                {t('notFound.goBack')}
              </span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t-2 border-[#e8c74f]/20 pt-8">
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              {t('notFound.quickLinks')}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-[#e8c74f] border border-[#e8c74f]/30 hover:border-[#e8c74f] transition-all duration-300 hover:bg-[#e8c74f]/10"
              >
                {t('navigation.about')}
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-[#e8c74f] border border-[#e8c74f]/30 hover:border-[#e8c74f] transition-all duration-300 hover:bg-[#e8c74f]/10"
              >
                {t('navigation.services')}
              </Link>
              <Link 
                href="/projects" 
                className="px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-[#e8c74f] border border-[#e8c74f]/30 hover:border-[#e8c74f] transition-all duration-300 hover:bg-[#e8c74f]/10"
              >
                {t('navigation.projects')}
              </Link>
              <Link 
                href="/staff" 
                className="px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-[#e8c74f] border border-[#e8c74f]/30 hover:border-[#e8c74f] transition-all duration-300 hover:bg-[#e8c74f]/10"
              >
                {t('navigation.staff')}
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-[#e8c74f] border border-[#e8c74f]/30 hover:border-[#e8c74f] transition-all duration-300 hover:bg-[#e8c74f]/10"
              >
                {t('navigation.contact')}
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-[#e8c74f]/5 border border-[#e8c74f]/20 backdrop-blur-sm">
            <p className="text-sm sm:text-base text-gray-400">
              💡 {t('notFound.tip')}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8c74f] to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8c74f] to-transparent opacity-50"></div>
    </div>
  )
}

