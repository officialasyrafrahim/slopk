import lynxPreset from '@lynx-js/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  presets: [lynxPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    colors: {
      
    },
  },
};
