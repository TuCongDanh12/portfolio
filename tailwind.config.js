/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primaryColor: '#6C5CE7',
      white: '#FFFFFF',
      black: '#000000',
      red: 'hsl(0, 100%, 50%)',
      transparency: 'transparent',

      // Light mode colors
      PrimaryColorHex: '#6C5CE7',
      titleColor: '#1E1E2F', // Tím đen nhẹ
      textColor: '#4B4B5E', // Tím xám
      bgColor: '#F6F5FB',
      bgColorAlt: '#FFFFFF',
      containerColor: '#FFFFFF',
      borderColor: '#CCCCCC',

      // Dark mode colors
      titleColorDark: '#FFFFFF',
      textColorDark: '#CCCCFF',
      bgColorDark: '#0D0D0D',
      bgColorAltDark: '#1A1A2E',
      containerColorDark: '#11101A',
      borderColorDark: '#444466',
      primaryColorDark: '#6C5CE7',
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      biggest: '90px',
      h1Size: '44px',
      h2Size: '30px',
      h3Size: '28px',
      h4Size: '24px',
      h5Size: '22px',
      largest: '21px',
      larger: '20px',
      large: '18px',
      normal: '16px',
      small: '15px',
      smaller: '14px',
      tiny: '13px',
    },
    extend: {
      dropShadow: {
        textShadow: [
          '2px 2px hsl(0, 0% ,0%)',
          '-2px 2px hsl(0, 0% ,0%)',
          '2px -2px hsl(0, 0% ,0%)',
          '-2px -2px hsl(0, 0% ,0%)',
          '5px 5px rgba(0,0,0,0.2)',
        ],
      },
      screens: {
        '3xl': '1700px',
        '4xl': '1800px',
        '5xl': '1950px',
      },
    },
    textFillColor: (theme) => theme('borderColor'),
    textStrokeColor: (theme) => theme('borderColor'),
    textStrokeWidth: (theme) => theme('borderWidth'),
    paintOrder: {
      fsm: { paintOrder: 'fill stroke markers' },
      fms: { paintOrder: 'fill markers stroke' },
      sfm: { paintOrder: 'stroke fill markers' },
      smf: { paintOrder: 'stroke markers fill' },
      mfs: { paintOrder: 'markers fill stroke' },
      msf: { paintOrder: 'markers stroke fill' },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-text-fill-stroke')(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(
            theme('bgGradientDeg', {}),
            {
              0: '0deg',
              10: '10deg',
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              135: '135deg',
              155: '155deg',
              180: '180deg',
            }
          ),
        }
      );
    }),
  ],
};
