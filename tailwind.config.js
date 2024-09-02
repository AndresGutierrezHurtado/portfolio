/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                claro: {
                    "primary": "#0284c7",
                    "info": "#e0e0e0",
                    "base-100": "#ffffff",
                },
            },
            "light",
            "dark",
        ],
    },
};
