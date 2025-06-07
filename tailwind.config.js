
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: {
          500: 'hsl(259, 100%, 65%)',
        },
        red: {
          400: 'hsl(0, 100%, 67%)',
        },
        gray: {
          100: 'hsl(0, 0%, 94%)',
          200: 'hsl(0, 0%, 86%)',
          500: 'hsl(0, 1%, 44%)',
        },
      },
    },
  },
  plugins: [],
}