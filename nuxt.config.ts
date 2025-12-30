// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/turnstile"],
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
});
