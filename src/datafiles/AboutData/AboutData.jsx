
import WindowIcon from '@mui/icons-material/Window';
import LanguageIcon from '@mui/icons-material/Language';
import AdbIcon from '@mui/icons-material/Adb';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import about_hero from "../../assets/about_hero.jpg";
// import HomeVideo from "../../assets/HomeVideo.mp4";
import about_card from "../../assets/about_card.jpg";


const AboutData = {
    AboutHero: [
        {
            backgroundImage: about_hero,
            title: "Welcome to SmartMatrix Digital Services Pvt. Ltd.",
            description: "Welcome, and thank you for visiting SmartMatrix Digital Services Pvt. Ltd. We're delighted to have you here as we share a glimpse into who we are, what we do, and why we're passionate about it. To know more about Healthcare services click below."
        }
    ],

    AboutCard: [  
        {
            Heading: "About Us",
            title: "At  SmartMatrix Digital Services Pvt. Ltd., we believe in the power of collaboration and the strength of our team. Each member brings a unique set of skills, expertise, and personality to our organization, contributing to our collective success.", 
            // video: HomeVideo,
            image: about_card,
            description: "SmartMatrix Digital Services Pvt Ltd is a software company that specializes in providing custom software development and IT consulting services. Based in India, the company has a team of skilled software developers, engineers, and designers who work together to create high-quality software products and services for clients."
        }
    ],


    visionMissionValues : [
        {
          title: "Our Vision",
          description: "Transforming the digital landscape through innovative software solutions that redefine the way individuals and organizations engage with technology, fostering efficiency, empowerment, and sustainable growth for the future is our vision.",
        },
        {
          title: "Our Mission",
          description: "Empowering businesses and individuals worldwide by delivering cutting-edge software solutions that enhance productivity, streamline processes, and drive digital transformation, while prioritizing security, reliability, and customer satisfaction as the cornerstone of our mission.",
        },
        {
          title: "Our Values",
          description: "Our Values  SmartMatrix Digital Services Pvt. Ltd. is driven by a commitment to innovation, integrity, customer satisfaction, collaboration, and excellence while embracing adaptability and social responsibility as core values.",
        },
    ],

    ContentData:[
      {
        icon:WindowIcon,
        title: "Software Designing",
        description: "We provide all commercial or organizational software development service at minimal cost.",
      },
      {
        icon:LanguageIcon,
        title: "Web Designing",
        description: "We make web designing responsive so you can use your website on all modern devices like smartphone, tablet, or desktop."
      },
      {
        icon:AdbIcon,
        title: "App Development",
        description: "If you want to expand your business with android app, SMART SOFTWARE SERVICES is the right thing.",
      },
      {
        icon:WebStoriesIcon,
        title: "Logo Designing",
        description:"We have certified designer who make logo to keep in mind with company motto."
      },

      
      {
        icon:BrandingWatermarkIcon,
        title: "Branding",
        description: "Smart Software provide branding service to growth your bussiness.",
      },

      {
        icon:ScreenSearchDesktopIcon,
        title: "SEO",
        description: "Our team help your bussiness with search engine optimazation.",
      },
      {
        icon:FilterDramaIcon,
        title: "Web Hosting",
        description: "We provide web hosting as well as per your business requirement.",
      },
      {
        icon:WindowIcon,
        title: "Digital Markiting",
        description:"Digital marketing is the right solution for your bussiness then get back with us.",
      },
    ]
};

export default AboutData;
