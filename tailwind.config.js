/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out forwards',
          'slide-up': 'slideUp 0.5s ease-out forwards',
        }
      },
    },
    plugins: [],
  }