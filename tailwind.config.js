/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:
      {
        'white': '#FFFFFF',
        'office_green':
        {
          DEFAULT: '#157f1f',
          100: '#041906',
          200: '#08330d',
          300: '#0c4c13',
          400: '#116619',
          500: '#157f1f',
          600: '#1fbd2f',
          700: '#44e154',
          800: '#82eb8d',
          900: '#c1f5c6',
        },
        'emerald':
        {
          DEFAULT: '#4cb963',
          100: '#0f2514',
          200: '#1d4b27',
          300: '#2c703b',
          400: '#3a964e',
          500: '#4cb963',
          600: '#6fc782',
          700: '#93d5a1',
          800: '#b7e3c1',
          900: '#dbf1e0',
        },
        'tiffany_blue':
        {
          DEFAULT: '#a0eade',
          100: '#0e4038',
          200: '#1c8170',
          300: '#2ac1a8',
          400: '#5edcc7',
          500: '#a0eade',
          600: '#b2eee4',
          700: '#c5f2eb',
          800: '#d9f7f2',
          900: '#ecfbf8',
        },
        'paynes_gray':
        {
          DEFAULT: '#5c6784',
          100: '#12151a',
          200: '#252935',
          300: '#373e4f',
          400: '#4a526a',
          500: '#5c6784',
          600: '#7883a1',
          700: '#9aa2b9',
          800: '#bcc1d0',
          900: '#dde0e8',
        },
        'oxford_blue':
        {
          DEFAULT: '#1d263b',
          100: '#06070c',
          200: '#0b0f17',
          300: '#111623',
          400: '#171e2e',
          500: '#1d263b',
          600: '#394a73',
          700: '#556fab',
          800: '#8e9fc7',
          900: '#c6cfe3',
        },
        'another_blue':
        {
          DEFAULT: '#150734',
          100: '#0F2557',
          200: '#28559A',
          300: '#3778C2',
          400: '#4B9FE1',
          500: '#63BCE5',
          600: '#7ED5EA',
        },
      },
    },
  },
  plugins: [],
}

