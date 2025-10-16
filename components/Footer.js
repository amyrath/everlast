// components/Footer.js
import React from 'react';
// Remplacement de l'import 'next/link' par l'utilisation de balises <a> standard pour la compatibilité
// import Link from 'next/link'; 
import * as LucideIcons from 'lucide-react';

// Données de navigation
const footerLinks = {
    products: [
        { name: 'Sliding Windows', href: '/product-detail/windows/1' },
        { name: 'Casement Windows', href: '/product-detail/windows/2' },
        { name: 'Fixed Windows', href: '/product-detail/windows/3' },
        { name: 'Sliding Doors', href: '/product-detail/doors/1' },
        { name: 'Turn Doors', href: '/product-detail/doors/3' },
    ],
    company: [
        { name: 'Home', href: '/' }, 
        { name: 'About Us', href: '/about' },
        { name: '5 Reasons', href: '/#reasons' },
        { name: 'Technology', href: '/#technical-details' },
    ],
};

// Liens des réseaux sociaux Interplast Ghana
const socialLinks = [
    { icon: LucideIcons.Facebook, href: 'https://www.facebook.com/InterplastLtdghana/', label: 'Facebook' },
    { icon: LucideIcons.Instagram, href: 'https://www.instagram.com/interplastghana/', label: 'Instagram' }, 
    { icon: LucideIcons.Linkedin, href: 'https://gh.linkedin.com/company/interplastghana', label: 'LinkedIn' },
];

