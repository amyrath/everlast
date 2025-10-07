// components/PillarsSection.js
"use client"
import React from 'react';
import * as LucideIcons from 'lucide-react'; // Importation des vraies icônes

// Définition des données pour les 4 piliers (tout en anglais, vraies icônes)
const pillarsData = [
    { 
        title: "Beauty", 
        icon: "Feather", // Icône de légèreté/design pour l'esthétique
        description: "Elegant design that enhances both the interior and exterior aesthetic of your building." 
    },
    { 
        title: "Practicality", 
        icon: "Wrench", // Icône d'outil/fonctionnalité
        description: "Ease of use and maintenance, engineered for practical, everyday functionality." 
    },
    { 
        title: "Durability", 
        icon: "ShieldCheck", // Icône de bouclier/vérifié pour la robustesse
        description: "Robust, steel-reinforced materials ensuring maximum longevity and structural integrity." 
    },
    { 
        title: "Safety", 
        icon: "Lock", // Icône de cadenas pour la sécurité
        description: "Multi-point locking mechanisms for total peace of mind and maximum security." 
    },
];

const PillarsSection = () => {
    return (
        <section id="pillars" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Titre de la section */}
                <h2 className="text-3xl md:text-4xl font-titre font-extrabold text-blue-900 text-center mb-16">
                    What do you look for when choosing a window or door?
                </h2>

                {/* Grille des 4 Cartes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {pillarsData.map((pillar, index) => {
                        const PillarIcon = LucideIcons[pillar.icon];
                        
                        return (
                            <div 
                                key={index} 
                                // HOVER : Zoom très léger, ombre intense, bordure ROUGE (red-700)
                                className={`
                                    bg-white p-8 rounded-xl shadow-lg border-l-4 border-transparent
                                    transition-all duration-300 ease-in-out cursor-pointer
                                    transform hover:scale-[1.05] hover:shadow-xl hover:border-red-700
                                `}
                                style={{ animationDelay: `${index * 150}ms` }} 
                            >
                                {/* Icône en Bleu Vif standard (blue-600) */}
                                <div className="text-blue-600 mb-4 transition-colors duration-300">
                                    {PillarIcon && <PillarIcon size={48} />}
                                </div>
                                
                                {/* Titre : text-2xl et font-extrabold (drastiquement augmenté) */}
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









// // components/PillarsSection.js
// " use client"
// import React from 'react';

// // Définition des données pour les 4 piliers
// const pillarsData = [
//     { title: "Beauty", icon: "✨", description: "Design élégant qui rehausse l'esthétique intérieure et extérieure." },
//     { title: "Practicality", icon: "🛠️", description: "Facilité d'utilisation et d'entretien, conçu pour le quotidien." },
//     { title: "Durability", icon: "🛡️", description: "Matériaux robustes et renforcés pour une longévité maximale." },
//     { title: "Safety", icon: "🔒", description: "Mécanismes de verrouillage multi-points pour une tranquillité d'esprit totale." },
// ];

// const PillarsSection = () => {
//     return (
//         <section id="pillars" className="py-16 md:py-24 bg-gray-50">
//             <div className="container mx-auto px-4">
                
//                 {/* Titre de la section (H2) */}
//                 <h2 className="text-3xl md:text-4xl font-titre font-bold text-bleu-fonce text-center mb-12 text-blue-800">
//                     What do you look for when choosing a window or door?
//                 </h2>

//                 {/* Grille des 4 Cartes */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
//                     {pillarsData.map((pillar, index) => (
//                         <div 
//                             key={index} 
//                             // Classes de carte par défaut (Fond blanc, coins arrondis, ombre)
//                             className={`
//                                 pillar-card bg-white p-6 rounded-xl shadow-lg 
//                                 transition-all duration-300 ease-in-out 
//                                 transform hover:scale-[1.03] hover:shadow-2xl 
//                                 border-l-4 border-transparent
//                             `}
//                             // Animation au défilement (Staggered Animation) - nécessite une librairie comme framer-motion pour le vrai effet, mais on simule le délai ici
//                             style={{ animationDelay: `${index * 150}ms` }} 
//                         >
//                             {/* Icône en Bleu Vif */}
//                             // NOUVEAU CODE
//                             <div className="pillar-icon text-4xl text-bleu-vif mb-4 transition-colors duration-300">
//                                 {pillar.icon}
//                             </div>
                            
//                             {/* Titre en police titre */}
//                             <h3 className="font-titre text-xl font-bold text-bleu-fonce mb-3">
//                                 {pillar.title}
//                             </h3>
                            
//                             {/* Description en police corps */}
//                             <p className="font-corps text-gray-600">
//                                 {pillar.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PillarsSection;