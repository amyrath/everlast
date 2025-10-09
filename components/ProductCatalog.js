// components/ProductCatalog.js (CONTENU INTÉGRAL AVEC CORRECTIONS UX)
import React from 'react';
import Image from 'next/image'; 

// --- DONNÉES DES PRODUITS (Liens mis à jour vers des chemins internes simulés) ---
const windowsData = [
    { id: 1, name: 'Sliding Windows', description: 'Design and functionality for modern spaces. Superior sealing and smooth operation.', imageUrl: '/images/sliding.jpg', link: '/product-detail/windows/1' },
    { id: 2, name: 'Casement Windows', description: 'Classic European style with maximum ventilation and security locking.', imageUrl: '/images/casement.jpg', link: '/product-detail/windows/2' },
    { id: 3, name: 'Fixed Windows', description: 'Ideal for maximum light intake and architectural focus. Non-opening security.', imageUrl: '/images/fixed.jpg', link: '/product-detail/windows/3' },
    { id: 4, name: 'Asymmetrical Windows', description: 'Unique shapes and custom designs to meet specific architectural needs.', imageUrl: '/images/asymm.jpg', link: '/product-detail/windows/4' },
];

const doorsData = [
    { id: 5, name: 'Sliding Doors', description: 'Connect indoor and outdoor living seamlessly with wide, easy-to-use panels.', imageUrl: '/images/sliding-door.jpg', link: '/product-detail/doors/1' },
    { id: 6, name: 'Tilt & Slide Doors', description: 'Combines tilt-in ventilation with full sliding functionality for patios and balconies.', imageUrl: '/images/tilt-and-slide-door.jpg', link: '/product-detail/doors/2' },
    { id: 7, name: 'Turn Doors', description: 'Robust, elegant entrance solutions with high security and superior thermal performance.', imageUrl: '/images/turn-door.jpg', link: '/product-detail/doors/3' },
];

// Composant de carte avec bouton centré et alignement vertical strict
const ProductCard = ({ product }) => (
    <div 
        key={product.id} 
        className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.01] hover:shadow-2xl flex flex-col"
    >
        {/* IMAGE du PRODUIT */}
        <div className="h-64 overflow-hidden">
            <Image 
                src={product.imageUrl} 
                alt={product.name} 
                width={500} 
                height={400} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized={true} 
            />
        </div>

        {/* ZONE DE TEXTE ET CTA */}
        <div className="p-7 text-gray-900 flex flex-col justify-between flex-grow">
            <div>
                <h3 className="font-titre text-3xl font-extrabold mb-3 text-blue-900">{product.name}</h3>
                <p className="font-corps text-gray-700 text-lg mb-6">{product.description}</p>
            </div>
            
            <a 
                href={product.link} 
                // Bouton centré et sans flèche
                className="block w-full text-center px-8 py-3 text-white font-bold rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 mt-4 text-lg"
            >
                View Details 
            </a>
        </div>
    </div>
);


const ProductCatalog = () => {
    return (
        <section id="products" className="py-20 md:py-28 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-20 text-blue-900">
                    Discover Our uPVC Product Range
                </h2>

                {/* --- 1. SECTION WINDOWS --- */}
                <div className="mb-38"> {/* MARGE AUGMENTÉE pour aérer */}
                    <div className="w-full h-[450px] overflow-hidden mb-10 rounded-xl shadow-xl">
                        <Image src="/images/windows-picture.jpg" alt="Everlast Windows Range" width={1200} height={450} className="w-full h-full object-cover" unoptimized={true} />
                    </div>

                    <p className="mb-12 font-titre text-4xl font-bold text-blue-800 text-center mb-6">
                        Everlast offers Four broad designs for Windows
                    </p>
                    <div className="text-center max-w-5xl mx-auto mb-16"> {/* MARGE AUGMENTÉE */}
                        <p className="font-corps text-2xl text-gray-700 leading-relaxed mb-4">
                            Everlast windows are made up of a series of interlocking pieces welded together to ensure a highly durable frame. Furthermore, each frame is reinforced with galvanized steel for maximum strength and rigidity.
                        </p>
                    </div>

                    {/* GRILLE WINDOWS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* GAP AUGMENTÉ */}
                        {windowsData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>


                {/* --- 2. SECTION DOORS --- */}
                <div className="mb-10"> {/* MARGE AJOUTÉE entre les sections et la suivante */}
                    {/* ... (Reste du code de l'intro Doors) ... */}
                    <div className="w-full h-[450px] overflow-hidden mb-10 rounded-xl shadow-xl">
                        <Image src="/images/doors-picture.jpg" alt="Everlast Doors Range" width={1200} height={450} className="w-full h-full object-cover" unoptimized={true} />
                    </div>

                    <p className="mb-12 font-titre text-4xl font-bold text-blue-800 text-center mb-6">
                        Everlast offers Three broad designs of uPVC Doors
                    </p>
                    <div className="text-center max-w-5xl mx-auto mb-16"> {/* MARGE AUGMENTÉE */}
                        <p className="font-corps text-2xl text-gray-700 leading-relaxed mb-4">
                            Whether you are looking into the garden contemplating the view, sitting at the breakfast table taking in the sunrise or just feeling a fresh breeze throughout the room, a reliable Everlast Sliding Door will improve the outlook of your house.
                        </p>
                    </div>

                    {/* GRILLE DOORS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* GAP AUGMENTÉ */}
                        {doorsData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductCatalog;
