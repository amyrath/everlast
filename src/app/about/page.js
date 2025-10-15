// src/app/about/page.js ou components/AboutUs.js
"use client"
import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

// Les 4 étapes du cycle de production Everlast
const processSteps = [
    { 
        id: 1, 
        title: 'SITE SURVEY', 
        description: 'Detailed inspection and analysis of the project location. We establish the project’s specific requirements.', 
        icon: LucideIcons.MapPin,
        color: 'text-red-700'
    },
    { 
        id: 2, 
        title: 'MEASUREMENT', 
        description: 'Precise measurement to ensure the perfect fit for custom windows and doors. Our focus is on absolute dimensional accuracy.', 
        icon: LucideIcons.Ruler,
        color: 'text-blue-700'
    },
    { 
        id: 3, 
        title: 'PRODUCTION', 
        description: 'Manufacturing of high-quality uPVC profiles using advanced machinery and technology in our local facilities.', 
        icon: LucideIcons.Factory,
        color: 'text-red-700'
    },
    { 
        id: 4, 
        title: 'INSTALLATION & AFTERSALES', 
        description: 'Professional installation by certified Everlast teams, backed by comprehensive aftersales support and service guarantees.', 
        icon: LucideIcons.Wrench,
        color: 'text-blue-700'
    },
];

// Composant de l'étape du processus (Timeline verticale élégante)
const ProcessStep = ({ step }) => {
    const Icon = step.icon;
    
    return (
        <div className="flex relative">
            
            {/* Ligne verticale et Cercle de connexion */}
            <div className="flex flex-col text-3xlitems-center mr-4">
                <div className={`w-8 h-8 rounded-full border-2 ${step.color} border-blue-900 bg-white shadow-md flex items-center justify-center relative z-10`}>
                    <span className="text-3xl font-bold text-blue-900">{step.id}</span>
                </div>
                {/* Ligne verticale */}
                {step.id < 4 && <div className="h-full w-0.5 bg-gray-300 absolute top-7 ml-3"></div>}
            </div>

            {/* Contenu de l'étape */}
            <div className="pb-12 pt-0.5 flex-grow">
                <div className="flex items-center mb-6">
                    <Icon size={25} className={`mr-2 ${step.color}`} />
                    <h3 className="font-titre text-3xl font-bold uppercase text-blue-900">
                        {step.title}
                    </h3>
                </div>
                <p className="text-gray-700 text-2xl">{step.description}</p>
            </div>
        </div>
    );
};


