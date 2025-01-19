const { Scale } = require("chart.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/components/App.js",
    "./src/components/Sidebar.js",
    "./src/components/Income.js",
    "./src/components/Add.js",
    "./src/components/RecentIncome.js",
    "./src/components/RecentExpense.js",
    "./src/components/TotalBalance.js",
    "./src/components/Footer.js",
    "./src/components/InocmeChart.js",
    "./src/components/ExpenseChart.js",
    "./src/components/Expense.js",
    "./src/components/draw.js",
    "./src/components/percentage.js",
    "./src/components/BarChart.js",
    "./src/components/Doughnut.js",
    "./src/components/popup.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
      },
      colors: {
        // Define custom colors with hex values
        customwhite: "#EDEDED", // Example hex color
        customGreen: "#669835",
        customGreenn: "#660035",
        customGray: "#CDCDCD",
        customRed: "#992E24",
      },

      fontFamily: {
        body: ["Figtree"],
      },
    },
  },
  plugins: [],
};
