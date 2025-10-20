'use client'

import { useEffect } from 'react'

export default function StructuredData({ type = 'organization' }) {
  useEffect(() => {
    // Prevent duplicate script tags
    const existingScript = document.getElementById('structured-data')
    if (existingScript) return
  }, [])

  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Al Fouad Company for Aluminum and PVC Contracting",
      "alternateName": "Al Fouad Company",
      "url": "https://egyptianheart.com",
      "logo": "https://egyptianheart.com/Logo.png",
      "description": "Leading provider of premium aluminum, glass, and PVC solutions in Saudi Arabia and Egypt. Specializing in curtain walls, facades, windows, doors, and architectural systems.",
      "foundingDate": "2010",
      "email": "Egyptian.heart@hotmail.com",
      "telephone": [
        "+966533805593",
        "+201007456882"
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Support Services District, Second Industrial City",
          "addressLocality": "Dammam",
          "addressCountry": "SA",
          "name": "Saudi Arabia Office"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "2FQ3+QGJ",
          "addressLocality": "Damanhour",
          "addressCountry": "EG",
          "name": "Egypt Office"
        }
      ],
      "geo": [
        {
          "@type": "GeoCoordinates",
          "latitude": "26.3958",
          "longitude": "50.0803",
          "name": "Dammam Office"
        },
        {
          "@type": "GeoCoordinates",
          "latitude": "31.0392",
          "longitude": "30.4669",
          "name": "Damanhour Office"
        }
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        {
          "@type": "Country",
          "name": "Egypt"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/share/1Ar2LTWc4g/",
        "https://x.com/abdofouad51991?s=21",
        "https://www.instagram.com/bdhfwd15",
        "https://snapchat.com/t/qZuZSSCP",
        "https://youtube.com/channel/UC20GL6cG7KlSv8iqBtKnjig"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+966533805593",
          "contactType": "Customer Service",
          "areaServed": "SA",
          "availableLanguage": ["English", "Arabic"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+201007456882",
          "contactType": "Customer Service",
          "areaServed": "EG",
          "availableLanguage": ["English", "Arabic"]
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aluminum Windows and Doors",
            "description": "Premium aluminum sliding, hinged, tilt-hinged, and fixed windows and doors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Curtain Wall Systems",
            "description": "Modern glass curtain walls for maximum light and architectural excellence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aluminum Facades",
            "description": "Structural, curtain wall, and frameless facade systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cladding Systems",
            "description": "Fire-resistant cladding panels for commercial and residential projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Glass and Handrail Systems",
            "description": "Suspended glass railings and metal handrail systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shutter Systems",
            "description": "Manual, electric, remote control, and smart home shutter systems"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }

    if (type === 'localBusiness') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "priceRange": "$$-$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ]
      }
    }

    return baseData
  }

  return (
    <script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

// Breadcrumb component for pages
export function BreadcrumbStructuredData({ items }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://egyptianheart.com${item.path}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData)
      }}
    />
  )
}

// Service Page Structured Data
export function ServiceStructuredData({ serviceName, description, price }) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "Al Fouad Company for Aluminum and PVC Contracting"
    },
    "areaServed": {
      "@type": "Country",
      "name": ["Saudi Arabia", "Egypt"]
    },
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price || "Contact for quote",
      "priceCurrency": "SAR"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData)
      }}
    />
  )
}

