// components/ProductCatalog.js (CONTENU INTÉGRAL MIS À JOUR)
import React from 'react';
import Image from 'next/image'; 

// (Insérez les données windowsData et doorsData ici)
const windowsData = [ 
    { 
        id: 1, 
        name: 'Sliding Windows', 
        type: 'Windows',
        description: 'Design and functionality for modern spaces. Superior sealing and smooth operation.', 
        imageUrl: '/images/sliding.jpg' 
    },
    { 
        id: 2, 
        name: 'Casement Windows', 
        type: 'Windows',
        description: 'Classic European style with maximum ventilation and security locking.', 
        imageUrl: '/images/casement.jpg' 
    },
    { 
        id: 3, 
        name: 'Fixed Windows', 
        type: 'Windows',
        description: 'Ideal for maximum light intake and architectural focus. Non-opening security.', 
        imageUrl: '/images/fixed.jpg' 
    },
    { 
        id: 4, 
        name: 'Asymmetrical Windows', 
        type: 'Windows',
        description: 'Unique shapes and custom designs to meet specific architectural needs.', 
        imageUrl: '/images/asymm.jpg' 
    },
 ];
const doorsData = [ 
    { 
        id: 5, 
        name: 'Sliding Doors', 
        type: 'Doors',
        description: 'Connect indoor and outdoor living seamlessly with wide, easy-to-use panels.', 
        imageUrl: '/images/sliding-door.jpg' 
    },
    { 
        id: 6, 
        name: 'Swing Doors', 
        type: 'Doors',
        description: 'Robust and elegant entrance solutions with high security features.', 
        imageUrl: '/images/swing-door.jpg' 
    }, ];
const productData = [...windowsData, ...doorsData];

const ProductCatalog = () => {
    return (
        // Fond GRIS TRÈS CLAIR (bg-gray-50) au lieu de noir
        <section id="products" className="py-16 md:py-24 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-800">
                    Our Range: Windows & Doors
                </h2>

                <div className="mb-12 text-center max-w-4xl mx-auto">
                    <p className="font-corps text-xl text-gray-700 leading-relaxed mb-5">
                        Everlast windows and doors are made up of a series of interlocking
                        pieces welded together to ensure a highly durable frame. Furthermore, 
                        each frame is reinforced with galvanized steel for maximum strength and 
                        rigidity.
                    </p>
                    <p className="font-titre text-2xl font-bold text-blue-800">
                        Everlast offers Four broad designs for Windows.
                    </p>
                </div>

                {/* NOTE : La structure est simplifiée ici, vous pouvez la séparer en deux boucles si vous voulez des titres de section distincts pour Windows et Doors */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {productData.map((product) => (
                        <div 
                            key={product.id} 
                            // HOVER : Zoom très léger (1.01) et ombre pour l'élévation
                            className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.01] hover:shadow-2xl"
                        >
                            {/* 1. ZONE IMAGE */}
                            <div className="h-64 overflow-hidden">
                                {/* Placeholder plus neutre */}
                                <div className="w-full h-full bg-blue-500/10 flex items-center justify-center text-xl font-bold text-gray-700">
                                    {product.name} ({product.type})
                                </div>
                                {/* Si vous avez des images dans /public/images/ : */}
                                {/* <Image src={product.imageUrl} alt={product.name} width={500} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/> */}
                            </div>

                            {/* 2. ZONE DE TEXTE ET CTA */}
                            <div className="p-6 text-gray-900">
                                <span className="font-corps text-sm uppercase text-red-600 font-semibold">{product.type}</span>
                                <h3 className="font-titre text-2xl font-bold mb-2">{product.name}</h3>
                                <p className="font-corps text-gray-600 mb-6">{product.description}</p>
                                
                                {/* CTA : Fond ROUGE FONCÉ (Red-700), Hover ENCORE PLUS FONCÉ (Red-800) */}
                                <a 
                                    href={`/products/${product.id}`} 
                                    className="inline-block px-6 py-3 text-white font-bold rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 transform group-hover:translate-x-1"
                                >
                                    View Details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;











// // components/ProductCatalog.js
// import React from 'react';
// import Image from 'next/image'; // Utilisé si vous avez des images locales

// // Données fictives des produits
// const productData = [
//     { 
//         id: 1, 
//         name: 'Sliding Windows', 
//         description: 'Design and functionality for modern spaces.', 
//         imageUrl: '/images/sliding.jpg' 
//     },
//     { 
//         id: 2, 
//         name: 'Casement Windows', 
//         description: 'Classic European style with maximum ventilation.', 
//         imageUrl: '/images/casement.jpg' 
//     },
//     { 
//         id: 3, 
//         name: 'Sliding Doors', 
//         description: 'Connect indoor and outdoor living seamlessly.', 
//         imageUrl: '/images/sliding-door.jpg' 
//     },
// ];

// const ProductCatalog = () => {
//     return (
//         // Utilisation du BLEU FONCÉ standard (bg-gray-900) comme alternative
//         <section id="products" className="py-16 md:py-24 bg-gray-900 text-white">
//             <div className="container mx-auto px-4 max-w-7xl">
                
//                 <h2 className="font-titre text-4xl md:text-5xl font-extrabold text-center mb-16">
//                     Discover Our uPVC Product Range
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {productData.map((product) => (
//                         <div 
//                             key={product.id} 
//                             // CARTE DU PRODUIT : Effet de survol (HOVER) avec zoom et ombre (shadow)
//                             className="group relative overflow-hidden rounded-xl shadow-2xl bg-white transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.03]"
//                         >
//                             {/* 1. ZONE IMAGE */}
//                             <div className="h-64 overflow-hidden">
//                                 {/* NOTE: Utilisez des chemins d'accès corrects pour vos images dans le dossier /public */}
//                                 {/* Nous utilisons une div de couleur si aucune image n'est trouvée */}
//                                 <div className="w-full h-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">
//                                     {product.name} Image Placeholder
//                                 </div>
//                                 {/* Si vous avez des images dans /public/images/ : */}
//                                 {/* <Image src={product.imageUrl} alt={product.name} width={500} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> */}
//                             </div>

//                             {/* 2. ZONE DE TEXTE ET CTA */}
//                             <div className="p-6 text-gray-900">
//                                 <h3 className="font-titre text-2xl font-bold mb-2">{product.name}</h3>
//                                 <p className="font-corps text-gray-600 mb-6">{product.description}</p>
                                
//                                 <a 
//                                     href={`/products/${product.id}`} 
//                                     // Utilisation du ROUGE STANDARD (bg-red-600) comme alternative
//                                     className="inline-block px-6 py-3 text-white font-bold rounded-lg bg-red-600 transition duration-300 hover:bg-red-700 transform group-hover:translate-x-1"
//                                 >
//                                     View Details →
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductCatalog;