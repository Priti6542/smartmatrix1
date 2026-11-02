export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/services",
    hasDropdown: true,
    children: [
      {
        slug: "web-development",
        title: "Web Applications",
        description: "Modern, scalable web platforms built with React, Next.js, and cloud backends.",
        icon: "Globe",
      },
      {
        slug: "custom-software",
        title: "Custom Software",
        description: "Tailor-made software systems engineered to solve complex operational challenges.",
        icon: "Terminal",
      },
      {
        slug: "mobile-apps",
        title: "Mobile Apps",
        description: "High-performance iOS, Android, and cross-platform mobile experiences.",
        icon: "Smartphone",
      },
      {
        slug: "product-development",
        title: "Product Engineering",
        description: "End-to-end product delivery from MVP prototype to full-scale architecture.",
        icon: "Rocket",
      },
      {
        slug: "ui-ux-design",
        title: "UI / UX Design",
        description: "User research, intuitive wireframes, and scalable design systems.",
        icon: "PenTool",
      },
      {
        slug: "ai-solutions",
        title: "AI & Automation",
        description: "Intelligent automation, LLM integration, predictive models, and smart bots.",
        icon: "BrainCircuit",
      },
      {
        slug: "cloud-solutions",
        title: "Cloud & DevOps",
        description: "Secure cloud migration, CI/CD pipelines, containerization, and AWS/Azure setups.",
        icon: "Cloud",
      },
      {
        slug: "data-analytics",
        title: "Data & BI Analytics",
        description: "Actionable dashboards, data warehousing, and real-time business intelligence.",
        icon: "LayoutDashboard",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing & SEO",
        description: "Data-driven SEO, performance marketing, and digital growth campaigns.",
        icon: "Megaphone",
      },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Core Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ],
  services: [
    { label: "Web Applications", path: "/services/web-development" },
    { label: "Custom Software", path: "/services/custom-software" },
    { label: "Mobile Apps", path: "/services/mobile-apps" },
    { label: "Product Engineering", path: "/services/product-development" },
    { label: "UI / UX Design", path: "/services/ui-ux-design" },
    { label: "AI & Automation", path: "/services/ai-solutions" },
    { label: "Cloud & DevOps", path: "/services/cloud-solutions" },
    { label: "Data Analytics", path: "/services/data-analytics" },
    { label: "Digital Marketing", path: "/services/digital-marketing" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/contact" },
    { label: "Terms of Service", path: "/contact" },
    { label: "Security & Compliance", path: "/about" },
  ],
};