const AboutUsPage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            
            {/* BANDEAU SUPÉRIEUR ET LIEN HOME (RÉPONSE À LA DEMANDE) */}
            {/* <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-red-700 py-3 px-6 shadow-md"> */}
                <div className="container mt-10 mx-auto max-w-7xl">
                    <Link 
                        href="/" 
                        className="flex items-center text-blue-900 text-lg font-titre font-bold hover:text-red-700 transition duration-300"
                    >
                        <LucideIcons.ArrowLeft size={20} className="mr-2 mb-19" />
                        Back to Home
                    </Link>
                </div>
            {/* </header> */}

            <section className="py-20 md:py-15 bg-white text-gray-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-blue-900 mb-10 text-center">
                        About Everlast uPVC & Interplast
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-8">
                        
                        {/* LIEN DE PARTENARIAT ET ORIGINE (CONTENU RESTAURÉ) */}
                        <div className="bg-red-50 p-10 rounded-xl border-l-4 border-red-700 shadow-lg">
                            <h2 className="font-titre text-3xl font-bold text-red-700 mb-4">A Legacy of Quality, Powered by Interplast</h2>
                            <p className="font-corps text-xl text-gray-700 leading-relaxed">
                                Everlast uPVC Windows and Doors is a proud subsidiary and a brand extension of Interplast Ghana, the region's leading manufacturer of plastic products. This deep-rooted partnership ensures that every Everlast product benefits from Interplast's five decades of manufacturing expertise, strict quality control, and regional commitment. Our uPVC profiles are engineered with the same dedication to durability and excellence.
                            </p>
                        </div>

                        {/* VALEURS et AMBITIONS (CONTENU RESTAURÉ) */}
                        <h2 className="font-titre text-4xl font-extrabold text-blue-900 pt-6">Our Core Values & Ambition</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* VALEUR 1 : Qualité */}
                            <div className="p-6 bg-blue-50 rounded-xl shadow-lg border border-blue-200">
                                <LucideIcons.ShieldCheck size={36} className="text-red-700 mb-3" />
                                <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Unwavering Quality</h3>
                                <p className="font-corps text-xl text-gray-700">We adhere to the highest international standards, ensuring our products are robust, reliable, and built to withstand the demanding West African climate.</p>
                            </div>
                            {/* VALEUR 2 : Innovation */}
                            <div className="p-6 bg-blue-50 rounded-xl shadow-lg border border-blue-200">
                                <LucideIcons.Lightbulb size={36} className="text-red-700 mb-3" />
                                <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Innovation & Efficiency</h3>
                                <p className="font-corps text-xl text-gray-700">Committed to cutting-edge technology, we provide energy-efficient uPVC solutions that meet modern construction needs for thermal and sound insulation.</p>
                            </div>
                            {/* VALEUR 3 : Engagement Régional */}
                            <div className="p-6 bg-blue-50 rounded-xl shadow-lg border border-blue-200">
                                <LucideIcons.Map size={36} className="text-red-700 mb-3" />
                                <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Regional Partnership</h3>
                                <p className="font-corps text-xl text-gray-700">Our ambition is to be the preferred choice for uPVC in the region, fostering growth and providing local employment through sustainable manufacturing practices.</p>
                            </div>
                        </div>
                        
                        <p className="font-corps text-2xl text-gray-700 leading-relaxed pt-4">
                            Everlast carries the Interplast torch, guaranteeing not just a product, but a long-term investment in your property's value, security, and aesthetic appeal.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* --- SECTION 2 : EVERLAST PROCESS CYCLE (Nouveau Design) --- */}
            <section id="process-cycle" className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-200">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="font-titre text-4xl md:text-5xl font-bold text-center mb-12 uppercase text-blue-900">
                        Everlast Process <span className="text-red-700">cycle</span>
                    </h2>
                    
                    {/* CONTENEUR DU DIAGRAMME D'ÉTAPES */}
                    <div className="relative">
                        {processSteps.map((step) => (
                            <ProcessStep key={step.id} step={step} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUsPage;







// // src/app/about/page.js
// import React from 'react';
// import * as LucideIcons from 'lucide-react'; 

// const AboutUsPage = () => {
//     return (
//         <section className="py-20 md:py-28 bg-white text-gray-900">
//             <div className="container mx-auto px-4 max-w-7xl">
//                 <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-blue-900 mb-10 text-center">
//                     About Everlast uPVC & Interplast
//                 </h1>

//                 <div className="max-w-4xl mx-auto space-y-8">
                    
//                     {/* LIEN DE PARTENARIAT ET ORIGINE */}
//                     <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-700">
//                         <h2 className="font-titre text-3xl font-bold text-red-700 mb-4">A Legacy of Quality, Powered by Interplast</h2>
//                         <p className="font-corps text-xl text-gray-700 leading-relaxed">
//                             **Everlast uPVC Windows and Doors** is a proud subsidiary and a brand extension of **Interplast Ghana**, the region's leading manufacturer of plastic products. This deep-rooted partnership ensures that every Everlast product benefits from Interplast's five decades of manufacturing expertise, strict quality control, and regional commitment. Our uPVC profiles are engineered with the same dedication to durability and excellence.
//                         </p>
//                     </div>

//                     {/* VALEURS et AMBITIONS (Basé sur les informations d'Interplast) */}
//                     <h2 className="font-titre text-4xl font-extrabold text-blue-800 pt-6">Our Core Values & Ambition</h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {/* VALEUR 1 : Qualité */}
//                         <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
//                             <LucideIcons.ShieldCheck size={36} className="text-red-700 mb-3" />
//                             <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Unwavering Quality</h3>
//                             <p className="font-corps text-gray-700">We adhere to the highest international standards, ensuring our products are robust, reliable, and built to withstand the demanding West African climate.</p>
//                         </div>
//                         {/* VALEUR 2 : Innovation */}
//                         <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
//                             <LucideIcons.Lightbulb size={36} className="text-red-700 mb-3" />
//                             <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Innovation & Efficiency</h3>
//                             <p className="font-corps text-gray-700">Committed to cutting-edge technology, we provide energy-efficient uPVC solutions that meet modern construction needs for thermal and sound insulation.</p>
//                         </div>
//                         {/* VALEUR 3 : Engagement Régional */}
//                         <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
//                             <LucideIcons.Map size={36} className="text-red-700 mb-3" />
//                             <h3 className="font-titre text-2xl font-bold text-blue-900 mb-2">Regional Partnership</h3>
//                             <p className="font-corps text-gray-700">Our ambition is to be the preferred choice for uPVC in the region, fostering growth and providing local employment through sustainable manufacturing practices.</p>
//                         </div>
//                     </div>
                    
//                     <p className="font-corps text-xl text-gray-700 leading-relaxed pt-4">
//                         Everlast carries the Interplast torch, guaranteeing not just a product, but a long-term investment in your property's value, security, and aesthetic appeal.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // NOTE: Vous devez importer les icônes Lucide pour que cette page fonctionne
// export default AboutUsPage;