/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#070909',
        'background': '#f8fcfc',
        'primary': '#0D9488',
        'secondary': '#14B8A6',
        'dark': '#0d1117',
        'dark-secondary': '#29323b',
        'dark-accent': '#4e6071',
       },      
    },
  },
  plugins: [],
}

