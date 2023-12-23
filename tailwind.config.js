/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat Alternates"', ...defaultTheme.fontFamily.sans],
        'rethink': ['"Rethink Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#54595F',
        'primary-bg':'#1e1e27',
        'secondery':'#dc3545',
        'secondery-2':'#f4fafc',
        'hero-bg':'#eaf1f3',

        
      },
      backgroundImage:{
        'scooter-img': 'url("https://i.ibb.co/Kb7yj6N/scooter-02.png")',
        'accessories-img': 'url("https://i.ibb.co/HD9xXDz/accessories-01.png")',
      }
    },
  },
  plugins: [],
}