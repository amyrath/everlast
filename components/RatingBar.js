// components/RatingBar.js (Fichier COMPLET et CORRIGÉ)
import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const RatingBar = () => {
    // Données réelles validées manuellement (selon votre demande)
    const rating = 4.4;
    const reviewCount = 187;
    // Lien Google Maps valide pour afficher les avis sur la fiche de l'entreprise
    const googleReviewsUrl = "https://www.google.com/search?q=Interplast+Ltd.+Spintex+Road+Accra+reviews"; 

    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const stars = [];

        // Étoiles pleines
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} size={20} fill="#facc15" stroke="#facc15" />);
        }
        // Représentation de l'étoile partielle
        if (fullStars < 5) {
            // Utiliser une étoile pour la partie décimale (pour simuler visuellement)
            stars.push(<Star key="partial" size={20} fill="#facc15" stroke="#facc15" style={{clipPath: `inset(0 ${(1 - (rating % 1)) * 100}% 0 0)`}} />);
        }
        // Étoiles vides pour compléter jusqu'à 5
        while (stars.length < 5) {
            stars.push(<Star key={`empty-${stars.length}`} size={20} className="text-gray-400" />);
        }
        // Afficher seulement les 5 premières étoiles pour éviter le débordement causé par la demi-étoile
        return stars.slice(0, 5);
    };

    return (
        <div className="bg-white py-4 shadow-md border-b border-gray-200">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-8">
                    
                    {/* Note et étoiles */}
                    <div className="flex items-center space-x-2">
                        <span className="font-titre text-2xl font-bold text-blue-900">{rating}</span>
                        <div className="flex space-x-1 relative">
                            {renderStars()}
                        </div>
                    </div>

                    {/* Nombre d'avis */}
                    <div className="flex items-center space-x-2 text-gray-700">
                        <MessageSquare size={20} className="text-red-700" />
                        <span className="font-corps text-lg">
                            Basé sur **{reviewCount}** Customer Reviews
                        </span>
                    </div>

                    {/* Lien vers les avis réels sur Google Maps */}
                    <a 
                        href={googleReviewsUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-corps text-red-700 text-lg font-semibold transition duration-300 hover:text-red-500 underline"
                    >
                        Read all reviews (Google)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RatingBar;