// src/app/privacy/page.js
import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <section className="py-20 md:py-28 bg-white text-gray-900 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="font-titre text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
                    Privacy Policy
                </h1>
                
                <div className="space-y-6 font-corps text-lg text-gray-700">
                    <p>
                        This Privacy Policy describes how Everlast uPVC handles your personal information in connection with our website and services.
                    </p>
                    
                    <h2 className="font-titre text-2xl font-bold text-red-700 pt-4">1. Data Collection</h2>
                    <p>
                        We collect information you provide directly to us when you request a quote, contact us via email, or fill out a contact form. This information may include your name, email address, phone number, and location details.
                    </p>
                    
                    <h2 className="font-titre text-2xl font-bold text-red-700 pt-4">2. Use of Information</h2>
                    <p>
                        The information we collect is used solely to respond to your inquiries, process your requests for quotes, and improve our services. We do not sell or rent your personal data to third parties.
                    </p>

                    <h2 className="font-titre text-2xl font-bold text-red-700 pt-4">3. Security</h2>
                    <p>
                        We take reasonable measures to protect your information from unauthorized access or disclosure. However, no internet transmission is 100% secure.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicyPage;