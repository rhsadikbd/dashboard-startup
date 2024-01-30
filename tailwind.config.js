/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'clr-primary': '#026cd1',
        'clr-ice': '#fbfcfe',
        'clr-blue': '#026cd1',
        'clr-blue-light': '#e2edfa',
        'clr-blue-dark': '#',
        'clr-black': '#000000',
        'clr-white': '#ffffff',
        'clr-border': '#e2edfa',
        'clr-red': '#df2a43',
        'clr-red-light': '#f5bec6',
        'clr-text': '#36454f',
        'clr-icon': '#264667',
      }
    },
  },
  plugins: [],
}