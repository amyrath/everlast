// components/InterplastSection.js (Modifié pour le logo Interplast)
import React from 'react';
// L'import 'Image' de Next.js n'est pas ici, nous utilisons <img> pour la simplicité

const InterplastSection = () => {
    return (
        <div className="py-18">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-center">
                
                <p className="font-corps text-4xl text-gray-700 font-semibold md:mr-8 mb-4 md:mb-0">
                    Another Quality Product From
                </p>
                
                <a 
                    href="https://interplastghana.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center transition duration-300 hover:opacity-80"
                >
                    {/* INTEGRATION DU LOGO INTERPLAST */}
                    <img 
                        src="/images/Interplast-logo.png" 
                        alt="Interplast Ghana Logo" 
                        className="h-35 w-auto" // Ajustez la taille (h-10 = 40px)
                    />
                </a>
            </div>
        </div>
    );
};

export default InterplastSection;