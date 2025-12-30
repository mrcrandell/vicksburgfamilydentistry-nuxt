# Vicksburg Family Dentistry — Nuxt 4 Website

A modern, professional Nuxt 4 application built for Vicksburg Family Dentistry, a trusted dental practice serving the Vicksburg, Michigan community.
This project demonstrates **production-grade web development**, featuring SSR, SEO optimization, secure contact forms, automated email workflows, and responsive design.

## Core Features at a Glance

### **Frontend**

- **Nuxt 4 + Vue 3 (Composition API + TypeScript)**
- Fully responsive, mobile-first design optimized for dental practice needs
- Advanced SEO: Open Graph, Twitter Cards, Schema.org, canonical URLs
- Professional, accessible UI design with healthcare industry standards
- Progressive enhancement with graceful fallback when JS is disabled

### **Backend**

- **Nitro server routes** for modern API architecture
- Secure contact form processing with validation
- Automated transactional emails powered by Mailgun
- Cloudflare Turnstile integration for bot prevention and security
- Environment-based configuration for flexible deployment

### **Notable Technical Highlights**

- Custom **Vue SFC → HTML email compiler** with CSS inlining
  (consistent design shared between web and email communications)
- Secure form submission with comprehensive validation
- Email-safe font stacks optimized for healthcare communications
- Performance-focused optimizations (lazy-loading, image handling)
- Production-ready email template system

---

## Architecture Overview

```
├── app/
│   ├── components/         # Reusable Vue components
│   ├── layouts/            # Application layouts
│   ├── pages/              # File-based routed pages
│   │   ├── emails/         # Vue-based email templates
│   │   │   └── components/ # Email-specific components
│   │   └── index.vue       # Main landing page
│   └── assets/             # Static assets and images
├── server/
│   ├── api/                # API endpoints (contact form)
│   ├── assets/emails/      # Compiled HTML email templates
│   └── utils/              # Server utilities and helpers
├── scripts/
│   └── build-emails.ts     # Email template compiler
├── shared/
│   └── utils/              # Cross-platform utilities & validators
└── public/                 # Public static assets
```

---

## Contact Form System

Features include:

- Secure form validation with comprehensive error handling
- Real-time bot prevention via Cloudflare Turnstile
- Automated email notifications to practice staff
- Professional thank-you emails to patients
- Mobile-optimized form design for accessibility

This system handles all patient inquiries and appointment requests seamlessly.

---

## Email Template System

Write emails using Vue SFCs → compile to static HTML:

- Vue-based template authoring for consistency
- Shared UI components for professional branding
- Automatic CSS inlining for email client compatibility
- Email-safe font stacks optimized for healthcare communications
- Build script outputs production-ready HTML templates
- Mailgun integration for reliable delivery

---

## Tech Stack Overview

| Category | Technologies                          |
| -------- | ------------------------------------- |
| Frontend | Vue 3, Nuxt 4, TypeScript             |
| Backend  | Nitro, Node.js                        |
| Email    | Custom Vue → HTML pipeline, Mailgun   |
| Security | Cloudflare Turnstile, form validation |
| SEO      | Nuxt Schema.org, meta optimizations   |
| Deploy   | Modern hosting with SSR support       |

### Engineering Decisions (Why These Tools)

- **Nuxt 4 + Nitro** → unified client/server architecture, effortless SSR, excellent DX
- **Vue-based email templates** → reduces duplication across web and email communications
- **Mailgun** → reliable, professional email delivery for healthcare communications
- **Cloudflare Turnstile** → modern, accessible bot prevention
- **TypeScript** → type safety and better developer experience

---

## Project Goals

- Create a modern, professional web presence for the dental practice
- Provide secure, reliable patient communication channels
- Improve SEO and online visibility for local dental searches
- Streamline patient inquiries with automated workflows
- Ensure accessibility and mobile-first design for all patients

---

## Setup & Development

### Prerequisites

- Node.js 18+
- `.env` configuration with required API keys

### Installation

```bash
git clone https://github.com/mrcrandell/vicksburgfamilydentistry-nuxt.git
npm install
cp .env.example .env    # Add your own values

npm run emails:build
npm run dev
```

### Environment Variables

```bash
NUXT_PUBLIC_SITE_URL="https://www.vicksburgfamilydentistry.com"

MAILGUN_API_KEY="your-mailgun-api-key"
MAILGUN_DOMAIN="your-mailgun-domain.com"

NUXT_TURNSTILE_SECRET_KEY="your-turnstile-secret"
NUXT_PUBLIC_TURNSTILE_SITE_KEY="your-turnstile-site-key"

# Email Configuration
CONTACT_NOTIFICATION_EMAIL="practice@vicksburgfamilydentistry.com"
CONTACT_FROM_EMAIL="noreply@vicksburgfamilydentistry.com"
CONTACT_REPLY_TO_EMAIL="practice@vicksburgfamilydentistry.com"
```

---

## Build & Deployment

```bash
# Build email templates
npm run emails:build

# Build application for production
npm run build

# Preview production build
npm run preview

# Deploy (depends on hosting platform)
git push origin main
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run emails:build` - Compile email templates
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site

---

## Key Learning Outcomes

This project demonstrates capability across:

### Frontend Engineering

- Modern Vue patterns using Composition API + TypeScript
- Responsive design optimized for healthcare industry
- Performance tuning and accessibility considerations
- SEO optimization for local business visibility

### Full-Stack Engineering

- Secure form processing with comprehensive validation
- Email template compilation and delivery systems
- Environment-based configuration management
- Security best practices for healthcare-related communications

### Healthcare Web Development

- HIPAA-conscious design patterns
- Professional healthcare industry UI/UX standards
- Accessible design for diverse patient populations
- Local SEO optimization for dental practice visibility

---

## About the Developer

This project was built by **Matt Crandell** as a production Nuxt 4 website demonstrating modern web development practices for healthcare businesses.

GitHub: [https://github.com/mrcrandell](https://github.com/mrcrandell)
Live site: [https://www.vicksburgfamilydentistry.com](https://www.vicksburgfamilydentistry.com)

---

## License

This project is proprietary software built for Vicksburg Family Dentistry.
