import product_management from '../../assets/product_management.jpg';
import iot from '../../assets/IOT.jpg';
import outsourcing from '../../assets/outsourcing.jpg';
import digital_marketing from '../../assets/digital_marketing.jpg';
import marketing_service from '../../assets/marketing_service.jpg';
import social_media from '../../assets/social_media.jpg';
import web_development from '../../assets/web_development.jpg';
import mobile_development from '../../assets/mobile_development.jpg';
import SAAS from '../../assets/SAAS.jpg';
import power_bi from '../../assets/power_bi.jpg';
import sales_force from '../../assets/sales_force.jpg';
import SAP from '../../assets/SAP.jpg';
import osisoft from '../../assets/osisoft.jpg';
import dv360 from '../../assets/dv360.jpg';
import data_science from '../../assets/data_science.jpg';
import data_analytics from '../../assets/data_analytics.jpg';
import devops from '../../assets/devops.jpg';
import agile from '../../assets/agile.jpg';
import scrum from '../../assets/scrum.jpg';
import kanban from '../../assets/kanban.jpg';
import projectmanagement from '../../assets/projectmanagement.jpg';
import chatboat from '../../assets/chatboat.jpg';
import blockchain from '../../assets/blockchain.jpg';
import machinlearning from '../../assets/machinelearning.jpg';
// import waterfall from '../../assets/waterfall.png';
// import spiral from '../../assets/spiral.webp';

const SevicesCardData = {
  management: [
  {
    id: "m1",
    src: product_management,
    title: "Product Management",
    description:
      "Guiding product development with a strategic focus on user needs, market trends, and iterative refinement for optimal market fit and success.",
  },
  {
    id: "m2",
    src: outsourcing,
    title: "Outsourcing",
    description:
      "Optimize your business operations with cost-effective outsourcing solutions, improving efficiency and allowing your team to focus on core activities.",
  },
  {
    id: "m3",
    src: projectmanagement,
    title: "Project Management",
    description:
      "Plan, organize, and manage resources to successfully complete projects on time, within scope, and budget, ensuring quality and stakeholder satisfaction.",
  },
],
  DigitalMarketing: [
    {
      id: "dm1",
      src: digital_marketing,
      title: "Digital Marketing",
      description:
        "Boosting brand visibility and driving targeted traffic through data-driven digital marketing strategies.",
    },
    {
      id: "dm2",
      src: marketing_service,
      title: "Digital Marketing Services",
      description:
        "Digital marketing services use strategies like SEO, SEM, content marketing, PPC, and analytics to boost brand visibility and drive online growth.",
    },
    {
      id: "dm3",
      src: social_media,
      title: "Social Media Marketing",
      description:
        "Drive customer engagement through social media marketing strategies that connect brands with audiences effectively.",
    },
  ],

  Development: [
  {
    id: "d1",
    src: web_development,
    title: "Web Development",
    description:
      "Building dynamic, user-centric websites that drive engagement and deliver results.",
  },
  {
    id: "d2",
    src: mobile_development,
    title: "Mobile Application Development",
    description:
      "Crafting intuitive mobile applications that enhance user experience and drive business growth.",
  },
  {
    id: "d3",
    src: SAAS,
    title: "SAAS",
    description:
      "Developing scalable and secure SaaS applications that enable businesses to leverage cloud-based solutions for enhanced efficiency and accessibility.",
  },
  {
    id: "d4",
    src: chatboat, // new image to be added
    title: "Chatbot & AI-driven Application Development",
    description:
      "Building intelligent conversational apps using AI for customer support, automation, and engagement.",
  },
  {
    id: "d5",
    src: blockchain, // new image to be added
    title: "Blockchain Development",
    description:
      "Building secure and decentralized blockchain solutions for finance, supply chain, and other applications requiring trust and transparency.",
  },
  {
    id: "d6",
    src: machinlearning, // new image to be added
    title: "AI & Machine Learning Development",
    description:
      "Developing intelligent applications using AI and machine learning to automate tasks, provide insights, and improve decision-making.",
  },
],
  Teachnology_Stack: [
    {
      id: "it1",
      src: power_bi,
      title: "Power-BI",
      description:
        "Power BI is Microsoft's data analysis and visualization tool. It helps create interactive reports and dashboards from different data sources, facilitating quick insights and informed decision-making.",
    },
    {
      id: "it2",
      src: sales_force,
      title: "Sales Force",
      description:
        "Salesforce is a cloud-based CRM platform that helps businesses manage sales, marketing, and customer interactions efficiently.",
    },
    {
      id: "it3",
      src: SAP,
      title: "SAP",
      description:
        "SAP offers courses covering ERP basics, finance, sales, procurement, HR, analytics, and the latest S/4HANA software, tailored to different industries and job roles.",
    },
    {
      id: "it4",
      src: data_science,
      title: "Data Science",
      description:
        "Data Science combines statistics, programming, and domain expertise to extract insights from data. Learn Python, R, machine learning, data visualization, and predictive modeling to solve real-world problems.",
    },
    {
      id: "it5",
      src: data_analytics,
      title: "Analytics",
      description:
        "Analytics focuses on examining data to uncover patterns and trends. Master tools like SQL, Excel, Tableau, and Google Analytics to make data-driven decisions and optimize business performance.",
    },
    {
      id: "it6",
      src: devops,
      title: "DevOps",
      description:
        "DevOps bridges development and operations to accelerate software delivery. Learn CI/CD pipelines, Docker, Kubernetes, Jenkins, Git, and cloud platforms like AWS and Azure for efficient deployment and automation.",
    },
  ],

  Methodology: [
    {
      id: "m1",
      src: agile,
      title: "Agile",
      description:
        "An iterative approach emphasizing adaptability, continuous feedback, and close collaboration. Popular Agile frameworks include Scrum and Kanban.",
    },
    {
      id: "m2",
      src: scrum,
      title: "Scrum",
      description:
        "An Agile framework organizing work into time-boxed sprints. Scrum uses roles (Scrum Master, Product Owner), ceremonies (Standups, Sprint Reviews), and artifacts (Backlog, Burndown charts).",
    },
    {
      id: "m3",
      src: kanban,
      title: "Kanban",
      description:
        "A visual workflow methodology focused on continuous delivery. Work items flow through columns representing their status, improving transparency and efficiency.",
    },
  ],

  // ✅ Your new separate section
  NiceTechnology: [
    {
      id: "t1",
      src: osisoft,
      title: "OSIsoft PI System",
      description:
        "Leverage real-time industrial data through the OSIsoft PI System for smarter analytics, monitoring, and decision-making. Transform raw operational data into valuable insights for improved performance and reliability.",
    },
    {
      id: "t2",
      src: dv360,
      title: "Google DV360",
      description:
        "Manage, analyze, and optimize programmatic advertising campaigns using Google Display & Video 360. Unlock data-driven strategies to maximize engagement, reach, and ROI across digital platforms.",
    },
    {
      id: "t3",
      src: iot,
      title: "IoT Services",
      description:
        "Connect devices, systems, and data through intelligent IoT solutions that enhance automation, operational efficiency, and innovation. Empower your business with smart, data-driven ecosystems.",
    },
  ],
};

export default SevicesCardData;
