import type { Config } from "tailwindcss";
const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0A2463",
                    50: "#E8EDF5",
                    100: "#C5D1E8",
                    200: "#9EB3D9",
                    300: "#7695CA",
                    400: "#587DBF",
                    500: "#3E65B4",
                    600: "#2D4F9E",
                    700: "#1E3A82",
                    800: "#0A2463",
                    900: "#061847",
                },
                secondary: {
                    DEFAULT: "#3E92CC",
                    50: "#EBF4FA",
                    100: "#CDE5F3",
                    200: "#A9D3EA",
                    300: "#7BBFE0",
                    400: "#5AADD8",
                    500: "#3E92CC",
                    600: "#2E78B0",
                    700: "#1F5F94",
                    800: "#144778",
                    900: "#0C3058",
                },
                accent: {
                    DEFAULT: "#F4A261",
                    50: "#FEF6EE",
                    100: "#FDE8D3",
                    200: "#FCD6B1",
                    300: "#FAC28B",
                    400: "#F8B076",
                    500: "#F4A261",
                    600: "#E08A47",
                    700: "#C97334",
                    800: "#A85E27",
                    900: "#854B1F",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Orbitron", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
