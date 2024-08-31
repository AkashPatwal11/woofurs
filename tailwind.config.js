/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkblue: {
          500: '#0A1128',
        },
        lightblue: {
          400: '#6BAED6',
        },
        orange: {
          500: '#FF6700',
        },
      },
    },
  },  
  plugins: [],
}


