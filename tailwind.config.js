/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-custom': '#F54748',
        'lavenderblush-custom': '#FFF0F1',
      },
      textColor: {
        'red-custom': '#F54748',
        'grey-custom': '#8A8787',
        'dark-custom': '#1E1E1E',
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
      rotate: {
        '45': '45deg',
      },
      height: {
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        //add as many as you need
      },
    },
  },
  plugins: [],
}

