import healthcareImage from "../assets/images/healthcare/healthcareback.jpg";
import cloudImage from "../assets/images/services/cloud.jpg";
import iotImage from "../assets/images/services/IOT.jpg";
import analyticsImage from "../assets/images/services/data_analytics.jpg";

import type { Industry } from "../types/industry";

import { ROUTES } from "./routes";

export const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    title: "US Healthcare",
    description:
      "End-to-end revenue cycle management — AR calling, medical coding, and medical billing delivered by HIPAA-compliant teams.",
    image: healthcareImage,
    path: ROUTES.HEALTHCARE,
  },
  {
    id: "cloud-and-saas",
    title: "Cloud & SaaS",
    description:
      "Cloud migration, infrastructure design, and multi-tenant SaaS platforms built to scale with the businesses that run on them.",
    image: cloudImage,
    path: null,
  },
  {
    id: "manufacturing-and-iot",
    title: "Manufacturing & IoT",
    description:
      "Connected devices and real-time operational data, turned into analytics that keep plants efficient and predictable.",
    image: iotImage,
    path: null,
  },
  {
    id: "data-and-analytics",
    title: "Data & Analytics",
    description:
      "Big data pipelines, reporting, and decision support that make large volumes of information usable day to day.",
    image: analyticsImage,
    path: null,
  },
];
