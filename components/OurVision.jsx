"use client";

import React, { useState } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

// Define the data structure without the translated strings.
// This is the correct way to structure data that needs to be translated.
const visionDataRaw = [
  {
    id: 'Vision',
    titleKey: 'home.ourVision',
    descriptionKey: 'home.visionDescription',
    icon: TrendingUp,
    bgImage: '/pyramids.png',
    iconColor: 'text-[#ffd17a]'
  },
  {
    id: 'Mission',
    titleKey: 'home.ourMission',
    descriptionKey: 'home.missionDescription',
    icon: Users,
    bgImage: '/pyramids-2.png',
    iconColor: 'text-[#ffd17a]'
  },
  {
    id: 'promise',
    titleKey: 'home.ourPromise',
    descriptionKey: 'home.promiseDescription',
    icon: Target,
    bgImage: '/pyramids-3.png',
    iconColor: 'text-[#ffd17a]'
  }
];

const VisionSection = () => {
  const { t, isRTL } = useTranslations();
  const [activeBg, setActiveBg] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleMouseEnter = (image, id) => {
    setActiveBg(image);
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveBg(null);
    setActiveCardId(null);
  };

  // Map over the raw data and create the final translated data inside the component
  const visionData = visionDataRaw.map(card => ({
    ...card,
    title: t(card.titleKey),
    description: t(card.descriptionKey)
  }));

  return (
    <section className="relative w-full min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Default Background Color */}
      <div className="absolute inset-0 bg-[#000000] z-0" />

      {/* Dynamic Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out z-0
          ${activeBg ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}
        style={{
          backgroundImage: activeBg ? `url(${activeBg})` : 'none'
        }}
      />
      
      {/* Background Overlay with Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-10
        transition-opacity duration-1000 ${activeBg ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full z-15" />
      <div className="absolute bottom-10 right-20 w-20 h-20 border border-white/10 rounded-lg z-15 rotate-12" />
      <div className="absolute top-1/2 right-5 w-16 h-16 border border-white/15 z-15 transform rotate-45" />

      <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl md:font-bold mb-6 bg-[#ffd17a] bg-clip-text text-transparent">
            {t('home.aboutUs')}
          </h2>
          <div className="w-24 h-1 bg-[#ffd17a] mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {visionData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative p-8 lg:p-10 flex flex-col justify-between min-h-[400px]
                  border border-white/20
                  transition-all duration-500 ease-out transform cursor-pointer
                  ${activeCardId === card.id
                    ? 'bg-[#242021]/10 scale-105 border-white/40 shadow-2xl shadow-white/20'
                    : 'bg-[#242021]/5 hover:bg-white/8 hover:scale-102 hover:border-white/30'
                  }`}
                onMouseEnter={() => handleMouseEnter(card.bgImage, card.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Background Blur Effect */}
                <div className={`absolute inset-0 rounded-xl backdrop-blur-md transition-opacity duration-500
                  ${activeCardId === card.id ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-6 transition-all duration-300 ${activeCardId === card.id ? 'scale-110' : ''}`}>
                    <IconComponent
                      size={48}
                      className={`${card.iconColor} transition-all duration-300`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-300
                    ${activeCardId === card.id ? 'text-white' : 'text-gray-100'}`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed transition-all duration-300
                    ${activeCardId === card.id ? 'text-gray-200' : 'text-gray-300'}`}>
                    {card.description}
                  </p>
                </div>

                {/* Card Number */}
                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full border border-white/30
                  flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${activeCardId === card.id ? 'bg-white/20 text-white' : 'text-gray-400'}`}>
                  {index + 1}
                </div>

                {/* Hover Effect Lines */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.iconColor.replace('text-', 'from-')} to-transparent
                  transition-all duration-500 ${activeCardId === card.id ? 'w-full' : 'w-0'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;