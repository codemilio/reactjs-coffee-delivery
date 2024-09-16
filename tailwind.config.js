/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Baloo 2', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      },
      colors: {
        primary: {
          900: '#C47F17',
          500: '#F1E9C9',
          100: '#DBAC2C'
        },
        secondary: {
          900: '#4B2995',
          500: '#8047F8',
          100: '#EBE5F9'
        },
        base: {
          100: '#FAFAFA',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#272221',
        }
      }
    },
  },
  plugins: [],
}