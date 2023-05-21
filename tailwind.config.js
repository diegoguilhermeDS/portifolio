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
          600: "#939393",
          700: "#212121",
          modal: "#151515D1",
        },
      },
      boxShadow: {
        neon: "0px 0px 10px #6C1BED, 0px 0px 40px #6C1BED, 0px 0px 80px #6C1BED",
        card: "0px 0px 30px rgba(102, 96, 96, 0.25);",
        input:
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;",
        button: "0px 0px 27px #6C1BED;",
        selector: "inset -1px -2px 2px -3px #FFFFFF",
        html: "0px 0px 10px #151515, 0px 0px 40px #FC490B, 0px 0px 80px #FC490B",
        css: "0px 0px 10px #151515, 0px 0px 40px #2196F3, 0px 0px 80px #2196F3",
        js: "0px 0px 10px #151515, 0px 0px 40px #F7DF1E, 0px 0px 80px #F7DF1E",
        ts: "0px 0px 10px #151515, 0px 0px 40px #3178C6, 0px 0px 80px #3178C6",
        react:
          "0px 0px 10px #151515, 0px 0px 40px #00D8FF, 0px 0px 80px #00D8FF",
        next: "0px 0px 10px #151515, 0px 0px 40px #FFFFFF, 0px 0px 80px #FFFFFF",
        tw: "0px 0px 10px #151515, 0px 0px 40px #44A8B3, 0px 0px 80px #44A8B3",
        sc: "0px 0px 10px #151515, 0px 0px 40px #E09494, 0px 0px 80px #E09494",
        node: "0px 0px 10px #151515, 0px 0px 40px #689F63, 0px 0px 80px #689F63",
        ex: "0px 0px 10px #151515, 0px 0px 40px #848484, 0px 0px 80px #848484",
        post: "0px 0px 10px #151515, 0px 0px 40px #336791, 0px 0px 80px #336791",
        py: "0px 0px 10px #151515, 0px 0px 40px #FDD434, 0px 0px 80px #2875B5",
        dj: "0px 0px 10px #151515, 0px 0px 40px #113228, 0px 0px 80px #113228",
        github:
          "0px 0px 10px #151515, 0px 0px 40px #D4D4D4, 0px 0px 80px #2E2C2C",
        git: "0px 0px 10px #151515, 0px 0px 40px #EE513B, 0px 0px 80px #EE513B",
        figma:
          "0px 0px 10px #151515, 0px 0px 40px #F94B12,  0px 0px 50px #00BCFF, 0px 0px 70px #00CF7F, 0px 0px 80px #B659FF",
      },
      animation: {
        typewrite: "typewrite 6s steps(27) forwards ",
        cursor:
          "typewrite 6s steps(27) forwards, blink 500ms steps(27) infinite",
        fadeInLeft: "fadeInLeft 2s ease 4s forwards",
        menu: "menuAnimation 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        closeMenu: "closeMenuAnimation 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
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
        menuAnimation: {
          from: {
            left: "-100%",
            opacity: 0
          },
          to: {
            left: "0px",
            opacity: 1,
          },
        },
        closeMenuAnimation: {
          to: {
            left: "-100%",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
