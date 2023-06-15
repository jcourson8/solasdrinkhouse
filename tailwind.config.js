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
      fontFamily: {
        'plex-mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}