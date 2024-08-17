/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       fontFamily:{
          Oswald: ['Oswald','sans-serif'],
          Lato:['Lato','sans-serif'],
       },

      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          80:'#3a3a3a',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        graypurple: {
          10: '#f3f1f3',
          20: '#dad8da',
          30: '#e1dfe2',
        },
        lightpurple: {
          10: '#f5e7ff',
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/newton.jpg')",
        'bg-img-2': "url('/galaxy.png')",
        'bg-img-3': "url('/plane.png')",
        'bg-img-4': "url('/magnet.png')",
        'bg-img-5': "url('/calc.png')",
        'bg-img-6': "url('/linear.png')",
        'glowborder': "url('/glowBorder.svg')",
        'feature-bg': "url('/feature-bg.png')",
        'pattern': "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};