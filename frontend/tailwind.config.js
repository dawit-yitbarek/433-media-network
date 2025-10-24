/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        button: '#0D1B2A',
        page: '#0D1B2A',
      },
    },
  },
  plugins: [],
}
