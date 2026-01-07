// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/turnstile", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Cormorant Garamond",
        provider: "google",
        weights: [400, 600],
        styles: ["normal", "italic"],
      },
      {
        name: "Roboto",
        provider: "google",
        weights: [300, 400, 500, 700],
        styles: ["normal", "italic"],
      },
    ],
  },
  runtimeConfig: {
    mailgunApi: process.env.MAILGUN_API_KEY || "",
    mailgunDomain: process.env.MAILGUN_DOMAIN || "",
    nuxtTurnstileSecretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || "",
    contactNotificationEmail: process.env.CONTACT_NOTIFICATION_EMAIL || "",
    contactFromEmail: process.env.CONTACT_FROM_EMAIL || "",
    contactReplyToEmail: process.env.CONTACT_REPLY_TO_EMAIL || "",
    public: {
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "",
      },
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ||
        "https://www.vicksburgfamilydentistry.com",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_functions.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
