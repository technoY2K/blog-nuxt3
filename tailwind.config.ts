import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.5xl") },
                h2: { fontSize: theme("fontSize.4xl") },
                h3: { fontSize: theme("fontSize.3xl") },
                h4: { fontSize: theme("fontSize.2xl") },
                h5: { fontSize: theme("fontSize.xl") },
                h6: { fontSize: theme("fontSize.lg") },
            });
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "animation-delay": (value) => {
                        return {
                            "animation-delay": value,
                        };
                    },
                },
                {
                    values: theme("animationDelay"),
                }
            );
        }),
    ],
    daisyui: {
        themes: ["black"],
        darkTheme: false,
    },
    theme: {
        extend: {
            aspectRatio: {
                "4/3": "4/3",
            },
            fontFamily: {
                sans: ["Righteous", ...defaultTheme.fontFamily.sans],
                stencil: [
                    "Saira Stencil One",
                    ...defaultTheme.fontFamily.serif,
                ],
            },
        },
    },
};
