/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      space: {
        580: '580px',
        380: '380px',
      },
      colors: {
        red: '#f02849'
      }
    },
  },
  plugins: [],
}

