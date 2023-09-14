/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blueColor: '#3423a6',
                greyIsh: '#f1f4f8',
                cardShadow: '#f7f8f9',
                textColor: '#252b36',
            },
        },
    },
    plugins: [],
};
