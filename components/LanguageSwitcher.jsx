'use client'

import React, { useState } from 'react'
import { useTranslations } from '../hooks/useTranslations'
import { Globe, ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, isRTL } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-black/20 backdrop-blur-lg border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLang?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 ${
                currentLanguage === language.code ? 'bg-[#e8c74f]/20 text-[#e8c74f]' : 'text-white'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-xs font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
