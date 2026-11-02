# Smart Matrix — Corporate Website

A modern, responsive, multi-page corporate website for **Smart Matrix** (Smart Software Services Pvt. Ltd.), engineered with React, Vite, Tailwind CSS v4, and React Router DOM.

---

## 🚀 Technology Stack

- **React 19** — Functional component architecture with hooks
- **Vite 6** — Lightning-fast build tool and development server
- **JavaScript (ES6+ / JSX)** — Standard, maintainable JSX syntax
- **Tailwind CSS v4** — High-performance utility-first styling with `@tailwindcss/vite`
- **React Router DOM v7** — Client-side declarative multi-page routing
- **Lucide React** — Modern, lightweight SVG iconography
- **Framer Motion** — Subtle interactive micro-animations

---

## 📁 Project Architecture

```text
company-website/
├── public/
│   ├── images/
│   ├── icons/
│   │   └── smartlogo.webp
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── about/
│   │   │   ├── careers/
│   │   │   ├── contact/
│   │   │   ├── healthcare/
│   │   │   └── home/
│   │   ├── logos/
│   │   │   └── smart_logo.webp
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Breadcrumb.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── IndustriesSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── StatisticsSection.jsx
│   │   │   └── CtaSection.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── TestimonialCard.jsx
│   │   │
│   │   └── forms/
│   │       ├── ContactForm.jsx
│   │       └── CareerForm.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   ├── services.js
│   │   ├── projects.js
│   │   ├── testimonials.js
│   │   ├── company.js
│   │   └── careers.js
│   │
│   ├── hooks/
│   │   ├── useDocumentTitle.js
│   │   └── useScrollToTop.js
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   └── validation.js
│   │
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 Application Routing Flow

```text
main.jsx
   ↓
App.jsx
   ↓
AppRoutes.jsx
   ↓
MainLayout.jsx (Shared Navbar, ScrollToTop & Footer)
   ↓
Individual Pages (Home, About, Services, ServiceDetails, Portfolio, Careers, Contact, 404)
```

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Company overview, stats, core services, domain expertise, featured work, testimonials |
| `/about` | `About.jsx` | Company origin, engineering philosophy, core values, delivery methodology |
| `/services` | `Services.jsx` | Full catalog of 8 core software & AI services with architecture standards |
| `/services/:slug` | `ServiceDetails.jsx` | Deep dive per service: deliverables, business benefits, and 4-phase roadmap |
| `/portfolio` | `Portfolio.jsx` | Filterable project showcase across Healthcare, Fintech, Logistics, SaaS, and AI |
| `/careers` | `Careers.jsx` | Engineering culture, internship/job openings with expandable details & application form |
| `/contact` | `Contact.jsx` | Office address, phone, email, working hours, FAQs, and validated project inquiry form |
| `*` | `NotFound.jsx` | 404 error page with quick links back to active sections |

---

## 🛠️ Local Development & Build

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Brand Identity

- **Primary Orange:** `#F47C20`
- **Deep Orange:** `#d8690f`
- **Gold Accent:** `#FDB913`
- **Charcoal Neutral:** `#3D3D3D`
- **Deep Charcoal:** `#262626`
- **Warm Cream Background:** `#FFFCF7` / `#FFF8F0`
