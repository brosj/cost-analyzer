/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      "white-10": "#DBE0EF",
      "red-10": "#FA2323",
      "yellow-10": "#F89808",
      "yellow-20": "#FDB022",
      "green-10": "#14BC11",
      "dark-blue-100": "#090D17",
      "dark-blue-200": "#141A2D",
      "dark-blue-300": "#151923",
      "gray-10": "#414B59",
      "gray-20": "#A0A0A0",
      "grey-30": "#ECEEF680",
      "grey-40": "#808491",
    },
  },
  plugins: [],
}

