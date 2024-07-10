/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        monsterrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'vln-red': '#BC1A45',
        'vln-melon': '#FFD369',
        'vln-grey': '#DDDDDD',
        'vln-white': '#F7F7F7',
      }
    },
  },
  plugins: [],
}

