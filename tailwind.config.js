/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          header: "rgba(20, 10, 35, 0.25)",
          100: "#6C1BED",
          200: "#A9A9A9",
          300: "#151515",
          400: "#777777",
          500: "#0F0F0F",
        },
      },
      boxShadow: {
        neon: "0px 0px 10px #6C1BED, 0px 0px 40px #6C1BED, 0px 0px 80px #6C1BED",
        card: "0px 0px 30px rgba(102, 96, 96, 0.25);",
        input: "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;",
        button: "0px 0px 27px #6C1BED;",
      },
      animation: {
        typewrite: "typewrite 6s steps(27) forwards ",
        cursor:
          "typewrite 6s steps(27) forwards, blink 500ms steps(27) infinite",
        fadeInLeft: "fadeInLeft 2s ease 4s forwards",
      },
      keyframes: {
        typewrite: {
          to: {
            left: "102%",
          },
        },
        blink: {
          to: {
            opacity: 0,
          },
        },
        fadeInLeft: {
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
