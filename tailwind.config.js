/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF2F4',
          100: '#F8E8EB',
          200: '#F0C7CF',
          300: '#E49BAA',
          400: '#D4687F',
          500: '#C03E5C',
          600: '#A3233E',
          700: '#8A1C32',
          800: '#701428',
          900: '#540D1C',
          950: '#3B0913',
        },
        gold: {
          50: '#FFFDF2',
          100: '#FBF4DC',
          200: '#F5E6B1',
          300: '#E5C365',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A67C1E',
          700: '#835E14',
          800: '#684814',
          900: '#553B15',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EAE1D2',
          400: '#DACDB8',
          500: '#C6B59D',
        },
        charcoal: {
          900: '#1A1818',
          800: '#2D2626',
          700: '#4A4242',
          600: '#6E6464',
          500: '#8C8282',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C365 0%, #C5A059 50%, #9E7B2F 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #701428 0%, #540D1C 50%, #3B0913 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFFDF9 0%, #FAF7F2 100%)',
        'subtle-pattern': 'radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.05) 0%, transparent 70%)',
      },
      boxShadow: {
        'maroon-glow': '0 10px 30px -10px rgba(112, 20, 40, 0.25)',
        'gold-glow': '0 10px 25px -5px rgba(212, 175, 55, 0.3)',
        'soft-card': '0 10px 40px -10px rgba(26, 24, 24, 0.05)',
        'elevated': '0 20px 50px -15px rgba(84, 13, 28, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
