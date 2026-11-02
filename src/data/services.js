export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Applications & Platforms",
    badge: "Web Engineering",
    icon: "Globe",
    shortDescription:
      "Modern, fast, and scalable web applications engineered with React, Next.js, TypeScript, and micro-frontend architectures.",
    longDescription:
      "We design and develop high-performance web platforms built for speed, security, and effortless scaling. From responsive customer-facing web applications to enterprise-grade admin portals, our engineers deliver clean code and resilient architectures.",
    deliverables: [
      "Enterprise Web Portals & Dashboards",
      "Single-Page & Server-Side Rendered Applications",
      "High-Conversion SaaS Web Apps",
      "Headless CMS & Content Platforms",
      "Progressive Web Apps (PWAs) with Offline Support",
      "Secure REST & GraphQL API Integrations",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "GraphQL", "PostgreSQL"],
    benefits: [
      { title: "Sub-Second Load Times", desc: "Optimized Core Web Vitals for maximum user retention and SEO ranking." },
      { title: "Enterprise Grade Security", desc: "OWASP compliance, robust role-based access control, and encrypted sessions." },
      { title: "Scalable Architecture", desc: "Easily accommodate traffic surges without degradation or costly rebuilds." },
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", desc: "Define user personas, data models, and component hierarchies." },
      { step: "02", title: "Sprint-Based Engineering", desc: "Iterative development with clean component modules and automated tests." },
      { step: "03", title: "Performance Audits", desc: "Rigorous lighthouse checks, responsive testing, and security scanning." },
      { step: "04", title: "Deployment & Monitoring", desc: "Zero-downtime CI/CD deployment with live error tracking and telemetry." },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    badge: "Bespoke Solutions",
    icon: "Terminal",
    shortDescription:
      "Tailor-made software systems engineered to solve unique operational bottlenecks and streamline core enterprise workflows.",
    longDescription:
      "Off-the-shelf software often forces you to compromise your unique business processes. We build bespoke software solutions from the ground up, aligning perfectly with your workflows, legacy systems, and compliance requirements.",
    deliverables: [
      "Custom ERP & CRM Solutions",
      "Workflow & Automation Platforms",
      "Legacy System Modernization & Migration",
      "Third-Party System & API Orchestration",
      "Internal Business Tools & Management Consoles",
      "Multi-Tenant Database Architectures",
    ],
    technologies: ["Python", "Node.js", "Java", "PostgreSQL", "Docker", "Redis", "Kafka"],
    benefits: [
      { title: "Exact Workflow Fit", desc: "Zero wasted features — every interface matches your exact operational routine." },
      { title: "Full IP Ownership", desc: "You own 100% of the proprietary source code, infrastructure, and data." },
      { title: "Seamless Integration", desc: "Connect smoothly with your existing accounting, inventory, and HR tools." },
    ],
    process: [
      { step: "01", title: "Workflow Analysis", desc: "Deep dive into your manual bottlenecks, spreadsheets, and integration points." },
      { step: "02", title: "System Modeling", desc: "Entity diagrams, security clearance tiers, and high-throughput data schemas." },
      { step: "03", title: "Agile Build Sprints", desc: "Bi-weekly demo releases with continuous stakeholder feedback loops." },
      { step: "04", title: "Data Migration & Rollout", desc: "Careful migration from legacy databases with zero operational disruption." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Application Development",
    badge: "iOS & Android",
    icon: "Smartphone",
    shortDescription:
      "Fluid, responsive mobile applications for iOS and Android built with React Native and native technologies.",
    longDescription:
      "Mobile users demand lightning-fast response times, intuitive gestures, and offline reliability. We engineer consumer-grade and enterprise mobile apps that deliver native smoothness, secure biometric authentication, and engaging push experiences.",
    deliverables: [
      "Cross-Platform iOS & Android Applications",
      "Offline-First Data Synchronization",
      "Biometric Authentication (FaceID / Fingerprint)",
      "Push Notifications & In-App Messaging",
      "Payment Gateway Integrations (Apple Pay, Google Pay, Stripe)",
      "App Store & Google Play Store Submission Management",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "Fastlane"],
    benefits: [
      { title: "Single Codebase Efficiency", desc: "Deliver simultaneously to iOS and Android while cutting maintenance costs in half." },
      { title: "60 FPS Fluidity", desc: "Native rendering engines guarantee silky transitions and smooth animations." },
      { title: "Reliable Offline Mode", desc: "Local caching and background sync ensure productivity without internet access." },
    ],
    process: [
      { step: "01", title: "Mobile UX Mapping", desc: "Design touch targets, navigation bars, and thumb-friendly interaction zones." },
      { step: "02", title: "Core Engine Build", desc: "State management, offline sqlite caches, and secure storage implementation." },
      { step: "03", title: "Multi-Device QA", desc: "Real-device testing across various screen aspect ratios and OS versions." },
      { step: "04", title: "Store Launch & ASO", desc: "Full submission approval management, metadata optimization, and analytics." },
    ],
  },
  {
    slug: "product-development",
    title: "Product Engineering & MVP Acceleration",
    badge: "Venture & Scale",
    icon: "Rocket",
    shortDescription:
      "Transforming early-stage concepts into market-ready MVPs and scaling established products with agile engineering teams.",
    longDescription:
      "Whether you are a startup founder validating a market hypothesis or an established company launching a new digital venture, we partner with you to turn functional roadmaps into dependable software delivered on budget and on schedule.",
    deliverables: [
      "Rapid MVP Scoping & Architecture",
      "Clickable Interactive Prototypes",
      "Multi-Tenant SaaS Foundation",
      "Subscription Billing & Tiered Access",
      "User Onboarding & Funnel Tracking",
      "Post-Launch Technical Iteration Support",
    ],
    technologies: ["React", "Next.js", "Node.js", "Stripe API", "AWS Lambda", "Supabase", "Mixpanel"],
    benefits: [
      { title: "Accelerated Time-to-Market", desc: "Launch functional MVPs within 8–12 weeks to capture early market traction." },
      { title: "Investor-Ready Quality", desc: "Clean architecture and professional documentation that pass technical due diligence." },
      { title: "Cost-Effective Scaling", desc: "Serverless and microservices foundations prevent early infrastructure overspending." },
    ],
    process: [
      { step: "01", title: "Value Proposition Scoping", desc: "Filter core features to prioritize must-haves that prove product-market fit." },
      { step: "02", title: "Rapid Prototyping", desc: "High-fidelity Figma prototypes validated against target user expectations." },
      { step: "03", title: "MVP Production Sprint", desc: "Tight focus on auth, core value workflow, and subscription billing." },
      { step: "04", title: "Beta Launch & Analytics", desc: "Ship to early adopters, instrument heatmaps, and prioritize backlog items." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design & Design Systems",
    badge: "User Experience",
    icon: "PenTool",
    shortDescription:
      "Human-centered user experience design, comprehensive user journeys, and component-based design systems.",
    longDescription:
      "Great software feels effortless to use. Our UI/UX team conducts user research, crafts thoughtful information architecture, and creates clean visual languages that elevate brand trust and dramatically increase conversion rates.",
    deliverables: [
      "User Research & Competitive Audits",
      "Information Architecture & User Journeys",
      "Wireframing & Interactive Figma Prototypes",
      "Comprehensive Design Systems & Component Libraries",
      "Usability Testing & Accessibility (WCAG 2.1)",
      "Developer Handoff Specifications with Design Tokens",
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook", "Adobe CC", "Miro"],
    benefits: [
      { title: "Higher Conversion Rates", desc: "Frictionless checkout and onboarding flows that convert visitors into active customers." },
      { title: "Unified Brand Language", desc: "Consistent typography, colors, and components across web, mobile, and print." },
      { title: "Faster Development Velocity", desc: "Pre-built component specs and design tokens save developer hours every sprint." },
    ],
    process: [
      { step: "01", title: "Discovery & Empathy", desc: "Stakeholder interviews, customer journey mapping, and pain point audits." },
      { step: "02", title: "Low-Fi Wireframing", desc: "Architect content hierarchy and screen transitions before visual styling." },
      { step: "03", title: "High-Fi System Design", desc: "Craft bespoke color palettes, micro-interactions, and responsive components." },
      { step: "04", title: "Handoff & Implementation QA", desc: "Direct pairing with frontend engineers to guarantee pixel perfection." },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI & Intelligent Automation",
    badge: "Artificial Intelligence",
    icon: "BrainCircuit",
    shortDescription:
      "Empower your business with custom LLM integrations, retrieval-augmented generation (RAG), automated workflows, and predictive models.",
    longDescription:
      "Artificial intelligence is no longer theoretical — it is a practical lever for operational efficiency. We build tailored AI systems that automate manual customer inquiries, synthesize internal knowledge bases, and extract structured data from unstructured documents.",
    deliverables: [
      "Custom Retrieval-Augmented Generation (RAG) Systems",
      "Fine-Tuned LLM Chatbots & AI Agents",
      "Intelligent Document Processing & OCR",
      "Predictive Analytics & Churn Modeling",
      "Automated Workflow Pipelines",
      "AI Safety, Privacy & Guardrail Architecture",
    ],
    technologies: ["Python", "OpenAI / Claude API", "LangChain", "LlamaIndex", "Pinecone", "FastAPI", "Hugging Face"],
    benefits: [
      { title: "80% Reduction in Repetitive Tasks", desc: "Automate document classification, inquiry routing, and preliminary support." },
      { title: "Data Privacy & Governance", desc: "Private deployments ensure your proprietary business data is never used to train public models." },
      { title: "Actionable Operational Insights", desc: "Detect anomalies, revenue trends, and operational bottlenecks automatically." },
    ],
    process: [
      { step: "01", title: "Data & Feasibility Audit", desc: "Evaluate your internal documents, data cleanliness, and use-case ROI." },
      { step: "02", title: "PoC & Benchmark", desc: "Build a prototype model to test accuracy, hallucination rates, and latency." },
      { step: "03", title: "Enterprise Pipeline Integration", desc: "Embed vector search, API authentication, and fallback logic into your software." },
      { step: "04", title: "Monitoring & Guardrails", desc: "Set up token budgets, safety filters, and continuous output evaluation." },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Infrastructure & DevOps",
    badge: "Cloud Architecture",
    icon: "Cloud",
    shortDescription:
      "Architect resilient cloud infrastructure on AWS, Google Cloud, and Azure with automated CI/CD and containerization.",
    longDescription:
      "Modern businesses require infrastructure that never sleeps and scales dynamically. We configure secure, automated cloud environments using Infrastructure as Code (IaC), container orchestration, and continuous deployment pipelines.",
    deliverables: [
      "AWS, Google Cloud & Azure Architecture",
      "Terraform Infrastructure as Code (IaC)",
      "Docker & Kubernetes Containerization",
      "Automated CI/CD Delivery Pipelines (GitHub Actions)",
      "Database High Availability & Disaster Recovery",
      "24/7 Monitoring, Logging & Cost Optimization",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    benefits: [
      { title: "99.95%+ Uptime Guarantees", desc: "Multi-zone redundancies and automatic failovers prevent costly outages." },
      { title: "Zero-Downtime Deployments", desc: "Ship code multiple times a day with canary releases and instant rollbacks." },
      { title: "Up to 35% Cloud Cost Reduction", desc: "Rightsizing instances and auto-scaling policies eliminate idle server spend." },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Analyze resource utilization, security vulnerabilities, and deployment friction." },
      { step: "02", title: "IaC Blueprinting", desc: "Write version-controlled Terraform modules for repeatable infrastructure." },
      { step: "03", title: "Automated Pipeline Setup", desc: "Construct linting, unit testing, docker build, and deployment automation." },
      { step: "04", title: "Observability Handover", desc: "Configure Datadog / Grafana dashboards, alerting thresholds, and runbooks." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    badge: "Data Solutions",
    icon: "LayoutDashboard",
    shortDescription:
      "Transform disparate data silos into centralized data warehouses and interactive, real-time executive dashboards.",
    longDescription:
      "Data is only valuable when it leads to clear, actionable decisions. We design robust ETL/ELT pipelines, set up modern cloud data warehouses, and build intuitive business intelligence dashboards that keep executive teams informed.",
    deliverables: [
      "Modern Data Warehousing (Snowflake, BigQuery, Redshift)",
      "Automated ETL/ELT Data Pipelines (dbt, Airflow)",
      "Interactive Executive & Operational Dashboards",
      "Customer Lifecycle & Cohort Analytics",
      "Data Governance & Role-Based Access",
      "Real-Time Event Streaming & Telemetry",
    ],
    technologies: ["BigQuery", "Snowflake", "PostgreSQL", "dbt", "Power BI", "Tableau", "Apache Airflow"],
    benefits: [
      { title: "Single Source of Truth", desc: "Unify CRM, payment, and application logs into one centralized, reconciled repository." },
      { title: "Real-Time Decision Making", desc: "Live KPI tracking enables executives to act on trends before they impact quarterly results." },
      { title: "Democratized Access", desc: "Self-service reporting enables department leads to query data without technical bottlenecks." },
    ],
    process: [
      { step: "01", title: "Data Source Mapping", desc: "Inventory all internal databases, third-party APIs, and tracking pixels." },
      { step: "02", title: "Pipeline Architecture", desc: "Design resilient ingestion schedules and transformation schemas via dbt." },
      { step: "03", title: "Dashboard Crafting", desc: "Build clean visual representations of KPIs tailored to executive workflows." },
      { step: "04", title: "Data Validation & Training", desc: "Verify data accuracy against financial records and train internal team members." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    badge: "Growth & Visibility",
    icon: "Megaphone",
    shortDescription:
      "Data-driven SEO, performance marketing, social media campaigns, and conversion rate optimization to scale your online reach.",
    longDescription:
      "Building great software is only half the battle — your audience needs to find it. Our digital marketing and growth specialists design data-driven customer acquisition funnels, technical SEO strategies, content marketing, and high-ROI paid media campaigns to accelerate your market presence.",
    deliverables: [
      "Technical SEO Audits & On-Page / Off-Page Optimization",
      "Pay-Per-Click (PPC) & Performance Ad Management (Google, Meta, LinkedIn)",
      "Social Media Marketing & Brand Strategy",
      "Conversion Rate Optimization (CRO) & Funnel Analysis",
      "Content Strategy & Copywriting for Tech Brands",
      "Marketing Analytics & ROI Performance Reporting",
    ],
    technologies: ["Google Analytics 4", "Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Looker Studio"],
    benefits: [
      { title: "Targeted Qualified Leads", desc: "Attract decision-makers actively searching for your software and solutions." },
      { title: "Higher Return on Ad Spend", desc: "Continuous A/B testing and negative keyword pruning maximize every advertising dollar." },
      { title: "Organic Search Authority", desc: "Long-term top search engine rankings through technical SEO and high-value content." },
    ],
    process: [
      { step: "01", title: "Audit & Audience Research", desc: "Analyze competitor rankings, keyword intent, and buyer persona behavior." },
      { step: "02", title: "Campaign Strategy", desc: "Build tailored keyword architectures, ad creatives, and conversion landing pages." },
      { step: "03", title: "Multi-Channel Execution", desc: "Launch synchronized organic SEO, paid search, and social promotion sprints." },
      { step: "04", title: "Continuous Optimization", desc: "Review real-time conversion telemetry and reallocate budget to top-performing channels." },
    ],
  },
];

export const getServiceBySlug = (slug) => {
  return SERVICES.find((service) => service.slug === slug);
};

