import { nextui } from "@nextui-org/react";
import { px } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: "#FFFFFF",
          h1: {
            fontSize: "40px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "15px"
          },
          h2: {
            fontSize: "35px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "24px"
          },
          h3: {
            fontSize: "30px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "24px"
          },
          h4: {
            fontSize: "25px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "24px"
          },
          h5: {
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "24px"
          },
          h6: {
            fontSize: "15px",
            fontWeight: 700,
            marginTop: "24px",
            marginBottom: "24px"
          },
          pre: {
            borderRadius: ".375rem",
            backgroundColor: "#1f2937",
            overflowX: "auto",
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "10px",
            marginTop: "10px",
            whiteSpace: "pre",
            overscrollBehavior: "auto"
          },
          code: {
            color: "#FFFFFF",
            backgroundColor: "#212830",
            fontFamily: "monospace",
            fontSize: "17px",
            paddingLeft: "3px",
            paddingRight: "3px",
            paddingTop: "3px",
            paddingBottom: "3px",
            borderRadius: "5px",
          },
          blockquote: {
            padding: "0.5em 1em",
            color: "#F0F3F6",
            borderLeft: ".25em solid #7a828e",
            marginTop: "15px",
            marginBottom: "15px",
            borderTopLeftRadius: "4.3px",
            borderBottomLeftRadius: "4.3px",
            fontStyle: "italic"
          },
          ul: {
            listStyle: "disc inside",
            paddingLeft: "12px"
          },
          li: {
            marginTop: "10px",
            marginBottom: "10px",
            display: "list-item",
          },
          p: {
            lineHeight: "25px",
            fontSize: "16px",
            fontWeight: 400,
            color: "#F0F3F6",
          },
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkmode: "class",
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
