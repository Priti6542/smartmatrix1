import careersHeroImage from "../../assets/images/careers/careerhero.jpg";

import { CONTACT_DETAILS } from "../../constants/site";
import { ROUTES } from "../../constants/routes";
import type { RoutePath } from "../../constants/routes";
import type { HeroContent, InfoItem } from "../../types/common";
import type {
  ApplicationStep,
  CareerHighlight,
  InternshipRole,
} from "../../types/career";

export const CAREERS_HERO: HeroContent = {
  backgroundImage: careersHeroImage,
  title: "Build your career. Build meaningful digital products.",
  description:
    "At Smart Matrix Digital Services, we build software that simplifies how businesses work, strengthens how people operate, and makes everyday work more productive — and we're looking for people who want to help build it.",
};

/** Small floating label on the hero's image composition. */
export const CAREERS_HERO_TAG = "People • Product • Growth";

/** Anchor ids the hero's two CTAs scroll to, further down this same page. */
export const CAREERS_SECTION_IDS = {
  whyJoin: "why-join",
  openPositions: "open-positions",
} as const;

export const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  {
    title: "Connected",
    description:
      "We come together wherever we are across time zones, regions, offices and screens.",
  },
  {
    title: "Inclusive",
    description:
      "Our teams reflect the rich diversity of our world,with equitable access to opportunity for everyone.",
  },
  {
    title: "Flexible",
    description:
      "We believe in your freedom to work when and how you work best, to help us all thrive.",
  },
];

export const APPLICATION_STEPS: ApplicationStep[] = [
  {
    title: "Explore Opportunities:",
    description:
      "Browse through our current job listings spanning diverse fields and positions, offering opportunities for growth and impact. Find the perfect match for your skills and aspirations to begin your journey with us.",
  },
  {
    title: "Apply with Ease:",
    description:
      "Submit your application effortlessly through our user-friendly platform, where you can showcase your qualifications and enthusiasm for joining our team. We value your unique talents and are excited to learn more about how you can contribute to our mission.",
  },
  {
    title: "Join Our Team:",
    description:
      "Take the next step in your career by becoming a part of our vibrant community, where collaboration, innovation, and personal development thrive. Join us in shaping the future as we work together towards our shared goals and success.",
  },
];

export const INTERNSHIP_ROLES: InternshipRole[] = [
  {
    id: "front-end-developer",
    title: "Front-end-Developer",
    description:
      "You will have the opportunity to apply your knowledge of HTML, CSS, and JavaScript to design and implement user-friendly websites and web applications.",
    qualifications:
      "Proficiency in HTML, CSS, and JavaScript,Familiarity with front-end frameworks such as React, Angular, or Vue.js (preferred but not required).,Strong problem-solving and analytical skills.",
    benefits:
      "Hands-on experience working on real-world projects.,Mentorship and guidance from experienced developers.,Exposure to industry-standard tools and technologies.",
  },
  {
    id: "back-end-developer",
    title: "Back-end Developer",
    description:
      "You will have the opportunity to apply your knowledge of server-side programming, databases, and APIs to build robust and scalable backend systems that power web applications.",
    qualifications:
      "Proficiency in server-side languages such as Node.js, Python, Java, or PHP, Experience with databases (SQL and NoSQL) such as MongoDB, PostgreSQL, or MySQL, Understanding of RESTful APIs and web services (preferred but not required), Strong problem-solving and analytical skills.",
    benefits:
      "Hands-on experience working on real-world projects, Mentorship and guidance from experienced developers, Exposure to industry-standard tools and technologies, Experience with cloud platforms and deployment processes.",
  },
  {
    id: "full-stack-developer",
    title: "Full-stack Developer",
    description:
      "You will have the opportunity to work across the entire development stack, building complete web applications from database design to user interface implementation.",
    qualifications:
      "Proficiency in both front-end (HTML, CSS, JavaScript) and back-end technologies (Node.js, Python, etc.), Experience with databases and API development, Familiarity with version control systems like Git (preferred but not required), Strong problem-solving and analytical skills.",
    benefits:
      "Hands-on experience working on real-world projects, Mentorship and guidance from experienced developers, Exposure to industry-standard tools and technologies, Comprehensive understanding of the full development lifecycle.",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "You will be responsible for designing intuitive and visually appealing user interfaces while ensuring exceptional user experience across digital products.",
    qualifications:
      "Bachelor’s degree in Design, HCI, or related field; Proven experience in UI/UX design with strong portfolio; Proficiency in design tools like Figma, Adobe XD, Sketch; Strong understanding of user-centered design principles; Excellent communication and collaboration skills.",
    benefits:
      "Opportunity to work on diverse projects impacting real users, mentorship from seasoned designers, exposure to the latest design tools and methodologies, a collaborative and creative work environment.",
  },
];

