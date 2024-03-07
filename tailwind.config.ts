import type { Config } from "tailwindcss";
const { violet, blackA, mauve, green } = require("@radix-ui/colors");

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        // container: {
        //   center: true,
        //   padding: "2rem",
        //   screens: {
        //     "2xl": "1400px",
        //   },
        // },
        extend: {
            screens: {
                medium: "1245px",
            },
            colors: {
                background: "#171717",
                ...mauve,
                ...violet,
                ...green,
                ...blackA,
            },
            keyframes: {
                overlayShow: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                contentShow: {
                    from: {
                        opacity: "0",
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                },
            },
            animation: {
                overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
} satisfies Config;

export default config;
