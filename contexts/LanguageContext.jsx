'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const [isRTL, setIsRTL] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial language from localStorage or default to 'en'
      const savedLanguage = localStorage.getItem('language') || 'en'
      setCurrentLanguage(savedLanguage)
      
      // Set RTL based on language
      setIsRTL(savedLanguage === 'ar')
      
      // Update document direction and lang attribute
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = savedLanguage
      
      // Initialize i18n
      if (i18n && !i18n.isInitialized) {
        i18n.init()
      }
      
      setIsInitialized(true)
    }
  }, [i18n])

  const changeLanguage = (language) => {
    if (typeof window !== 'undefined') {
      setCurrentLanguage(language)
      if (i18n) {
        i18n.changeLanguage(language)
      }
      setIsRTL(language === 'ar')
      
      // Update document direction and lang attribute
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = language
      
      // Save to localStorage
      localStorage.setItem('language', language)
    }
  }

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en'
    changeLanguage(newLanguage)
  }

  const value = {
    currentLanguage,
    isRTL,
    changeLanguage,
    toggleLanguage,
    isInitialized
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
