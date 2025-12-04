/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      colors: {
        phoneColor1: '#DDCBA9',
        phoneHover1: '#D0B687',
        phoneColor2: '#92BAD4',
        phoneHover2: '#669FC3',
      },
    },
  },
  plugins: [],
}