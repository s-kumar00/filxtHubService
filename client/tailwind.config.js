/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}","node_modules/flowbite-react/lib/esm/**/*.js",],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'homeBg': "url('https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg')", // Adjust the path as necessary
      },
      backgroundClip: {
        text: 'text',
      },
      colors: {
        primary: "#f0f2f5",
        secondary: "#ff813f",
        tertiary: "#222222",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      keyframes: {
        slideLogin: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideProfile: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
      },
      animation: {
        slideLogin: 'slideLogin 0.5s ease-out forwards',
        slideProfile: 'slideProfile 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Opera */
          },
        },
      });
    },
  ],
};
