/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        current: 'currentColor',
        red: '#FC4747',
        'dark-blue': '#10141E',
        'greyish-blue': '#5A698F',
        'semi-dark-blue': '#161D2F',
        white: '#FFFFFF',
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        55: '13.75rem',
        70: '17.5rem',
        100: '25rem',
        107: '26.75rem',
        115: '28.75rem',
        118: '29.5rem',
        120: '30rem',
        123: '30.75rem',
        129: '32.25rem',
        156: '39rem',
        160: '40rem',
        164: '41rem',
        168: '42rem',
        172: '43rem',
        176: '44rem',
        180: '45rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        310: '77.5rem',
        322: '80.5rem',
        336: '84rem',
        338: '84.5rem',
        340: '85rem',
        360: '90rem',
        400: '100rem',
        480: '120rem',
        600: '150rem',
        626: '156.5rem',
      },
      dropShadow: {
        black: '0 8px 0 rgba(0, 0, 0, 0.25)',
        yellow: '0 8px 0 rgba(204, 139, 19, 1)',
        'yellow-smaller': '0 4px 0 rgba(204, 139, 19, 1)',
        blue: '0 8px 0 rgba(17, 140, 135, 1)',
        silver: '0 4px 0 rgba(107, 137, 151, 1)',
      },
      scale: {
        25: '0.25',
        30: '0.30',
        70: '0.70',
        80: '0.80',
      },
    },
  },
  plugins: [],
};
