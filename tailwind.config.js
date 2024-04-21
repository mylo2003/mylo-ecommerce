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
        'primary': '#44c4ca',
        'secondary': '#81e9ef',
        'accent': '#4ef4fd',
       },
            
    },
  },
  plugins: [],
}

