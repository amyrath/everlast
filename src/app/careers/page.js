// src/app/careers/page.js
import React from 'react';
import Link from 'next/link';
// Importations nommées pour éviter les erreurs de build
import { Briefcase, Mail, Link as LinkIcon } from 'lucide-react'; 

const CareersPage = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-red-700 mb-6 text-center">
                    Careers at Everlast uPVC
                </h1>
                <p className="font-corps text-xl text-gray-600 mb-12 text-center">
                    Join the team that builds quality, backed by the strength of Interplast.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-800 space-y-6">
                    
                    <p className="font-corps text-lg leading-relaxed">
                        As a subsidiary of Interplast Ghana, we offer a dynamic environment focused on manufacturing excellence, quality service, and regional growth. We look for dedicated professionals in engineering, sales, manufacturing, and customer service.
                    </p>
                    
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                        <Briefcase size={32} className="text-blue-800 mr-4 flex-shrink-0" />
                        <p className="font-titre text-xl font-bold text-blue-900">
                            Our careers are managed centrally through Interplast's HR department.
                        </p>
                    </div>

                    <h2 className="font-titre text-3xl font-bold text-red-700 pt-4">How to Apply</h2>
                    
                    <p className="font-corps text-lg">
                        If you are ambitious, quality-driven, and looking to contribute to a market leader, please check the official Interplast careers portal or send your CV directly to the contact provided below.
                    </p>
                    
                    <ul className="space-y-3 font-corps text-lg">
                        <li className="flex items-center">
                            <Mail size={20} className="text-red-700 mr-3" />
                            Email your application to: <a href="mailto:pipes@interplast.com" className="text-blue-700 hover:underline ml-2">pipes@interplast.com</a>
                        </li>
                        <li className="flex items-center">
                            <LinkIcon size={20} className="text-red-700 mr-3" />
                            <a href="https://interplastghana.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline ml-2">Visit the official Interplast Website</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CareersPage;