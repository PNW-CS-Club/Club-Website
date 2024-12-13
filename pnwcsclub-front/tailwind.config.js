/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    colors: {
      'gold': '#E6B10E',
      'hover-gold': '#C49917',
      'dark-green': '#1a4c3d',
      'slate-gray': '#718c8c',
      'french-gray': '#c7ccdb',
      'alice-blue': '#e1e5ee',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      body2: ['Playfair Display', 'serif'],
    }
  },
  },
  plugins: [],
}

