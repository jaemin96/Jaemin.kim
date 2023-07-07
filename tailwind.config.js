/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px' },
    },
    extend: {},
  },
  plugins: [],
};
