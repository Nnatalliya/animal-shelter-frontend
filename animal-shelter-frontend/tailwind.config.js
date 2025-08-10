/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // тук Tailwind ще търси класовете
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
