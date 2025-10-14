'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// ✅ Base de données produits (copiée depuis ton fichier existant)
const PRODUCTS_DB = {
  windows: {
    1: {
      name: "Everlast Sliding Windows",
      image: "/images/sliding.jpg",
      description:
        "Our Sliding Window design maximizes natural light and ventilation with a smooth, effortless operation. Its robust, steel-reinforced uPVC frame ensures excellent structural integrity and superior sealing against dust and moisture. Ideal for spaces requiring easy access and a contemporary aesthetic.",
      specs: [
        "uPVC 5-Chamber Profile",
        "Smooth Gliding System",
        "Easy Maintenance",
        "High Wind Resistance",
        "Optional Tinted Glass",
      ],
    },
    2: {
      name: "Everlast Casement Windows",
      image: "/images/casement.jpg",
      description:
        "A classic and highly versatile choice, our Casement Windows open outwards, offering superior ventilation and maximal security thanks to the multi-point locking system. The tight seal achieved when closed makes them highly effective for thermal and sound insulation.",
      specs: [
        "uPVC 7-Chamber Profile",
        "Multi-Point Security Lock",
        "90-Degree Opening",
        "Maximum Ventilation",
        "Energy-Efficient Design",
      ],
    },
    3: {
      name: "Everlast Fixed Windows",
      image: "/images/fixed.jpg",
      description:
        "Designed purely for maximum light transmission and architectural impact. Since these windows do not open, they offer unmatched security, thermal performance, and absolute air/water tightness. Perfect for high walls or hard-to-reach areas.",
      specs: [
        "Absolute Air and Water Tightness",
        "Unrivaled Security",
        "Maximal Light Intake",
        "Low Maintenance",
        "Custom Shapes Available",
      ],
    },
    4: {
      name: "Everlast Asymmetrical Windows",
      image: "/images/asymm.jpg",
      description:
        "We custom-build unique shapes and sizes to meet specific architectural demands. Our asymmetrical designs ensure that even the most complex openings receive the perfect uPVC solution, combining unique aesthetics with Everlast's high performance.",
      specs: [
        "Fully Customizable Shape/Size",
        "Steel Reinforcement",
        "Energy Efficiency Guaranteed",
        "Made-to-Order",
        "Available in various colours",
      ],
    },
  },
  doors: {
    1: {
      name: "Everlast Sliding Doors",
      image: "/images/sliding-door.jpg",
      description:
        "Our Sliding Doors seamlessly connect your indoor and outdoor living spaces. They feature large glass panels for maximum view, secure multi-lock mechanisms, and a smooth glide system, making them both beautiful and highly functional.",
      specs: [
        "Safety Toughened Glass",
        "Heavy-Duty Rail System",
        "Secure Multi-Lock",
        "Low Threshold option",
        "Excellent Weather Resistance",
      ],
    },
    2: {
      name: "Everlast Tilt & Slide Doors",
      image: "/images/tilt-and-slide-door.jpg",
      description:
        "The Tilt & Slide system offers the best of both worlds: a 'tilt' function for secure, all-weather ventilation, and a 'slide' function for wide access. This high-performance door is perfect for balconies and patios requiring versatile climate control.",
      specs: [
        "Dual Functionality (Tilt/Slide)",
        "uPVC 7-Chamber Profile",
        "Optimal Ventilation",
        "Superior Sound Insulation",
        "High Security Mechanism",
      ],
    },
    3: {
      name: "Everlast Turn Doors",
      image: "/images/turn-door.jpg",
      description:
        "Robust and highly elegant, our Turn Doors function like traditional hinged doors, providing superior security and unmatched thermal performance. Ideal for main entrances or balcony access, they ensure a perfect seal and long-lasting operation.",
      specs: [
        "High Security Mechanism",
        "Excellent Thermal Insulation",
        "Durable uPVC Hinges",
        "Main Entrance Compatible",
        "Reinforced Steel Frame",
      ],
    },
  },
};

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();

  // ✅ Protection : éviter erreur "params undefined"
  const category = params?.category;
  const id = params?.id;

  // Vérification produit
  const product = PRODUCTS_DB[category]?.[id];

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-10">
        <h1 className="text-4xl font-titre font-bold text-red-700 mb-4">
          404 - Product Not Found
        </h1>
        <p className="text-xl text-gray-700">
          The product for category '{category}' and ID '{id}' could not be found.
          Please check the URL.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 text-blue-700 hover:underline text-lg"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 md:pt-10 md:pb-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <Link
          href="/#products"
          className="block text-lg font-semibold text-gray-600 hover:text-red-700 transition duration-300 mb-4 md:mb-8"
        >
          <svg
            className="w-5 h-5 mr-2 inline-block align-text-bottom"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Product Catalog
        </Link>

        <h1 className="font-titre text-5xl md:text-6xl font-extrabold text-blue-900 mb-12 text-center">
          {product.name}
        </h1>

        <div className="mb-12 rounded-xl shadow-2xl overflow-hidden border-8 border-gray-100">
          <Image
            src={product.image}
            alt={`Photo of ${product.name}`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-titre text-4xl font-bold text-red-700 mb-6">
              Detailed Description
            </h2>
            <p className="font-corps text-2xl leading-relaxed text-gray-700">
              {product.description}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-red-700 text-white font-bold text-xl rounded-lg transition duration-300 hover:bg-red-800"
            >
              Request a Custom Quote →
            </a>
          </div>

          <div className="lg:col-span-1 bg-blue-50 p-8 rounded-xl shadow-lg">
            <h2 className="font-titre text-3xl font-bold text-blue-900 mb-6 border-b pb-3 border-blue-200">
              Key Specifications
            </h2>
            <ul className="space-y-4 font-corps text-xl text-gray-800">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
