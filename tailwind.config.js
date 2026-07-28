export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
        },
      },
      boxShadow: {
        soft: '0 12px 35px -12px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
