import product_management from '../../assets/product_management.jpg';
import iot from '../../assets/IOT.jpg';
import outsourcing from '../../assets/outsourcing.jpg';
import digital_marketing from '../../assets/digital_marketing.jpg';
import marketing_service from '../../assets/marketing_service.jpg'
import social_media from '../../assets/social_media.jpg'
import web_development from '../../assets/web_development.jpg'
import mobile_development from '../../assets/mobile_development.jpg'
import SAAS from '../../assets/SAAS.jpg'
import power_bi from '../../assets/power_bi.jpg'
import sales_force from '../../assets/sales_force.jpg'
import SAP from '../../assets/SAP.jpg'
import testing from '../../assets/testing.jpg'
import cloud from '../../assets/cloud.jpg'
import ASP from '../../assets/ASP.jpg'
import osisoft from '../../assets/osisoft.jpg'
import dv360 from '../../assets/dv360.jpg'

const SevicesCardData = {
  management: [
    { id: "m1", src: product_management, title: "Product Management", description: "Guiding product development with a strategic focus on user needs, market trends, and iterative refinement for optimal market fit and success." },
    // { id: "m2", src: iot, title: "IoT Services", description: "Connecting devices, data, and people through smart IoT solutions that enhance efficiency, automation, and innovation." },
    // { id: "m3", src: outsourcing, title: "Outsourcing", description: "Optimize your business operations with cost-effective outsourcing solutions." },
    { id: "m2", src: dv360, title: "DV360", description: "Manage and optimize programmatic advertising campaigns using Google DV360 to maximize reach, engagement, and ROI." },
    { id: "m3", src: osisoft, title: "OSIsoft PI System", description: "Leverage real-time industrial data through the OSIsoft PI System for smarter analytics, monitoring, and decision-making." },
  ],
  digitalMarketing: [
    { id: "dm1", src: digital_marketing, title: "Digital Marketing", description: "Boosting brand visibility and driving targeted traffic through data-driven digital marketing strategies." },
    { id: "dm2", src: marketing_service, title: "Digital Marketing Services", description: "Digital marketing services use strategies like SEO, SEM, content marketing, PPC, and analytics to boost brand visibility and drive online growth." },
    { id: "dm3", src: social_media, title: "Social Media Marketing", description: "Drive customer engagement through email marketing." }
  ],

  development: [
    { id: "d1", src: web_development, title: "Web Development", description: "Building dynamic, user-centric websites that drive engagement and deliver results." },
    { id: "d2", src: mobile_development, title: "Mobile Application Development", description: "Crafting intuitive mobile applications that enhance user experience and drive business growth." },
    { id: "d3", src: SAAS, title: "SAAS", description: "Developing scalable and secure SaaS applications that enable businesses to leverage cloud-based solutions for enhanced efficiency and accessibility." }
  ],
  itCourses: [
    { id: "it1", src: power_bi, title: "Power-BI", description: "Power BI is Microsoft's data analysis and visualization tool. It helps create interactive reports and dashboards from different data sources, facilitating quick insights and informed decision-making." },
    { id: "it2", src: sales_force, title: "Sales Force", description: "Salesforce is a cloud-based CRM platform that helps businesses manage sales, marketing, and customer interactions efficiently." },
    { id: "it3", src: SAP, title: "SAP", description: "SAP offers courses covering ERP basics, finance, sales, procurement, HR, analytics, and the latest S/4HANA software, tailored to different industries and job roles." }
  ],
  Courses: [
    { id: "it1", src: testing, title: "Software Testing", description: "Software testing verifies that software meets quality standards and functions correctly by identifying defects or errors. It ensures reliability, performance, and user satisfaction." },
    { id: "it2", src: cloud, title: "Cloud-Computing", description: "Cloud computing delivers computing services like storage, processing, and software over the internet, offering flexibility and scalability for businesses while reducing costs." },
    { id: "it3", src: ASP, title: "ASP.Net", description: "ASP.NET is a Microsoft framework for building dynamic web applications and services, offering scalability and security features." }
  ]

};


export default SevicesCardData;

