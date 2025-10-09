// components/Header.js
import React from 'react';
import Link from 'next/link';

// Liens de navigation principaux
const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' }, 
    { name: 'Technical Info', href: '/#technical-details' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
];

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-blue-900 shadow-lg">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center h-20">
                    
                    {/* LOGO (EMPLACEMENT D'IMAGE) */}
                    <div className="flex items-center">
                        <Link href="/" className="transition duration-300 hover:opacity-80">
                            {/* PLACEHOLDER D'IMAGE pour "EVERLAST UPVC" */}
                            {/* REMPLACEZ CECI par <Image src="/path/to/everlast-logo.png" ... /> */}
                             <img 
                                src="/images/everlast-logo.jpg" 
                                alt="Everlast uPVC Windows and Doors Logo"
                                className="h-12 w-auto" // Ajustez la taille (h-12 = 48px)
                            />
                        </Link>
                    </div>

                    {/* CONTAINER FLEXIBLE POUSSANT TOUT LE CONTENU À DROITE */}
                    <div className="hidden lg:flex flex-1 justify-end items-center space-x-8"> 
                        
                        {/* LIENS DE NAVIGATION */}
                        <nav className="space-x-8">
                            {NAV_LINKS.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className="font-corps text-white text-lg font-medium transition duration-300 hover:text-red-500"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* BOUTON D'APPEL À L'ACTION */}
                        <Link 
                            href="/contact" 
                            className="inline-block px-5 py-2 bg-red-700 text-white font-bold rounded-lg text-lg transition duration-300 hover:bg-red-800 flex-shrink-0"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;