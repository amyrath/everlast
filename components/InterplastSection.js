// components/InterplastSection.js
import React from 'react';
import Image from 'next/image';

const InterplastSection = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-center">
                
                <p className="font-corps text-2xl text-gray-700 font-semibold md:mr-8 mb-4 md:mb-0">
                    Another Quality Product From:
                </p>
                
                <a 
                    href="https://interplastghana.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center transition duration-300 hover:opacity-80"
                >
                    {/* SIMULATION D'UN LOGO INTERPLAST (Veuillez placer le fichier réel dans public/images/) */}
                    <div className="h-10 w-40 relative"> 
                         <span className="text-3xl font-titre font-bold text-blue-900">INTERPLAST</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default InterplastSection;