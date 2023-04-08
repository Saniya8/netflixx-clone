/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'back': '#00000066',
        'whitye' : '#ffffffb3',
        'greyy': 'rgb(51,51,51)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
