// tailwind.config.js (VERSION FINALE CORRIGÉE)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 1. Scanner le dossier SRC de manière récursive
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    
    // 2. Scanner le dossier components à la racine
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: { 
        'bleu-fonce': '#0A1931',
        'rouge-action': '#D93025',
        'bleu-vif': '#1A73E8',
      },
      fontFamily: {
        'titre': ['var(--font-montserrat)', 'sans-serif'],
        'corps': ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}