// components/TechnicalAdvantagesSection.js
import React from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';

const TechnicalAdvantagesSection = () => {
    return (
        <section id="technical-details" className="py-20 md:py-28 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <h2 className="font-titre text-5xl font-extrabold text-blue-900 text-center mb-20">
                    Advanced Frame Technology & uPVC Benefits
                </h2>

                {/* --- BLOC FRAME IMAGE & DETAILS --- */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                    
                    {/* COLONNE GAUCHE : Image Fétiche (Utilisation de sticky pour une meilleure UX de défilement) */}
                    <div className="lg:w-1/2 flex items-start justify-center lg:sticky lg:top-8 lg:h-screen">
                        {/* h-screen garantit que l'image prend toute la hauteur pour réduire l'effet de blanc */}
                        <div className="w-full h-full rounded-xl shadow-2xl overflow-hidden border-4 border-blue-900">
                            <Image 
                                src="/images/everlast_frames_colours_rev.jpg" 
                                alt="See Our Window Frame" 
                                width={800} 
                                height={1000} // Hauteur augmentée pour remplir l'espace
                                className="w-full h-full object-cover" 
                                unoptimized={true}
                            />
                        </div>
                    </div>

                    {/* COLONNE DROITE : Détails Techniques (Devient le contenu principal qui défile) */}
                    <div className="lg:w-1/2 space-y-12">            
                        {/* 1. CARE FOR THE ENVIRONMENT (Reste inchangé) */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-blue-600">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-800 mb-6 flex items-center">
                                <LucideIcons.Leaf size={40} className="mr-4 text-blue-600" />
                                Care for the environment.
                            </h3>
                            <ul className="space-y-4 font-corps text-3xl text-gray-700">
                                <li className="flex items-start"><LucideIcons.CheckCircle size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Reduction of energy wastage during production</li>
                                <li className="flex items-start"><LucideIcons.CheckCircle size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Reduction of energy used once the window is installed.</li>
                                <li className="flex items-start"><LucideIcons.CheckCircle size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Waste material can be recycled</li>
                                <li className="flex items-start"><LucideIcons.CheckCircle size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Perfect insulation</li>
                            </ul>
                        </div>
                        
                         {/* NOUVEAU BLOC : Perfect Insulation (Avant Care for the environment) */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extdrabold text-red-70 0 mb-6 flex items-center">
                                <LucideIcons.CloudDrizzle size={40} className="mr-4 text-blue-600" />
                                Perfect Insulation
                            </h3>
                            {/* PARAGRAPHES MANQUANTS AJOUTÉS */}
                            <ul className="space-y-4 font-corps text-3xl text-gray-700">
                                <li className="flex items-start"><LucideIcons.Check size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> uPVC has a low thermal conductivity and thus gives you savings by reducing energy use and wastage.</li>
                                <li className="flex items-start"><LucideIcons.Check size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Hollow uPVC sections help to maximise the insulating properties of double, triple or special glazing.</li>
                                <li className="flex items-start"><LucideIcons.Check size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Provides excellent protection against the weather, even in extreme climate conditions (hot or cold)</li>
                                <li className="flex items-start"><LucideIcons.Check size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Shields against sound pollution</li>
                                <li className="flex items-start"><LucideIcons.Check size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Absolute air and water tightness</li>
                            </ul>
                        </div>

                        {/* 2. LONG LIFE (Reste inchangé) */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-blue-600">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-800 mb-6 flex items-center">
                                <LucideIcons.Clock size={40} className="mr-4 text-red-600" />
                                Long Life
                            </h3>
                            <ul className="space-y-4 font-corps text-3xl text-gray-700">
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> uPVC Protected – will not fade or discolour</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Water resistant: non corroding</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Salt water resistant</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> High resistance against chemical attacks, weathering and radiation</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> High impact resistance</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> High softening points limits risk of deformation</li>
                                <li className="flex items-start"><LucideIcons.Shield size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> Non-inflammable</li>
                            </ul>
                        </div>
                        
                        {/* 3. LESS WORRY (Reste inchangé) */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-red-700 mb-6 flex items-center">
                                <LucideIcons.HeartHandshake size={40} className="mr-4 text-red-700" />
                                Less worry
                            </h3>
                            <ul className="space-y-4 font-corps text-3xl text-gray-700">
                                <li className="flex items-start"><LucideIcons.Zap size={28} className="mt-1 mr-3 text-blue-600 flex-shrink-0" /> Maintenance free (scratches are easily polished out)</li>
                                <li className="flex items-start"><LucideIcons.Zap size={28} className="mt-1 mr-3 text-blue-600 flex-shrink-0" /> No protective painting or varnishing required</li>
                                <li className="flex items-start"><LucideIcons.Zap size={28} className="mt-1 mr-3 text-blue-600 flex-shrink-0" /> Condensation free</li>
                                <li className="flex items-start"><LucideIcons.Zap size={28} className="mt-1 mr-3 text-blue-600 flex-shrink-0" /> Glazing easily exchangeable with removable glazing bead</li>
                            </ul>
                        </div>

                        {/* 4. LATEST GLOBAL MARKET OPINION (Reste inchangé) */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-red-700 mb-6 flex items-center">
                                <LucideIcons.Globe size={45} className="mr-4 text-blue-600" />
                                Latest Global Market Opinion
                            </h3>
                            <p className="font-corps text-3xl text-gray-700 leading-relaxed mb-4">
                                Worldwide the trend is clearly in favour of uPVC windows and doors, particularly:
                            </p>
                            <ul className="space-y-4 font-corps text-3xl text-gray-700">
                                <li className="flex items-start"><LucideIcons.Users size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> For environmental reasons</li>
                                <li className="flex items-start"><LucideIcons.Users size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> For commercial reasons (Cost effectiveness)</li>
                                <li className="flex items-start"><LucideIcons.Users size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> uPVC windows are adaptable to meet any architectural requirements</li>
                                <li className="flex items-start"><LucideIcons.Users size={28} className="mt-1 mr-3 text-red-700 flex-shrink-0" /> uPVC windows can be shaped into aesthetically pleasing shapes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- BLOC OUR PROJECTS (Restant) --- */}
                <div className="bg-blue-900 text-white p-12 rounded-xl shadow-2xl mt-16">
                    <h3 className="font-titre text-4xl font-extrabold mb-4 text-red-500">
                        Our Projects
                    </h3>
                    <p className="font-corps text-3xl leading-relaxed mb-4">
                        Everlast products are suitable for both, Private homes and Commercials building. Over the years we have increased our capacity to handle projects all over West Africa.
                    </p>
                    <p className="font-corps text-2xl text-blue-300 opacity-100">
                         This has been possible because of the quality we attach to our production processes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnicalAdvantagesSection;