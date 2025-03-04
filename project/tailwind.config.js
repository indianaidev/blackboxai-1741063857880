/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E1E2E',
          200: '#181825',
          300: '#11111B',
        },
        accent: {
          primary: '#7C3AED',
          secondary: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [],
};