// src/app/about/page.js
import React from 'react';
import * as LucideIcons from 'lucide-react'; 

const AboutUsPage = () => {
    return (
        <section className="py-20 md:py-28 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-blue-900 mb-10 text-center">
                    About Everlast uPVC & Interplast
                </h1>

                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* LIEN DE PARTENARIAT ET ORIGINE */}
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-700">
                        <h2 className="font-titre text-3xl font-bold text-red-700 mb-4">A Legacy of Quality, Powered by Interplast</h2>
                        <p className="font-corps text-xl text-gray-700 leading-relaxed">
                            **Everlast uPVC Windows and Doors** is a proud subsidiary and a brand extension of **Interplast Ghana**, the region's leading manufacturer of plastic products. This deep-rooted partnership ensures that every Everlast product benefits from Interplast's five decades of manufacturing expertise, strict quality control, and regional commitment. Our uPVC profiles are engineered with the same dedication to durability and excellence.
                        </p>
                    </div>

                    {/* VALEURS et AMBITIONS (Basé sur les informations d'Interplast) */}
                    <h2 className="font-titre text-4xl font-extrabold text-blue-800 pt-6">Our Core Values & Ambition</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* VALEUR 1 : Qualité */}
                        <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                            <LucideIcons.ShieldCheck size={36} className="text-red-700 mb-3" />
                            <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Unwavering Quality</h3>
                            <p className="font-corps text-gray-700">We adhere to the highest international standards, ensuring our products are robust, reliable, and built to withstand the demanding West African climate.</p>
                        </div>
                        {/* VALEUR 2 : Innovation */}
                        <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                            <LucideIcons.Lightbulb size={36} className="text-red-700 mb-3" />
                            <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Innovation & Efficiency</h3>
                            <p className="font-corps text-gray-700">Committed to cutting-edge technology, we provide energy-efficient uPVC solutions that meet modern construction needs for thermal and sound insulation.</p>
                        </div>
                        {/* VALEUR 3 : Engagement Régional */}
                        <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                            <LucideIcons.Map size={36} className="text-red-700 mb-3" />
                            <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Regional Partnership</h3>
                            <p className="font-corps text-gray-700">Our ambition is to be the preferred choice for uPVC in the region, fostering growth and providing local employment through sustainable manufacturing practices.</p>
                        </div>
                    </div>
                    
                    <p className="font-corps text-xl text-gray-700 leading-relaxed pt-4">
                        Everlast carries the Interplast torch, guaranteeing not just a product, but a long-term investment in your property's value, security, and aesthetic appeal.
                    </p>
                </div>
            </div>
        </section>
    );
};

// NOTE: Vous devez importer les icônes Lucide pour que cette page fonctionne
export default AboutUsPage;