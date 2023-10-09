/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(90deg, #353763, #b8aa84, #716170, #5b6669)',
        'hero-pattern': "url('/images/background.jpg')",
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 5s ease infinite',
      },
      gradientColorStops: {
        'custom-start': '#ff6f61',
        'custom-end': '#ff6f61',
      },
      // animation: {
      //   'gradient-move': 'gradient-move 3s linear infinite',
      // },
      // keyframes: {
      //   'gradient-move': {
      //     '0%': { backgroundPosition: '0% 0%' },
      //     '100%': { backgroundPosition: '100% 100%' },
      //   },
      // },
    },
  },
  plugins: [],
}

