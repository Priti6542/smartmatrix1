import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import arCallingImage from "../../assets/images/healthcare/AR_Calling.jpg";
import healthcareHeroImage from "../../assets/images/healthcare/healthcareback.jpg";
import medicalBillingImage from "../../assets/images/healthcare/medical_billing.jpg";
import medicalCodingImage from "../../assets/images/healthcare/medical_coding.jpg";

import type { FeatureRow, HeroContent } from "../../types/common";
import type { HealthcareService } from "../../types/industry";

export const HEALTHCARE_HERO: HeroContent = {
  backgroundImage: healthcareHeroImage,
  title: "US HealthCare",
  description: "We provide Health care services",
};

/** Every service shares this checklist in the source content. */
const SHARED_HIGHLIGHTS: string[] = [
  "Data Security",
  "Unpaid Insurance Claim Tracking",
  "Track Electronic and Paper Claim",
  "Patient's Collectible Handling",
  "Generate AR Reports",
  "Affordable AR Calling",
  "HIPAA Compliant AR Calling Services",
];

export const HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    id: "ar-caller",
    title: "AR Caller",
    icon: SupportAgentIcon,
    highlights: SHARED_HIGHLIGHTS,
  },
  {
    id: "medical-coding",
    title: "Medical Coding",
    icon: MedicationLiquidIcon,
    highlights: SHARED_HIGHLIGHTS,
  },
  {
    id: "medical-billing",
    title: "Medical Billing",
    icon: ReceiptLongIcon,
    highlights: SHARED_HIGHLIGHTS,
  },
];

export const HEALTHCARE_FEATURES: FeatureRow[] = [
  {
    title: "AR Caller",
    content:
      "Accounts Receivable (AR) calling is a critical component in the financial ecosystem of healthcare organizations. As a fundamental part of Revenue Cycle Management (RCM), AR calling involves reaching out to payers, insurance companies, or patients to ensure timely and accurate payment for the services rendered. Trained professionals in AR calling navigate through the complexities of claims processing, payment disputes, and reimbursement delays. Their expertise lies in effective communication, negotiation, and resolution of outstanding accounts. In an environment where timely cash flow is paramount, AR calling serves as the frontline defense against revenue interruptions",
    image: arCallingImage,
  },
  {
    title: "Medical Coding",
    content:
      "Medical Coding Services is a specialized function in the Revenue Cycle Management which involves healthcare providers, patients, payers and Physician administrative staff. Medical Coders work in tandem with billers to process accurate revenue codes on the basis of the clinical documentation maintained by the healthcare provider. The expertise of a certified and experienced Medical Coder is to ensure quick and denial-free reimbursement to the providers. Medical Coders play a crucial role in translating complex healthcare information into standardized codes,which are essential for billing processes effective communication among healthcare providers, payers, and administrative staff.",
    image: medicalCodingImage,
  },
  {
    title: "Medical Billing",
    content:
      "As healthcare reforms reshape the industry, medical billing services have become indispensable for practitioners. Facing challenges like increased denials and operating costs, reduced reimbursements, and complex coding requirements, these services act as vital allies. With impending reforms such as the Affordable Care Organization Concept, ICD-10 transition, and HIPAA 5010 compliance, experienced billing services ensure practitioners navigate the evolving landscape seamlessly. By handling intricate coding, compliance, and reimbursement optimization, these services empower healthcare providers to concentrate on industry transformations and their mission to provide excellent patient care.",
    image: medicalBillingImage,
  },
];

/**
 * Partner logos rendered by `TrustedPartners`. That section is not currently
 * mounted on the healthcare page — it was disabled before the TypeScript
 * migration and is kept here so it can be switched back on.
 */
export const TRUSTED_PARTNER_LOGOS: readonly string[] = [
  "https://smartsoftwareservice.com/images/client-1.png",
  "https://smartsoftwareservice.com/images/client-2.png",
  "https://smartsoftwareservice.com/images/client-3.png",
  "https://smartsoftwareservice.com/images/client-4.png",
  "https://smartsoftwareservice.com/images/client-5.jpg",
  "https://smartsoftwareservice.com/images/client-6.jpg",
];
