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
      },
      transitionDuration: {
        'standar': '300ms'
      },
      screens: {
        'content': '800px'
      },
      boxShadow: {
        'project': '0 0 4px #e9e521'
      }
    },
  },
  plugins: [],
}
