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
        red: '#f02849',
        purple: '#7167e0',
        purpleDark: '#443e86',
        border: '#dfddf8'
      }
    },
  },
  plugins: [],
}