const Footer = () => {
    return (
        // STYLES MODIFIÉS : Compact et élégant
        <footer className="bg-blue-900 text-gray-300 pt-8 pb-1 border-t-4 border-red-700">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* --- GRILLE PRINCIPALE (LOGOS, LIENS, CONTACT) --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-blue-700 pb-2 mb-6">
                    
                    {/* 1. LOGO ET MISSION */}
                    <div className="col-span-1 md:col-span-1">
                        {/* Remplacement de <Link> par <a> */}
                        <a href="/" className="text-2xl font-titre font-extrabold text-white">
                            EVERLAST <span className="text-red-500">UPVC</span>
                        </a>
                        {/* CORRECTION D'ALIGNEMENT : Passage de mt-2 à mt-4 pour aligner le texte avec les titres des autres colonnes */}
                        <p className="mt-4 text-1xl text-with leading-relaxed">
                            Delivering superior uPVC Windows and Doors across West Africa. Quality, Durability, and Energy Efficiency guaranteed.
                        </p>
                        
                        {/* ICONES SOCIAUX */}
                        <div className="flex space-x-3 mt-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={social.label} 
                                        href={social.href} 
                                        target={social.href !== '#' ? "_blank" : "_self"} 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-red-500 transition duration-300"
                                        aria-label={`Follow us on ${social.label}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2. LIENS PRODUITS */}
                    <div>
                        <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
                            Our Products
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    {/* Remplacement de <Link> par <a> */}
                                    <a href={link.href} className="hover:text-red-500 transition duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. LIENS SOCIÉTÉ */}
                    <div>
                        <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    {/* Remplacement de <Link> par <a> */}
                                    <a href={link.href} className="hover:text-red-500 transition duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. CONTACT RAPIDE */}
                    <div>
                        <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
                            Get In Touch
                        </h4>
                        <address className="not-italic space-y-3 text-sm">
                            {/* ADRESSE EXACTE */}
                            <p className="flex items-start"> 
                                <LucideIcons.MapPin size={16} className="mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                                109 Spintex Road Accra, <br />Greater Accra AD 330, GH
                            </p>
                            
                            {/* EMAIL CORRIGÉ */}
                            <p className="flex items-center">
                                <LucideIcons.Mail size={16} className="mr-3 text-red-500 flex-shrink-0" />
                                <a href="mailto:pipes@interplast.com" className="hover:text-red-500">pipes@interplast.com</a> 
                            </p>
                            
                            {/* TÉLÉPHONE PRINCIPAL */}
                            <p className="flex items-center">
                                <LucideIcons.Phone size={16} className="mr-3 text-red-500 flex-shrink-0" />
                                TEL: +233 30 2819 000
                            </p>
                            
                            {/* FAX */}
                            <p className="flex items-center text-gray-400">
                                <LucideIcons.Printer size={16} className="mr-3 text-red-500 flex-shrink-0" />
                                FAX: +233 30 2813 490
                            </p>
                            
                        </address>
                        {/* Remplacement de <Link> par <a> */}
                        <a 
                            href="/contact" 
                            className="inline-block mt-4 px-4 py-2 bg-red-700 text-white text-sm font-bold rounded-lg hover:bg-red-600 transition duration-300"
                        >
                            Request a Quote
                        </a>
                    </div>

                </div>

                {/* --- COPYRIGHT ET MENTIONS LÉGALES --- */}
                <div className="text-center text-xm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Everlast uPVC. All rights reserved.
                    </p>
                    <div className="mt-2 space-x-4">
                        {/* Remplacement de <Link> par <a> */}
                        <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
                        <a href="/terms" className="hover:text-red-500">Terms of Service</a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;











// // components/Footer.js
// import React from 'react';
// import Link from 'next/link';
// import * as LucideIcons from 'lucide-react';

// // Données de navigation
// const footerLinks = {
//     products: [
//         { name: 'Sliding Windows', href: '/product-detail/windows/1' },
//         { name: 'Casement Windows', href: '/product-detail/windows/2' },
//         { name: 'Sliding Doors', href: '/product-detail/doors/1' },
//         { name: 'Turn Doors', href: '/product-detail/doors/3' },
//     ],
//     company: [
//         { name: 'About Us', href: '/about' },
//         { name: '5 Reasons', href: '/#reasons' },
//         { name: 'Technology', href: '/#technical-details' },
//     ],
// };

// // Liens des réseaux sociaux Interplast Ghana
// const socialLinks = [
//     { icon: LucideIcons.Facebook, href: 'https://www.facebook.com/InterplastLtdghana/', label: 'Facebook' },
//     { icon: LucideIcons.Instagram, href: 'https://www.instagram.com/interplastghana/', label: 'Instagram' }, 
//     { icon: LucideIcons.Linkedin, href: 'https://gh.linkedin.com/company/interplastghana', label: 'LinkedIn' },
// ];

// const Footer = () => {
//     return (
//         // STYLES MODIFIÉS : Compact et élégant
//         <footer className="bg-blue-900 text-gray-300 pt-8 pb-1 border-t-4 border-red-700">
//             <div className="container mx-auto px-4 max-w-7xl">

//                 {/* --- GRILLE PRINCIPALE (LOGOS, LIENS, CONTACT) --- */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-blue-700 pb-2 mb-6">
                    
//                     {/* 1. LOGO ET MISSION */}
//                     <div className="col-span-1 md:col-span-1">
//                         <Link href="/" className="text-2xl font-titre font-extrabold text-white">
//                             EVERLAST <span className="text-red-500">UPVC</span>
//                         </Link>
//                         <p className="mt-2 text-1g text-with leading-relaxed">
//                             Delivering superior uPVC Windows and Doors across West Africa. Quality, Durability, and Energy Efficiency guaranteed.
//                         </p>
                        
//                         {/* ICONES SOCIAUX */}
//                         <div className="flex space-x-3 mt-5">
//                             {socialLinks.map((social) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a 
//                                         key={social.label} 
//                                         href={social.href} 
//                                         target={social.href !== '#' ? "_blank" : "_self"} 
//                                         rel="noopener noreferrer"
//                                         className="text-gray-400 hover:text-red-500 transition duration-300"
//                                         aria-label={`Follow us on ${social.label}`}
//                                     >
//                                         <Icon size={20} />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* 2. LIENS PRODUITS */}
//                     <div>
//                         <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
//                             Our Products
//                         </h4>
//                         <ul className="space-y-2 text-sm">
//                             {footerLinks.products.map((link) => (
//                                 <li key={link.name}>
//                                     <Link href={link.href} className="hover:text-red-500 transition duration-300">
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* 3. LIENS SOCIÉTÉ */}
//                     <div>
//                         <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
//                             Company
//                         </h4>
//                         <ul className="space-y-2 text-sm">
//                             {footerLinks.company.map((link) => (
//                                 <li key={link.name}>
//                                     <Link href={link.href} className="hover:text-red-500 transition duration-300">
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* 4. CONTACT RAPIDE (MISE À JOUR) */}
//                     <div>
//                         <h4 className="text-lg font-titre font-bold text-white mb-4 border-b border-red-700 pb-1">
//                             Get In Touch
//                         </h4>
//                         <address className="not-italic space-y-3 text-sm">
//                             {/* ADRESSE EXACTE */}
//                             <p className="flex items-start"> 
//                                 <LucideIcons.MapPin size={16} className="mr-3 text-red-500 flex-shrink-0 mt-0.5" />
//                                 109 Spintex Road Accra, <br />Greater Accra AD 330, GH
//                             </p>
                            
//                             {/* EMAIL CORRIGÉ */}
//                             <p className="flex items-center">
//                                 <LucideIcons.Mail size={16} className="mr-3 text-red-500 flex-shrink-0" />
//                                 <a href="mailto:pipes@interplast.com" className="hover:text-red-500">pipes@interplast.com</a> 
//                             </p>
                            
//                             {/* TÉLÉPHONE PRINCIPAL */}
//                             <p className="flex items-center">
//                                 <LucideIcons.Phone size={16} className="mr-3 text-red-500 flex-shrink-0" />
//                                 TEL: +233 30 2819 000
//                             </p>
                            
//                             {/* FAX */}
//                              <p className="flex items-center text-gray-400">
//                                 <LucideIcons.Printer size={16} className="mr-3 text-red-500 flex-shrink-0" />
//                                 FAX: +233 30 2813 490
//                             </p>
                            
//                         </address>
//                         <Link 
//                             href="/contact" 
//                             className="inline-block mt-4 px-2 py-1.85 bg-red-750 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition duration-300"
//                         >
//                             Request a Quote
//                         </Link>
//                     </div>

//                 </div>

//                 {/* --- COPYRIGHT ET MENTIONS LÉGALES --- */}
//                 <div className="text-center text-s text-gray-400">
//                     <p>
//                         &copy; {new Date().getFullYear()} Everlast uPVC. All rights reserved.
//                     </p>
//                     <div className="mt-2 space-x-4">
//                         <Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link>
//                         <Link href="/terms" className="hover:text-red-500">Terms of Service</Link>
//                     </div>
//                 </div>
                
//             </div>
//         </footer>
//     );
// };

// export default Footer;