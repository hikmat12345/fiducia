/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#0F0140',
        'bgwhite' : '#F8F9FF',
        'cyan' : '#00f2e2',
        'red' : '#FF5D7C',
        'gray' : '#EEF5FF',
        'lightgray' : '#BBC7DA',
        'darkgray' : '#7F8FA4',
        'theme-primary': '#0F0140',
        current: 'currentColor',
    },
   },
   plugins: [],
 }
}