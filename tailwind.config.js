/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          header: 'rgba(20, 10, 35, 0.25)',
          100: '#6C1BED',
          200: '#A9A9A9'
          
        }
      },
      boxShadow: {
        'neon': '0px 0px 27px #6C1BED'
      }
    },
  },
  plugins: [],
}
