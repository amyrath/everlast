// components/PillarsSection.js
"use client"
import React from 'react';
import * as LucideIcons from 'lucide-react';

const pillarsData = [
    { 
        title: "Beauty", 
        icon: "Feather",
        // J'ai mis le titre dans la description pour que le contenu se centre mieux.
        description: "Elegant design that enhances interior and exterior aesthetics." 
    }, 
    // ... (Le reste des données reste inchangé en termes de structure)
    { 
        title: "Practicality", 
        icon: "Wrench", 
        description: "Ease of use and maintenance, engineered for practical, everyday functionality." 
    },
    { 
        title: "Durability", 
        icon: "ShieldCheck", 
        description: "Robust, steel-reinforced materials ensuring maximum longevity and structural integrity." 
    },
    { 
        title: "Safety", 
        icon: "Lock", 
        description: "Multi-point locking mechanisms for total peace of mind and maximum security." 
    },
];

const PillarsSection = () => {
    return (
        <section id="pillars" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Titre de la section */}
                {/* TAILLE AUGMENTÉE et centrée */}
                <h2 className="text-4xl md:text-5xl font-titre font-extrabold text-blue-900 text-center mb-16">
                    What do you look for when choosing a window or door?
                </h2>

                {/* Grille des 4 Cartes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {pillarsData.map((pillar, index) => {
                        const PillarIcon = LucideIcons[pillar.icon];
                        
                        return (
                            <div 
                                key={index} 
                                // Ajout de 'text-center' ici
                                className={`
                                    bg-white p-8 rounded-xl shadow-lg border-l-4 border-transparent text-center
                                    transition-all duration-300 ease-in-out cursor-pointer
                                    transform hover:scale-[1.05] hover:shadow-xl hover:border-red-700
                                `}
                                style={{ animationDelay: `${index * 150}ms` }} 
                            >
                                {/* Icône centrée via div */}
                                <div className="text-blue-600 mb-4 transition-colors duration-300 flex justify-center">
                                    {PillarIcon && <PillarIcon size={48} />}
                                </div>
                                
                                <h3 className="font-titre text-2xl font-extrabold text-blue-900 mb-3">
                                    {pillar.title.toUpperCase()}
                                </h3>
                                
                                {/* Description : text-base pour la lisibilité */}
                                <p className="font-corps text-gray-700 text-base">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;