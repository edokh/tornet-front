/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom-dark': '0 12px 11px 0 rgba(0, 0, 0, 0.5843)',
      },
    },
  },
  plugins: [],
}