// components/ProductIntroSection.js
import React from 'react';
import * as LucideIcons from 'lucide-react';

const ProductIntroSection = () => {
    return (
        <section className="py-20 bg-blue-50 text-gray-900 border-b border-gray-200">
            <div className="container mx-auto px-4 max-w-7xl text-center">
                <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
                    The Perfect Solution for Your Home or Office Needs.
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
                    
                    <p className="font-corps text-2xl leading-relaxed">
                        Everlast windows and doors give you all this and more. There is an Everlast design to suit 
                        your home or office. Because of the versatility of uPVC, our products come in a variety of 
                        shapes, sizes, designs, colours and finishes.
                    </p>
                    
                    <p className="font-corps text-2xl leading-relaxed font-semibold text-red-700">
                        We custom build your windows and doors, as well as install them for you and provide after sales services.
                    </p>
                    
                    <div className="pt-6">
                        <a 
                            href="/contact" 
                            className="inline-flex items-center px-10 py-4 border-2 border-red-700 text-red-700 font-bold text-xl rounded-lg transition duration-300 hover:bg-red-700 hover:text-white shadow-lg"
                        >
                            { /*<LucideIcons.Construction size={24} className="mr-3" />*/}
                            Start Your Custom Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductIntroSection;