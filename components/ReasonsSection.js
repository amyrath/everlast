// components/ReasonsSection.js
"use client"; 

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react'; 

// --- DONNÉES ---
const reasonsData = [
    { id: 'maintenance', title: 'Maintenance', icon: 'Sparkles', detail: "Everlast uPVC windows and doors require no painting, no sanding and no warping. What it needs is only routine cleaning." },
    { id: 'sound', title: 'Sound Insulation', icon: 'VolumeX', detail: "Everlast Windows and Doors are fusion welded, lock at multiple points around the frame and are double sealed leading to excellent sound insulation. Double glazing is available on request which can offer the ultimate in sound and temperature insulation." },
    { id: 'water', title: 'Resistance to Water', icon: 'Droplet', detail: "Everlast Windows and Doors have a built in special rain drain mechanism." },
    { id: 'wind', title: 'Resistance to Wind', icon: 'Wind', detail: "Everlast Windows and Doors are multi chambered and reinforced with steel; it can withstand heavy wind loads." },
    { id: 'aesthetics', title: 'Aesthetics', icon: 'Star', detail: "Everlast Windows and Doors have elegant looks, available in several colors, enhances both, the exteriors and interiors of the building." },
];
// ------------------------------------------

const ReasonsSection = () => {
    const [activeReason, setActiveReason] = useState(reasonsData[0].id);
    const activeDetail = reasonsData.find(r => r.id === activeReason);
    const IconComponent = LucideIcons[activeDetail.icon] || LucideIcons.HelpCircle; 

    return (
        <section id="reasons" className="py-20 md:py-28 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* TITRE ORIGINAL RÉTABLI */}
                <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900">
                    5 Reasons For Choosing Everlast Windows & Doors
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* COLONNE GAUCHE : Navigation */}
                    <div className="lg:w-1/3 bg-blue-900 p-8 rounded-xl shadow-2xl text-white h-fit">
                        {reasonsData.map((reason) => {
                            const NavIcon = LucideIcons[reason.icon];
                            
                            return (
                                <button
                                    key={reason.id}
                                    onClick={() => setActiveReason(reason.id)}
                                    className={`
                                        w-full text-center text-left py-4 px-4 mb-3 rounded-lg transition-all duration-300 flex
                                        ${activeReason === reason.id 
                                            ? 'bg-red-700 border-l-4 border-white' 
                                            : 'hover:bg-blue-900 hover:text-white'
                                        }
                                    `}
                                >
                                    {NavIcon && <NavIcon size={28} className="mr-4 transition-colors duration-300" />} 
                                    <span className="text-xl font-titre font-bold">{reason.title.toUpperCase()}</span>
                                </button>
                            );
                        })}
                        
                        {/* LIEN VERS LA SECTION AVANTAGES TECHNIQUES */}
                        <div className="mt-8 pt-6 border-t border-white/20">
                            <a 
                                href="#technical-details" 
                                className="inline-block text-red-400 text-xl font-bold hover:text-white transition duration-300 flex items-center"
                            >
                                <LucideIcons.Layers size={24} className="mr-2" />
                                Deep Dive into Frame Technology →
                            </a>
                        </div>
                    </div>

                    {/* COLONNE DROITE : Détails et Illustration */}
                    <div className="lg:w-2/3 bg-gray-50 p-10 rounded-xl shadow-2xl text-gray-900 flex flex-col md:flex-row gap-10 items-stretch">
                        
                        {/* 1. Zone de Texte du Détail : utilise flex-grow et justify-between pour l'étirement */}
                        <div className="md:w-2/5 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="font-titre text-5xl font-bold mb-4 text-blue-900">
                                    {activeDetail.title}
                                </h3>
                            </div>
                            <div className="flex flex-grow py-4 pt-4"> 
                                {/* TAILLE DE TEXTE RÉTABLIE */}
                                <p className="font-corps text-gray-700 text-2xl leading-relaxed">
                                    {activeDetail.detail}
                                </p>
                            </div>
                            
                            {/* CTA UNIFIÉ vers la page Devis/Contact */}
                            <a href="/contact" className="mt-8 inline-block text-red-700 text-2xl font-bold hover:underline transition duration-300">
                                Ask For a Free Quote →
                            </a>
                        </div>
                        
                        {/* 2. Zone d'Illustration Technique : min-h augmenté pour s'étirer */}
                        <div className="md:w-2/5 flex items-center justify-center bg-gray-200 rounded-xl p-8 min-h-[400px] w-full">
                            {IconComponent && <IconComponent size={120} className="text-blue-500 opacity-70" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;