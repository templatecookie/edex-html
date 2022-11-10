/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./**/*.{html,js}",
        "index.html"
    ],
    theme: {
        extend: {},
       
        fontFamily: {
            display: ["'Public Sans', sans-serif"],
        },
        container: {
            center: true,
            padding: '.0rem',
            // padding: '.75rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '920px',
                xl: '980px',
                '2xl': '1320px',
            },
        },
        colors: {
            current: 'currentColor',
            'primary-500':'#20B486',
            'primary-900':'#06241B',
            'secondary-50': '#FFFAF5',
            'gray-700': '#363A3D',
            'gray-600': '#52565C',
            'gray-500': '#6D737A',
            'gray-black': '#1B1D1F',
            'gray-50': '#E7E9EB',
            'gray-white': '#FFFFFF',
        },
    },
    plugins: [],
}
