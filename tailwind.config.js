/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'monoton': ['Monoton', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}