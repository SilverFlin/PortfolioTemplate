/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        '000': '#E0FCFF',
        100: '#BEF8FD',
        200: '#87EAF2',
        300: '#54D1DB',
        400: '#38BEC9',
        500: '#2CB1BC',
        600: '#14919B',
        700: '#0E7C86',
        800: '#0A6C74',
        900: '#044E54'
      },
      secondary: {
        '000': '#FAF9F7',
        100: '#E8E6E1',
        200: '#D3CEC4',
        300: '#B8B2A7',
        400: '#A39E93',
        500: '#857F72',
        600: '#625D52',
        700: '#504A40',
        800: '#423D33',
        900: '#27241D'
      },
      cool: {
        black: '#333333'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
