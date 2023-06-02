// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Welcome",
            meta: [
                {
                    name: "description",
                    content: "Personal website of Kevia Cloud",
                },
            ],
            link: [{ rel: "canonical", href: "https://www.kevia.me" }],
        },
    },
    googleFonts: {
        families: {
            Poppins: true,
            "Saira+Stencil+One": true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    nitro: {
        preset: "netlify",
    },
});
