/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: '#ffffff',
                primary: '#00a8ff',
                secondary: '#4cd137',
                text: '#2f3640'
            }
        },
    },
    plugins: [],
}
