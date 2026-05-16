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
          50: '#f4fbe9',
          100: '#e5f6cd',
          200: '#cbedaa',
          300: '#aae17e',
          400: '#8bd258',
          500: '#7cc242', // Logo Green
          600: '#5ca22d',
          700: '#467d24',
          800: '#386320',
          900: '#30521e',
          950: '#182d0d',
        },
        navy: {
          50: '#F2F4F7', // Light Grey
          100: '#e6e9f0',
          200: '#cdd3e1',
          300: '#b4bdd2',
          400: '#7D8794', // Steel Grey
          500: '#64728b',
          600: '#4b5569',
          700: '#323946',
          800: '#191c23',
          900: '#0B1D36', // Deep Navy
          950: '#050e1b',
        },
        accent: {
          400: '#8ed155',
          500: '#7CC242', // Energy Green
          600: '#6ab031',
        },
        teal: {
          500: '#0096A6', // Industrial Teal
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
