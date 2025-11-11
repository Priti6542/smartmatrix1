import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import medical_billing from '../../assets/medical_billing.jpg';
import medical_coding from '../../assets/medical_coding.jpg';
import AR_Calling from '../../assets/AR_Calling.jpg';

import healthcareback from '../../assets/healthcareback.jpg';

const HealthCareData = {
    HealthHero: [
        {
            backgroundvideo:"https://v1.pinimg.com/videos/mc/720p/91/e7/b6/91e7b6e4b2c35503a6a799426c614709.mp4",
            backgroundImage:healthcareback,
            Heading:"US HealthCare",
            subheading:"We provide Health care services",
           
        },
    ],

    HealthCard:[
        {
            icon:SupportAgentIcon,
            Heading:"AR Caller",
            description:" Data Security,Unpaid Insurance Claim Tracking,Track Electronic and Paper Claim,Patient's Collectible Handling,Generate AR Reports,Affordable AR Calling,HIPAA Compliant AR Calling Services"  
        },

        {
            icon:MedicationLiquidIcon,
            Heading:"Medical Coding",
            description:" Data Security,Unpaid Insurance Claim Tracking,Track Electronic and Paper Claim,Patient's Collectible Handling,Generate AR Reports,Affordable AR Calling,HIPAA Compliant AR Calling Services"  
        },

        {
            icon: ReceiptLongIcon,
            Heading:"Medical Billing",
            description:" Data Security,Unpaid Insurance Claim Tracking,Track Electronic and Paper Claim,Patient's Collectible Handling,Generate AR Reports,Affordable AR Calling,HIPAA Compliant AR Calling Services"   
        }
    ],

    FeatureSectionData :[
        {
        
          title: "AR Caller",
          content:
            "Accounts Receivable (AR) calling is a critical component in the financial ecosystem of healthcare organizations. As a fundamental part of Revenue Cycle Management (RCM), AR calling involves reaching out to payers, insurance companies, or patients to ensure timely and accurate payment for the services rendered. Trained professionals in AR calling navigate through the complexities of claims processing, payment disputes, and reimbursement delays. Their expertise lies in effective communication, negotiation, and resolution of outstanding accounts. In an environment where timely cash flow is paramount, AR calling serves as the frontline defense against revenue interruptions",
          images: AR_Calling,
            
    
          backgroundImage: "https://i.pinimg.com/736x/cd/6f/a9/cd6fa98b64ed44a096fb555fbc065b28.jpg"
        },
        {
     
          title: "Medical Coding",
          content:
            "Medical Coding Services is a specialized function in the Revenue Cycle Management which involves healthcare providers, patients, payers and Physician administrative staff. Medical Coders work in tandem with billers to process accurate revenue codes on the basis of the clinical documentation maintained by the healthcare provider. The expertise of a certified and experienced Medical Coder is to ensure quick and denial-free reimbursement to the providers. Medical Coders play a crucial role in translating complex healthcare information into standardized codes,which are essential for billing processes effective communication among healthcare providers, payers, and administrative staff.",
          images: medical_coding,
          
          backgroundImage: "https://i.pinimg.com/736x/35/9b/74/359b74ab254bc1cd59a661c4a2e258f3.jpg"
        },
        {
          title: "Medical Billing",
          content:
            "As healthcare reforms reshape the industry, medical billing services have become indispensable for practitioners. Facing challenges like increased denials and operating costs, reduced reimbursements, and complex coding requirements, these services act as vital allies. With impending reforms such as the Affordable Care Organization Concept, ICD-10 transition, and HIPAA 5010 compliance, experienced billing services ensure practitioners navigate the evolving landscape seamlessly. By handling intricate coding, compliance, and reimbursement optimization, these services empower healthcare providers to concentrate on industry transformations and their mission to provide excellent patient care.",
          images: medical_billing,
            
          
          backgroundImage: "https://i.pinimg.com/736x/0f/44/ca/0f44ca9c78bbd43218fb05622774eb9b.jpg"
        },
        
      ],

      TrustedData:[
        
          {image:"https://smartsoftwareservice.com/images/client-1.png"},
          {image:"https://smartsoftwareservice.com/images/client-2.png"},
          {image:"https://smartsoftwareservice.com/images/client-3.png"},
          {image:"https://smartsoftwareservice.com/images/client-4.png"},
          {image:"https://smartsoftwareservice.com/images/client-5.jpg"},
          {image:"https://smartsoftwareservice.com/images/client-6.jpg"},
        
      ]
};

export default HealthCareData;

