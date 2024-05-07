/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}", // Adapt this line based on the files you want to scan for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['custom', 'Arial']
      }
    },
  },
  plugins: [],
}

