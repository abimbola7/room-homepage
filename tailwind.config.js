/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        //primary
        darkGray : "hsl(0, 0%, 63%)",
        black : "hsl(0, 0%, 0%)",
        white : "hsl(0, 0%, 100%)",
        veryDarkGray : "hsl(0, 0%, 27%)"
      }
    },
    screens: {      
      'xs': '350px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdxl' : '900px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

