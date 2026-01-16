// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/turnstile", "@nuxt/fonts"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en", // This sets <html lang="en">
      },
      title:
        "Vicksburg Family Dentistry | Quality Dental Care in Vicksburg, MI",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Vicksburg Family Dentistry - Comprehensive dental care including cleanings, fillings, crowns, bridges, implants and more in Vicksburg, MI",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Vicksburg Family Dentistry",
        },
        {
          name: "theme-color",
          content: "#006db0",
        },
        // Site-wide Open Graph tags
        {
          property: "og:site_name",
          content: "Vicksburg Family Dentistry",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content:
            "https://www.vicksburgfamilydentistry.com/assets/img/main-office.jpg",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:alt",
          content: "Vicksburg Family Dentistry office",
        },
        // Twitter Card defaults
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        // SEO meta tags
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Vicksburg Family Dentistry",
        },
        {
          name: "keywords",
          content:
            "dentist, dental care, family dentistry, teeth cleaning, dental implants, crowns, bridges, fillings, Vicksburg Michigan, cosmetic dentistry, oral surgery, dental emergencies",
        },
        // Geographic meta tags
        {
          name: "geo.region",
          content: "US-MI",
        },
        {
          name: "geo.placename",
          content: "Vicksburg, Michigan",
        },
        {
          name: "geo.position",
          content: "42.121768;-85.542446",
        },
        // Business info
        {
          name: "business:contact_data:phone_number",
          content: "269-649-1495",
        },
        {
          name: "business:contact_data:email",
          content: "vicksburgfamilydentistry@gmail.com",
        },
      ],
      link: [
        // Preload critical fonts to reduce FOIT/FOUT
        {
          rel: "preload",
          href:
            "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap",
          as: "style",
        },
        {
          rel: "preload",
          href:
            "https://fonts.gstatic.com/s/cormorantgaramond/v15/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQz_k.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        // Site-wide canonical domain
        {
          rel: "canonical",
          href: "https://www.vicksburgfamilydentistry.com",
        },
      ],
      // Add structured data script globally
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Vicksburg Family Dentistry",
            "description":
              "Comprehensive family dental care providing high-quality treatments including cleanings, fillings, crowns, bridges, implants and cosmetic dentistry in Vicksburg, Michigan",
            "url": "https://www.vicksburgfamilydentistry.com",
            "telephone": "269-649-1495",
            "email": "vicksburgfamilydentistry@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "602 West Prairie Street",
              "addressLocality": "Vicksburg",
              "addressRegion": "MI",
              "postalCode": "49097",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.121768",
              "longitude": "-85.542446",
            },
            "openingHours": [
              "Mo 08:00-17:00",
              "Tu 08:00-17:00",
              "We 08:00-17:00",
              "Th 08:00-17:00",
              "Fr 08:00-14:00",
            ],
            "image": [
              "https://www.vicksburgfamilydentistry.com/assets/img/main-office.jpg",
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dental Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Dental Cleaning and Hygiene",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Restorative Dentistry",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Cosmetic Dentistry",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Dental Crowns and Bridges",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Dental Implants",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Oral Surgery",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Emergency Dental Care",
                  },
                },
              ],
            },
            "physician": [
              {
                "@type": "Person",
                "name": "Dr. Aaron C. Ford",
                "jobTitle": "Dentist",
                "alumniOf": "University of Michigan School of Dentistry",
              },
              {
                "@type": "Person",
                "name": "Dr. Young",
                "jobTitle": "Associate Dentist",
              },
            ],
          }),
        },
      ],
    },
  },
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
  ssr: true, // SSR enabled (still needed for flexibility)
  nitro: {
    preset: "vercel",
    cloudflare: {
      deployConfig: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/"],
    },
  },
  routeRules: {
    "/**": { static: true },
  },
});
