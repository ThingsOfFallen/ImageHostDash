/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./resources/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                md: ['1.05rem', '1.625rem']
            }
        },
    },
    plugins: [],
}
