// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
