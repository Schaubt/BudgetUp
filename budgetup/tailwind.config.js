const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        lightBlue:'#5AC2D9',
        white: '#FFFFFF',
        darkmint: '#5a855f',
        midmint: '#91b38e'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}

