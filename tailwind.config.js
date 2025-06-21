/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00127a', // Dark Blue
        'secondary': '#ffffff', // White
        'accent-gray': {
          '100': '#f5f5f7', // Light gray similar to Apple's backgrounds
          '200': '#e8e8ed',
          '300': '#d2d2d7',
          '400': '#bfbfc7',
          '500': '#8e8e93', // Mid gray for text or subtle elements
          '600': '#636366',
          '700': '#4a4a4f',
          '800': '#3a3a3c',
          '900': '#1d1d1f', // Dark gray similar to Apple's dark themes/text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as the primary sans-serif font
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
