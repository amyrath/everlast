// components/TechnicalAdvantagesSection.js
import React from 'react';
// Remplacement de l'import Next/Image par l'utilisation d'une balise <img> standard
import * as LucideIcons from 'lucide-react';

const TechnicalAdvantagesSection = () => {
    // Composant réutilisable pour les listes de validation
    const CheckListItem = ({ icon: Icon, text, iconColor }) => {
        // Validation essentielle pour s'assurer que 'Icon' est bien un composant React
        if (!Icon) return null; 
        
        return (
            <li className="flex items-start">
                <Icon size={28} className={`mt-1 mr-3 ${iconColor} flex-shrink-0`} />
                <span className="text-2xl lg:text-3xl text-gray-700 font-corps leading-snug">{text}</span>
            </li>
        );
    };

    return (
        <section id="technical-details" className="py-20 md:py-28 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <h2 className="font-titre text-5xl font-extrabold text-blue-900 text-center mb-20">
                    Advanced Frame Technology & uPVC Benefits
                </h2>

                {/* --- BLOC FRAME IMAGE & DETAILS --- */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                    
                    {/* COLONNE GAUCHE : Image Fétiche (Utilisation de <img> standard) */}
                    <div className="lg:w-1/2 flex items-start justify-center lg:sticky lg:top-8 lg:h-screen">
                        <div className="w-full h-full rounded-xl shadow-2xl overflow-hidden border-4 border-blue-900">
                            {/* Utilisation de <img> pour éviter l'erreur de compilation Next.js/Image */}
                            <img 
                                src="/images/everlast_frames_colours_rev.jpg" 
                                alt="See Our Window Frame" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    {/* COLONNE DROITE : Détails Techniques (Le contenu qui défile) */}
                    <div className="lg:w-1/2 space-y-12">            
                        
                        {/* 1. Perfect Insulation */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
                                <LucideIcons.ThermometerSun size={40} className="mr-4 text-red-700" />
                                Perfect Insulation
                            </h3>
                            <ul className="space-y-4">
                                <CheckListItem icon={LucideIcons.DollarSign} iconColor="text-blue-800" text="uPVC has a low thermal conductivity, leading to significant savings by reducing energy use and wastage." />
                                <CheckListItem icon={LucideIcons.Maximize} iconColor="text-blue-800" text="Hollow uPVC sections maximize the insulating properties of double, triple, or special glazing." />
                                <CheckListItem icon={LucideIcons.CloudRain} iconColor="text-blue-800" text="Provides excellent protection against the weather, even in extreme climate conditions (hot or cold)." />
                                <CheckListItem icon={LucideIcons.VolumeX} iconColor="text-blue-800" text="Shields effectively against sound pollution." />
                                <CheckListItem icon={LucideIcons.Shield} iconColor="text-blue-800" text="Absolute air and water tightness, offering superior defense." />
                            </ul>
                        </div>
                        
                        {/* 2. CARE FOR THE ENVIRONMENT */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-blue-800">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
                                <LucideIcons.Leaf size={40} className="mr-4 text-blue-900" />
                                Care for the environment.
                            </h3>
                            <ul className="space-y-4">
                                <CheckListItem icon={LucideIcons.CheckCircle} iconColor="text-red-700" text="Reduction of energy wastage during production." />
                                <CheckListItem icon={LucideIcons.CheckCircle} iconColor="text-red-700" text="Significant reduction of energy used once the window is installed." />
                                <CheckListItem icon={LucideIcons.Recycle} iconColor="text-red-700" text="Waste material is fully recyclable." />
                                <CheckListItem icon={LucideIcons.CheckCircle} iconColor="text-red-700" text="Achieves perfect thermal insulation." />
                            </ul>
                        </div>
                        
                        {/* 3. LONG LIFE */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-red-700 mb-6 flex items-center">
                                <LucideIcons.Clock size={40} className="mr-4 text-red-700" />
                                Long Life and Durability
                            </h3>
                            <ul className="space-y-4">
                                <CheckListItem icon={LucideIcons.Sun} iconColor="text-blue-800" text="uPVC Protected – guaranteed not to fade or discolour over time." />
                                <CheckListItem icon={LucideIcons.Droplet} iconColor="text-blue-800" text="Water and salt water resistant: non-corroding." />
                                <CheckListItem icon={LucideIcons.FlaskConical} iconColor="text-blue-800" text="High resistance against chemical attacks, weathering, and radiation." />
                                <CheckListItem icon={LucideIcons.Zap} iconColor="text-blue-800" text="High impact resistance." />
                                <CheckListItem icon={LucideIcons.GripVertical} iconColor="text-blue-800" text="High softening points limit the risk of frame deformation." />
                                <CheckListItem icon={LucideIcons.FireExtinguisher} iconColor="text-blue-800" text="Non-inflammable (self-extinguishing properties)." />
                            </ul>
                        </div>
                        
                        {/* 4. LESS WORRY */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-blue-800">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
                                <LucideIcons.HeartHandshake size={40} className="mr-4 text-red-700" />
                                Less Worry, Easy Maintenance
                            </h3>
                            <ul className="space-y-4">
                                <CheckListItem icon={LucideIcons.Sparkles} iconColor="text-red-700" text="Maintenance-free (scratches are easily polished out)." />
                                <CheckListItem icon={LucideIcons.Paintbrush} iconColor="text-red-700" text="No protective painting or varnishing required." />
                                <CheckListItem icon={LucideIcons.Wind} iconColor="text-red-700" text="Condensation-free performance." />
                                <CheckListItem icon={LucideIcons.Replace} iconColor="text-red-700" text="Glazing is easily exchangeable with a removable glazing bead." />
                            </ul>
                        </div>
                        
                        {/* --- 5. CERTIFIED ADVANCED TESTING --- */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-red-700 mb-6 flex items-center">
                                {/* Nouvelle icône : Gauge (Jauge/Calibre) pour représenter les tests de performance */}
                                <LucideIcons.Gauge size={40} className="mr-4 text-blue-800" />
                                Certified Advanced Testing
                            </h3>
                            <p className="font-corps text-2xl text-gray-700 leading-relaxed mb-4">
                                Our products undergo rigorous testing to guarantee peak performance and longevity:
                            </p>
                            <ul className="space-y-4">
                                {/* Icône Wind pour le test de charge et Ajout du gras pour l'affichage du titre */}
                                <CheckListItem 
                                    icon={LucideIcons.Wind} 
                                    iconColor="text-blue-800" 
                                    text="Weather/Wind Load Test: Confirms the exceptional strength and resistance of both frames and glass against high winds and severe weather." 
                                />
                                <CheckListItem 
                                    icon={LucideIcons.Sun} 
                                    iconColor="text-blue-800" 
                                    text="UV Resistance Test: Proves the long-term color stability, UV protection, and structural strength of the frame material." 
                                />
                                <CheckListItem 
                                    icon={LucideIcons.GlassWater} 
                                    iconColor="text-blue-800" 
                                    text="Glass Strength Test: Approves the durability and safety of the glazing used in our windows and doors." 
                                />
                            </ul>
                        </div>

                        {/* --- 6. COMPREHENSIVE WARRANTY (CORRECTED ICONS) --- */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-blue-800">
                            <h3 className="font-titre text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
                                <LucideIcons.Award size={40} className="mr-4 text-red-700" />
                                Comprehensive Warranty
                            </h3>
                            <p className="font-corps text-2xl text-gray-700 leading-relaxed mb-4">
                                We offer a strong warranty backing the quality of our uPVC windows and doors:
                            </p>
                            <ul className="space-y-4">
                                {/* CalendarCheck pour symboliser la durée de 10 ans */}
                                <CheckListItem 
                                    icon={LucideIcons.CalendarCheck} 
                                    iconColor="text-red-700" 
                                    text="10 Year Warranty for all our uPVC frames, confirming long-term confidence in their strength and stability." 
                                />
                                {/* Settings pour symboliser les composants/accessoires de 2 ans */}
                                <CheckListItem 
                                    icon={LucideIcons.Settings} 
                                    iconColor="text-red-700" 
                                    text="2 Year Warranty for all accessories and operating components." 
                                />
                            </ul>
                        </div>

                        {/* 7. LATEST GLOBAL MARKET OPINION */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-8 border-red-700">
                            <h3 className="font-titre text-4xl font-extrabold text-red-700 mb-6 flex items-center">
                                <LucideIcons.Globe size={45} className="mr-4 text-blue-800" />
                                Latest Global Market Opinion
                            </h3>
                            <p className="font-corps text-2xl text-gray-700 leading-relaxed mb-4">
                                Worldwide, the trend is clearly in favour of uPVC windows and doors, particularly:
                            </p>
                            <ul className="space-y-4">
                                <CheckListItem icon={LucideIcons.Users} iconColor="text-red-700" text="For environmental reasons (Sustainability and low energy consumption)." />
                                <CheckListItem icon={LucideIcons.Users} iconColor="text-red-700" text="For commercial reasons (Superior cost-effectiveness over the product lifespan)." />
                                <CheckListItem icon={LucideIcons.Users} iconColor="text-red-700" text="uPVC windows are adaptable to meet any architectural requirements." />
                                <CheckListItem icon={LucideIcons.Users} iconColor="text-red-700" text="uPVC windows can be shaped into aesthetically pleasing forms." />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- BLOC OUR PROJECTS (Restant) --- */}
                <div className="bg-blue-900 text-white p-12 rounded-xl shadow-2xl mt-16">
                    <h3 className="font-titre text-4xl font-extrabold mb-4 text-red-500">
                        Our Projects
                    </h3>
                    <p className="font-corps text-2xl leading-relaxed mb-4">
                        Everlast products are suitable for both, Private homes and Commercial buildings. Over the years we have increased our capacity to handle projects all over West Africa.
                    </p>
                    <p className="font-corps text-xl text-blue-300 opacity-90">
                        This has been possible because of the unwavering quality we attach to our production processes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnicalAdvantagesSection;
