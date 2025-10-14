// src/app/layout.js (FICHIER CORRIGÉ - Injection des variables de police)
import { Montserrat, Roboto } from 'next/font/google'; 
import "./globals.css";

// 1. Définition des polices
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Variable pour les titres
});

const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto', // Variable pour le corps
});

export const metadata = {
  title: "Everlast Windows & Doors | Interplast Quality",
  description: "The right choice for uPVC windows and doors. Beauty, Durability, Safety.",
};

export default function RootLayout({ children }) {
  return (
    // AJOUT des classes de variable de police à la balise <html>
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={`font-corps`}>
        {children}
      </body>
    </html>
  );
}