/* ------------------------------------------------------------------ */
/* Why Join Smart Matrix — reuses CAREER_HIGHLIGHTS above               */
/* ------------------------------------------------------------------ */

export const WHY_JOIN_HEADING = "Why build your next chapter with us?";
export const WHY_JOIN_STATEMENT =
  "Great work happens when people have the space to think, create and grow.";

/* ------------------------------------------------------------------ */
/* Our Culture — the three real commitments from the hero's mission     */
/* statement ("simplifying, enhancing, and making work life more       */
/* productive"), structured as a connected journey rather than prose.  */
/* ------------------------------------------------------------------ */

export const OUR_CULTURE_HEADING = "How we work together.";

export const CULTURE_JOURNEY: InfoItem[] = [
  {
    title: "Simplify",
    description: "We look for the simplest version of a solution first.",
  },
  {
    title: "Enhance",
    description: "We improve what already works before replacing it.",
  },
  {
    title: "Make work productive",
    description: "We build tools people actually want to use every day.",
  },
];

/* ------------------------------------------------------------------ */
/* Life at Smart Matrix                                                 */
/* ------------------------------------------------------------------ */

export const LIFE_HEADING = "Life at Smart Matrix";
export const LIFE_DESCRIPTION =
  "The work happens in the details — in code reviews, in design critiques, and in the conversations that shape a product before it ships.";

/* ------------------------------------------------------------------ */
/* Growth & Learning                                                    */
/* ------------------------------------------------------------------ */

export const GROWTH_HEADING = "Grow with the work.";

export interface GrowthStep {
  index: string;
  title: string;
  description: string;
}

export const GROWTH_STEPS: GrowthStep[] = [
  {
    index: "01",
    title: "Learn",
    description: "Pick up the context, the codebase, and how the team works.",
  },
  {
    index: "02",
    title: "Contribute",
    description: "Start shipping real work on real projects, early.",
  },
  {
    index: "03",
    title: "Take Ownership",
    description: "Own a feature, a service, or a client relationship outright.",
  },
  {
    index: "04",
    title: "Grow",
    description: "Take on bigger problems as your experience grows with us.",
  },
];

/* ------------------------------------------------------------------ */
/* Open Positions — reuses INTERNSHIP_ROLES above                       */
/* ------------------------------------------------------------------ */

export const OPEN_POSITIONS_HEADING = "Find your next opportunity.";
export const OPEN_POSITIONS_SUBTITLE =
  "Explore roles where your skills can create meaningful impact.";

export const NO_MATCH_HEADING = "Don't see the right opportunity?";
export const NO_MATCH_DESCRIPTION =
  "We're always interested in connecting with talented people.";
export const RESUME_EMAIL = CONTACT_DETAILS.email;

/* ------------------------------------------------------------------ */
/* How We Hire — reuses APPLICATION_STEPS above                         */
/* ------------------------------------------------------------------ */

export const HOW_WE_HIRE_HEADING = "How we hire.";

/* ------------------------------------------------------------------ */
/* Final CTA                                                            */
/* ------------------------------------------------------------------ */

interface CareersCta {
  label: string;
  path: RoutePath;
}

export interface CareersFinalCtaContent {
  heading: string;
  description: string;
  secondaryCta: CareersCta;
}

export const CAREERS_FINAL_CTA: CareersFinalCtaContent = {
  heading: "Ready to build what's next?",
  description:
    "Explore opportunities with Smart Matrix Digital Service Pvt. Ltd.",
  secondaryCta: { label: "Get in Touch", path: ROUTES.CONTACT },
};
