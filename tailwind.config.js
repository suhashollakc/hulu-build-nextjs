module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#292C33',
      'secondary': '#6B7790',
      'banner': '#F33354',
      'nav': '#FFFFFF'
    },
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'white': theme('colors.white'),
    }),
    stroke: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'white': theme('colors.white'),
    }),

    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      
      screens:{
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
