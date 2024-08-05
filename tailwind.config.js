/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sgreen: '#1DB954',
        'spotify-gray-800': '#121212',
        'spotify-gray-500': '#202020',
        'spotify-gray-400': '#656565',
        'spotify-gray-300': '#b3b3b3',
        'spotify-gray-200': '#F9F9F9',
      }
    },
  },
  plugins: [],
}

