// tailwind.config.js (CONTENU FINAL ET COMPLET)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'upvc-pattern': "url('images/upvc-pattern.svg')",
      // },
      fontFamily: {
        'titre': ['var(--font-montserrat)', 'sans-serif'],
        'corps': ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

