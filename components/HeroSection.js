// components/HeroSection.js
"use client"
import React, { useRef, useEffect, useState } from 'react';
// Importez le CSS ou utilisez les classes Tailwind

const HeroSection = () => {
  // 1. Logique pour l'effet Parallaxe
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Rendu JSX (avec les classes définies dans tailwind.config.js)
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden pt-28 md:pt-90">
      
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Assurez-vous que ce chemin mène bien à votre fichier vidéo (ex: .mp4) */}
        <source src="/images/video.mp4" type="video/mp4" />
        {/* Fallback si la vidéo ne charge pas */}
        Your browser does not support the video tag.
      </video>

      {/* <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100" 
        style={{ 
          backgroundImage: "url('/images/hero-image.jpg')",
          transform: `translateY(${offsetY * 0.5}px)`, 
        }}
      >
        <div className="absolute inset-0 bg-bleu-fonce opacity-70"></div>
      </div> */}

      {/* Contenu - centré au-dessus de l'overlay */}
      <div className="relative z-10 text-center px-4">
        {/* H1 : police titre, très grande */}
        <h1 className="font-titre text-5xl md:text-7xl font-bold mb-1 mt-100 animate-fade-in-up text-wiht-800">
          The Right Choice For Windows And Doors
        </h1>
        
        {/* H2 : police corps, avec accent rouge */}
        <h2 className="text-xl md:text-2xl mb-8 font-extrabold animate-fade-in-up delay-200 text-red-800">
          We'll change your <span className="text-rouge-action justify-center font-extrabold text-4xl">OUTLOOK</span>
        </h2>
        
        {/* Bouton CTA : utilisez la couleur rouge-action définie */}
        <a 
          href="/contact" 
          className="inline-block px-10 py-4 bg-rouge-action font-bold rounded-lg shadow-2xl hover:bg-red-700 transition duration-300 animate-fade-in-up delay-400"
        >
          ASK FOR A FREE QUOTE
        </a>
      </div>
    </section>
  );
};

export default HeroSection;