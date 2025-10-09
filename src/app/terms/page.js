// src/app/terms/page.js
import React from 'react';

const TermsOfServicePage = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-50 text-gray-900 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="font-titre text-4xl md:text-5xl font-extrabold text-red-700 mb-8">
                    Terms of Service
                </h1>
                
                <div className="space-y-6 font-corps text-lg text-gray-700">
                    <p>
                        Welcome to Everlast uPVC. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                    
                    <h2 className="font-titre text-2xl font-bold text-blue-900 pt-4">1. Acceptance of Terms</h2>
                    <p>
                        These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.
                    </p>
                    
                    <h2 className="font-titre text-2xl font-bold text-blue-900 pt-4">2. Limitation of Liability</h2>
                    <p>
                        Everlast uPVC and its parent company, Interplast, shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>

                    <h2 className="font-titre text-2xl font-bold text-blue-900 pt-4">3. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsOfServicePage;