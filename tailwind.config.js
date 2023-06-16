// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         lightTan: '#F4E1D2', // replace this with the hex code of your desired color
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightTan: '#fffaf5',
        dark: '#292929' // replace this with the hex code of your desired color
      },
      transitionDuration: {
        '4000': '4000ms',
        '5000': '5000ms',
        // Add more values as needed
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        plex: ['var(--font-plex)'],
      },
    },
  },
  plugins: [],
}