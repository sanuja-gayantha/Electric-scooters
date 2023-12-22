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
        'ured':'#dc3545'
      },
    },
  },
  plugins: [],
}