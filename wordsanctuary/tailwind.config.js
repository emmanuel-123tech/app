/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple': {
          600: '#8A2BE2',
          700: '#7209B7', 
          800: '#5B0E91',
          900: '#4A0D77'
        },
        'blue': {
          600: '#3B82F6',
          700: '#2563EB',
          800: '#1D4ED8',
          900: '#1E40AF'
        },
        'green': {
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        'red': {
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D'
        },
        'orange': {
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Georgia', 'ui-serif', 'serif']
      },
      boxShadow: {
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  safelist: [
    'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900',
    'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',
    'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900',
    'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900',
    'bg-orange-600', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900',
    'text-purple-600', 'text-purple-700',
    'text-blue-600', 'text-blue-700',
    'text-green-600', 'text-green-700',
    'text-red-600', 'text-red-700',
    'text-orange-600', 'text-orange-700',
    'bg-gradient-to-b',
    'from-purple-600', 'to-purple-900',
    'from-blue-600', 'to-blue-900',
    'from-green-600', 'to-green-900',
    'from-red-600', 'to-red-900',
    'from-orange-600', 'to-orange-900',
  ],
  plugins: [],
};