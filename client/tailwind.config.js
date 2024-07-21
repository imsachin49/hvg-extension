// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow:{
        main:"rgba(7,_65,_210,_0.1)_0px_9px_30px"
      },
      width: {
        'calc-100-minus-5vw': 'calc(100% - 5vw)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}