// components/ReasonsSection.js (VERSION FINALE AVEC COULEURS STANDARD)
"use client"; 

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react'; 

// --- DONNÉES : (Aesthetics a été changé en Star) ---
const reasonsData = [
    { id: 'maintenance', title: 'Maintenance', icon: 'Sparkles', detail: "Everlast uPVC windows and doors require no painting, no sanding and no warping. What it needs is only routine cleaning." },
    { id: 'sound', title: 'Sound Insulation', icon: 'VolumeX', detail: "Everlast Windows and Doors are fusion welded, lock at multiple points around the frame and are double sealed leading to excellent sound insulation. Double glazing is available on request which can offer the ultimate in sound and temperature insulation." },
    { id: 'water', title: 'Resistance to Water', icon: 'Droplet', detail: "Everlast Windows and Doors have a built in special rain drain mechanism." },
    { id: 'wind', title: 'Resistance to Wind', icon: 'Wind', detail: "Everlast Windows and Doors are multi chambered and reinforced with steel; it can withstand heavy wind loads." },
    { id: 'aesthetics', title: 'Aesthetics', icon: 'Star', detail: "Everlast Windows and Doors have elegant looks, enhances both; the exteriors and interiors of the building." },
];
// ------------------------------------------

const ReasonsSection = () => {
    const [activeReason, setActiveReason] = useState(reasonsData[0].id);
    const activeDetail = reasonsData.find(r => r.id === activeReason);
    const IconComponent = LucideIcons[activeDetail.icon] || LucideIcons.HelpCircle; 

    return (
        // Utilisation des couleurs standard : texte foncé sur fond blanc
        <section id="reasons" className="py-12 md:py-16 bg-white text-gray-900"> 
            <div className="container mx-auto px-4 max-w-7xl">
                
                <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-800">
                    5 Reasons For Choosing Everlast Windows & Doors
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">

                    {/* COLONNE GAUCHE : Navigation. BG-BLUE-900 (très foncé) pour remplacer 'bleu-fonce' */}
                    <div className="lg:w-1/3 bg-blue-900 p-6 rounded-xl shadow-2xl text-white h-fit"> 
                        {reasonsData.map((reason) => {
                            const NavIcon = LucideIcons[reason.icon];
                            
                            return (
                                <button
                                    key={reason.id}
                                    onClick={() => setActiveReason(reason.id)}
                                    className={`
                                        w-full text-left py-4 px-4 mb-2 rounded-lg font-bold transition-all duration-300 flex items-center
                                        ${activeReason === reason.id 
                                            // ACTIF : Fond ROUGE FONCÉ (Red-700)
                                            ? 'bg-red-700 border-l-4 border-white' 
                                            // INACTIF : Hover sur un bleu légèrement plus clair (blue-800)
                                            : 'hover:bg-blue-800 hover:text-white' 
                                        }
                                    `}
                                >
                                    {NavIcon && <NavIcon size={28} className="mr-4 transition-colors duration-300" />} 
                                    <span className="text-xl font-titre">{reason.title.toUpperCase()}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* COLONNE DROITE : Détails et Illustration */}
                    <div className="lg:w-2/3 bg-gray-50 p-8 rounded-xl shadow-2xl text-gray-900 flex flex-col md:flex-row gap-8 items-start">
                        
                        {/* 1. Zone de Texte du Détail */}
                        <div className="md:w-3/5">
                            <h3 className="font-titre text-4xl font-bold mb-4 text-blue-900">
                                {activeDetail.title}
                            </h3>
                            {/* Correction de taille et de couleur pour la lisibilité */}
                            <p className="font-corps text-gray-700 text-lg leading-relaxed">
                                {activeDetail.detail}
                            </p>
                            
                            {/* CTA avec ROUGE FONCÉ */}
                            <a href="/contact" className="mt-6 inline-block text-red-700 font-bold hover:underline transition duration-300">
                                CONTACT US FOR SPECS & CERTIFICATES →
                            </a>
                        </div>
                        
                        {/* 2. Zone d'Illustration Technique */}
                        <div className="md:w-2/5 flex items-center justify-center bg-gray-200 rounded-lg p-6 min-h-[250px] w-full">
                            {/* AFFICHAGE DE L'ICÔNE : Couleur bleu standard */}
                            {IconComponent && <IconComponent size={96} className="text-blue-500 opacity-70" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;







// // components/ReasonsSection.js
// "use client"; // CRUCIAL : Ce composant utilise useState (Hooks client)

// import React, { useState } from 'react';
// import * as LucideIcons from 'lucide-react'; // Importation de la librairie d'icônes professionnelles

// // --- DONNÉES : Les 5 Raisons Techniques ---
// const reasonsData = [
//     { 
//         id: 'maintenance', 
//         title: 'Maintenance', 
//         icon: 'Sparkles', // Icône de propreté/éclat
//         detail: "Everlast uPVC windows and doors require no painting, no sanding and no warping. What it needs is only routine cleaning." 
//     },
//     { 
//         id: 'sound', 
//         title: 'Sound Insulation', 
//         icon: 'VolumeX', // Icône de son coupé
//         detail: "Everlast Windows and Doors are fusion welded, lock at multiple points around the frame and are double sealed leading to excellent sound insulation. Double glazing is available on request which can offer the ultimate in sound and temperature insulation." 
//     },
//     { 
//         id: 'water', 
//         title: 'Resistance to Water', 
//         icon: 'Droplet', // Icône de goutte/eau
//         detail: "Everlast Windows and Doors have a built in special rain drain mechanism." 
//     },
//     { 
//         id: 'wind', 
//         title: 'Resistance to Wind', 
//         icon: 'Wind', // Icône de vent
//         detail: "Everlast Windows and Doors are multi chambered and reinforced with steel; it can withstand heavy wind loads." 
//     },
//     { 
//         id: 'aesthetics', 
//         title: 'Aesthetics', 
//         icon: 'Star', // Icône d'esthétique/couleur
//         detail: "Everlast Windows and Doors have elegant looks, enhances both; the exteriors and interiors of the building." 
//     },
// ];
// // ------------------------------------------

// const ReasonsSection = () => {
//     // État pour savoir quelle raison est actuellement sélectionnée.
//     const [activeReason, setActiveReason] = useState(reasonsData[0].id);

//     // Fonction pour trouver le détail et l'icône de la raison active
//     const activeDetail = reasonsData.find(r => r.id === activeReason);
//     const IconComponent = LucideIcons[activeDetail.icon] || LucideIcons.HelpCircle; 

//     return (
//         // Fond BLANC, Texte BLEU FONCÉ pour un contraste maximal
//         <section id="reasons" className="py-12 md:py-8 bg-white text-bleu-fonce"> 
//             <div className="container mx-auto px-4 max-w-7xl">
                
//                 {/* TITRE : Grande taille pour l'impact */}
//                 <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-16">
//                     5 Reasons For Choosing Everlast Windows & Doors
//                 </h2>

//                 <div className="flex flex-col lg:flex-row gap-10">

//                     {/* COLONNE GAUCHE : La Liste des Onglets (Navigation) */}
//                     {/* Fond BLEU FONCÉ, texte BLANC - navigation professionnelle */}
//                     <div className="lg:w-1/3 bg-bleu-fonce p-6 rounded-xl shadow-2xl text-white h-fit"> 
//                         {reasonsData.map((reason) => {
//                             const NavIcon = LucideIcons[reason.icon];
                            
//                             return (
//                                 <button
//                                     key={reason.id}
//                                     onClick={() => setActiveReason(reason.id)}
//                                     className={`
//                                         w-full text-left py-4 px-4 mb-2 rounded-lg font-bold transition-all duration-300 flex items-center
//                                         ${activeReason === reason.id 
//                                             // ACTIF : Fond ROUGE D'ACTION (Hover est désormais géré par cette classe)
//                                             ? 'bg-rouge-action border-l-4 border-white' 
//                                             // INACTIF : Hover sur un bleu légèrement plus clair, couleur du texte en BLEU VIF
//                                             : 'hover:bg-bleu-fonce/80 hover:text-bleu-vif' 
//                                         }
//                                     `}
//                                 >
//                                     {/* ICÔNE LUCIDE : Taille XL */}
//                                     {NavIcon && <NavIcon size={28} className="mr-4 transition-colors duration-300" />} 
                                    
//                                     {/* TEXTE : Taille augmentée (xl) pour la lisibilité */}
//                                     <span className="text-xl font-titre">{reason.title.toUpperCase()}</span>
//                                 </button>
//                             );
//                         })}
//                     </div>

//                     {/* COLONNE DROITE : Détails et Illustration */}
//                     <div className="lg:w-/3 bg-gray-50 p-8 rounded-xl shadow-2xl text-bleu-fonce flex flex-col md:flex-row gap-8 items-start">
                        
//                         {/* 1. Zone de Texte du Détail */}
//                         <div className="md:w-3/5">
//                             {/* H3 : Taille augmentée à 3xl */}
//                             <h3 className="font-titre text-5xl font-bold mb-4 text-bleu-fonce">
//                                 {activeDetail.title}
//                             </h3>
//                             {/* Texte du Corps : Taille L (text-lg), Leading relaxé pour l'espace */}
//                             <p className="font-corps text-gray-900 text-lg leading-relaxed">
//                                 {activeDetail.detail}
//                             </p>
                            
//                             <a href="/contact" className="mt-6 inline-block text-rouge-action font-bold hover:underline transition duration-300">
//                                 CONTACT US FOR SPECS & CERTIFICATES →
//                             </a>
//                         </div>
                        
//                         {/* 2. Zone d'Illustration Technique */}
//                         <div className="md:w-2/5 flex items-center justify-center bg-gray-200 rounded-lg p-6 min-h-[250px] w-full">
//                             {/* AFFICHAGE DE L'ICÔNE LUCIDE : 8xl et couleur Bleu Vif */}
//                             {IconComponent && <IconComponent size={96} className="text-bleu-vif opacity-70" />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReasonsSection;