'use client'

import { useEffect } from 'react'

export default function SEOHead({ 
  title, 
  description, 
  keywords = [],
  ogImage = '/Logo.png',
  ogType = 'website',
  canonical,
  noindex = false
}) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Al Fouad Company`
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    } else if (description) {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords && keywords.length > 0) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else if (keywords.length > 0) {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', `https://egyptianheart.com${ogImage}`)
    updateMetaTag('property', 'og:type', ogType)
    if (canonical) {
      updateMetaTag('property', 'og:url', `https://egyptianheart.com${canonical}`)
    }

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', `https://egyptianheart.com${ogImage}`)

    // Update canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (linkCanonical) {
        linkCanonical.setAttribute('href', `https://egyptianheart.com${canonical}`)
      } else {
        linkCanonical = document.createElement('link')
        linkCanonical.rel = 'canonical'
        linkCanonical.href = `https://egyptianheart.com${canonical}`
        document.head.appendChild(linkCanonical)
      }
    }

    // Update robots meta
    if (noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow')
    }

  }, [title, description, keywords, ogImage, ogType, canonical, noindex])

  return null
}

function updateMetaTag(attribute, value, content) {
  if (!content) return

  let meta = document.querySelector(`meta[${attribute}="${value}"]`)
  if (meta) {
    meta.setAttribute('content', content)
  } else {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, value)
    meta.content = content
    document.head.appendChild(meta)
  }
}

