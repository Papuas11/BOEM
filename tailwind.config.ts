import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c21f2f',
          dark: '#151618',
          mist: '#f5f6f8'
        }
      },
      boxShadow: {
        premium: '0 20px 40px -28px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
