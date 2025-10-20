'use client'

import { useState, useEffect, useCallback } from 'react'

// Global state for language
let globalLanguage = 'en'
let globalTranslations = {}
let globalIsRTL = false
let listeners = new Set()
let isLoading = true

// Function to notify all components of language change
const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

// Load translations from JSON files
async function loadTranslations(language) {
  try {
    const response = await fetch(`/locales/${language}.json`)
    if (!response.ok) throw new Error('Failed to load translations')
    return await response.json()
  } catch (error) {
    console.error(`Error loading ${language} translations:`, error)
    // Fallback to English if loading fails
    if (language !== 'en') {
      return loadTranslations('en')
    }
    return {}
  }
}

// Function to update global state
const updateGlobalState = async (language) => {
  isLoading = true
  notifyListeners()
  
  globalLanguage = language
  globalIsRTL = language === 'ar'
  
  // Load translations
  globalTranslations = await loadTranslations(language)
  
  // Update document
  if (typeof window !== 'undefined') {
    document.documentElement.dir = globalIsRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }
  
  isLoading = false
  
  // Notify all listeners
  notifyListeners()
}

// Initialize on first load
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('language') || 'en'
  updateGlobalState(savedLanguage)
}

export const useTranslations = () => {
  const [, forceUpdate] = useState({})
  const [loading, setLoading] = useState(isLoading)
  
  const forceRerender = useCallback(() => {
    setLoading(isLoading)
    forceUpdate({})
  }, [])

  useEffect(() => {
    // Add this component to listeners
    listeners.add(forceRerender)
    
    // Initialize on first load if not already done
    if (typeof window !== 'undefined' && Object.keys(globalTranslations).length === 0) {
      const savedLanguage = localStorage.getItem('language') || 'en'
      updateGlobalState(savedLanguage)
    }
    
    return () => {
      // Remove this component from listeners
      listeners.delete(forceRerender)
    }
  }, [forceRerender])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = globalTranslations
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // If value is undefined or null, return the key
    if (value === undefined || value === null) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    
    return value
  }, [])

  const changeLanguage = useCallback((language) => {
    updateGlobalState(language)
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLanguage = globalLanguage === 'en' ? 'ar' : 'en'
    updateGlobalState(newLanguage)
  }, [])

  return {
    t,
    currentLanguage: globalLanguage,
    isRTL: globalIsRTL,
    isLoading: loading,
    changeLanguage,
    toggleLanguage
  }
}
