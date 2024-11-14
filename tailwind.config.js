/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#010103',
        'main-yellow': '#e9e521',
        'main-white': '#c4c8ce'
      },
      fontFamily: {
        'nunito-500': ['nunito-medium'],
        'montserrat-300': ['montserrat-light']
      }
    },
  },
  plugins: [],
}
