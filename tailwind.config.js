const { Montserrat } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "back-color": "#ffff",
        "search-color": "#F0F2F4",
        "button-color": "#33A833",
        "link-color": " var(--blue-gray-700, #455A64);",
        "back-form": "#F0F5FA",
      },
      spacing: {
        "search-input": "26.125rem",
        479: "29rem",
        "product-w": "80.25rem",
        "product-h": "47.93rem",
        "upload-w": "32.813rem",
        "upload-h": "21.938rem",
        "description-w": "30rem",
        "description-h": "21rem",
        "seller-title": "20.563rem",
        "supload-w": "21.875rem",
        "supload-h": "16.125rem",
        "save-button": "65rem",
        "detail-w": "25rem",
        "deatil-h": "26rem",
      },
      dropShadow: {
        navbar: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
      },
      fontFamily: {
        "Sub-title": [Montserrat],
      },
    },
  },
  plugins: [],
};
