// src/app/contact/page.js
import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

// Composant pour le formulaire de contact
const ContactForm = () => {
    // NOTE: Dans un projet réel, vous géreriez la soumission ici (handleSubmit)
    return (
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-700">
            <h2 className="font-titre text-3xl font-bold text-blue-900 mb-6">
                Request a Free Quote
            </h2>
            
            {/* Nom complet */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-300"
                    placeholder="John Doe"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-300"
                    placeholder="john.doe@example.com"
                />
            </div>
            
            {/* Type de produit */}
            <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                <select 
                    id="product" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-300"
                >
                    <option value="">Select a Product Type</option>
                    <option value="windows">uPVC Windows (Casement)</option>
                    <option value="windows">uPVC Windows (Sliding)</option>
                    <option value="windows">uPVC Windows (Fixed)</option>
                    <option value="windows">uPVC Windows (Asymmetrical)</option>
                    <option value="doors">uPVC Doors (Sliding/Turn)</option>
                    <option value="doors">uPVC Doors (Tilt & Slide Doors)</option>
                    <option value="doors">uPVC Doors (Turn Doors)</option>
                    <option value="general">General Inquiry</option>
                </select>
            </div>

            {/* Message/Détails du projet */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details / Message</label>
                <textarea 
                    id="message" 
                    rows="4" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-300"
                    placeholder="I need 5 sliding windows for a residential project..."
                />
            </div>

            {/* Bouton de soumission */}
            <button 
                type="submit" 
                className="w-full px-6 py-3 bg-red-700 text-white font-bold rounded-lg text-lg transition duration-300 hover:bg-red-800 shadow-md"
            >
                Submit Request
            </button>
        </form>
    );
};

// Composant pour les informations de contact et la carte
const ContactInfo = () => (
    <div className="space-y-8">
        <h2 className="font-titre text-3xl font-bold text-blue-900">Our Details</h2>
        
        {/* Contact Infos */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-lg space-y-4">
            
            <h3 className="font-titre text-xl font-semibold text-red-700">Interplast Ghana Headquarters</h3>
            
            {/* Adresse exacte */}
            <p className="flex items-start font-corps text-gray-800">
                <LucideIcons.MapPin size={24} className="mr-3 text-blue-800 flex-shrink-0 mt-0.5" />
                <span>109 Spintex Road Accra, <br />Greater Accra AD 330, GH</span>
            </p>
            
            {/* Email exact */}
            <p className="flex items-center font-corps text-gray-800">
                <LucideIcons.Mail size={24} className="mr-3 text-blue-800 flex-shrink-0" />
                <a href="mailto:pipes@interplast.com" className="hover:text-red-700">pipes@interplast.com</a> 
            </p>
            
            {/* Téléphone exact */}
            <p className="flex items-center font-corps text-gray-800">
                <LucideIcons.Phone size={24} className="mr-3 text-blue-800 flex-shrink-0" />
                TEL: +233 30 2819 000
            </p>
            
            {/* Fax exact */}
            <p className="flex items-center font-corps text-gray-600">
                <LucideIcons.Printer size={24} className="mr-3 text-blue-800 flex-shrink-0" />
                FAX: +233 30 2813 490
            </p>
        </div>
        
        {/* Carte (Intégration réelle de Google Maps) */}
        <div className="h-96 rounded-xl shadow-lg overflow-hidden border border-gray-300"> 
            <iframe
                // URL de la localisation de l'usine d'Interplast à Accra
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.071850785189!2d-0.0911850257329125!3d5.55627689441113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf835fa908e33f%3A0x6734199c95b41297!2s109%20Spintex%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699901511105!5m2!1sen!2sgh" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Localisation d'Everlast uPVC sur Spintex Road, Accra"
                title="Google Maps Location"
            ></iframe>
        </div>
    </div>
);


const ContactPage = () => {
    return (
        <section className="py-20 md:py-10 bg-gray-50 text-gray-900 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-6">
                    <Link href="/" className="flex items-center text-blue-800 hover:text-red-700 font-semibold transition duration-300">
                        <LucideIcons.ArrowLeft size={30} className="mr-2"/>
                        Back to Home
                    </Link>
                </div>
                <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-red-700 mb-12 text-center">
                    Get in Touch with Everlast
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Colonne de gauche: Formulaire */}
                    <ContactForm />
                    
                    {/* Colonne de droite: Infos et Carte */}
                    <ContactInfo />
                    
                </div>
            </div>
        </section>
    );
};

export default ContactPage;