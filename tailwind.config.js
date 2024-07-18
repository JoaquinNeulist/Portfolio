/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./index.html', flowbite.content()],
  theme: { 
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

