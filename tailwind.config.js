/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B4A",
          pink: "#E11D48",
          violet: "#9333EA",
          dark: "#0F172A",
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B4A 0%, #E11D48 50%, #9333EA 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #FF5722 0%, #D81B60 50%, #7E22CE 100%)',
      }
    },
  },
  plugins: [],
};
