// HomeData.js
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WebIcon from '@mui/icons-material/Web';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import StorageIcon from '@mui/icons-material/Storage';

const HomeData = {
  HeroData: [
    {
      BackgroundImg:
        'https://i.pinimg.com/736x/d3/80/7e/d3807e413bc4736d111db77dc2ea5fdc.jpg',
      HeroTitle:
        'Welcome to SmartMatrix Digital Services Pvt. Ltd.',
      HeroSubTitle:
        'We are a team of talented people making applications with different technologies',
      CloudImages: [
        { src: 'https://i.postimg.cc/PrMrJc9d/cloud1.png', index: 1 },
        { src: 'https://i.postimg.cc/fRTW9CQm/cloud2.png', index: 2 },
        { src: 'https://i.postimg.cc/sg6j9W38/cloud3.png', index: 3 },
        { src: 'https://i.postimg.cc/LsGmGMY3/cloud4.png', index: 4 },
        { src: 'https://i.postimg.cc/jjDs8j5j/cloud5.png', index: 5 },
        { src: 'https://i.postimg.cc/PrMrJc9d/cloud1.png', index: 6 },
        { src: 'https://i.postimg.cc/fRTW9CQm/cloud2.png', index: 7 },
        { src: 'https://i.postimg.cc/sg6j9W38/cloud3.png', index: 8 },
        { src: 'https://i.postimg.cc/LsGmGMY3/cloud4.png', index: 9 },
        { src: 'https://i.postimg.cc/jjDs8j5j/cloud5.png', index: 10 },
      ],
    },
  ],

  cardData: [
    {
      title: 'Cloud computing',
      copy:
        'Cloud migration, cloud infrastructure design and implementation, cloud application development and deployment, cloud security, and cloud management.',
      button: 'View Trips',
      backgroundImg:
        'https://i.pinimg.com/736x/46/78/86/467886df71853b028c28068cf82d8790.jpg',
      icon: CloudQueueIcon,
    },
    {
      title: 'Web design',
      copy:
        'Website design and development, Web hosting, Email Hosting, Website redesign, website maintenance, and e-commerce website development.',
      button: 'View Trips',
      backgroundImg:
        'https://i.pinimg.com/736x/96/40/6c/96406ccfa51f1b2e773381079ff380e8.jpg',
      icon: WebIcon,
    },
    {
      title: 'Project management',
      copy:
        'Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project.',
      button: 'Book Now',
      backgroundImg:
        'https://i.pinimg.com/736x/99/70/8a/99708a82a298a106358b8cc7f85212e8.jpg',
      icon: PendingActionsIcon,
    },
    {
      title: 'Big Data',
      copy:
        'Big data primarily refers to data sets that are too large to be dealt with by traditional data-processing application software. Data with many entries offer greater statistical power.',
      button: 'Book Now',
      backgroundImg:
        'https://i.pinimg.com/736x/95/09/3d/95093df47027167ce6a9009287d2fbd1.jpg',
      icon: StorageIcon,
    },
  ],

  FeatureSectionData: [
    {
      title: 'Technical support and maintenance',
      content:
        "Devcons Software Solutions Pvt. Ltd. offers technical support and maintenance services to ensure that software applications run smoothly and are updated regularly. We track performance metrics, security vulnerabilities, and user behavior, providing insights to ensure smooth sailing. Beyond bug fixes and updates, our comprehensive technical support and maintenance services proactively safeguard the software investments, keeping them future-proof and performing at their peak. We ensure that the systems run smoothly, securely, and always ready for what's next.",
      images: 'https://devconsoftware.com/assets/img/features-1.svg',
      backgroundImage:
        'https://i.pinimg.com/736x/cd/6f/a9/cd6fa98b64ed44a096fb555fbc065b28.jpg',
    },
    {
      title: 'Big data analytics',
      content:
        'Devcons Software Solutions Pvt. Ltd. specializes in big data analytics to help businesses make better decisions by analyzing large volumes of data. We dive deep into the vast stores of information, employing sophisticated algorithms and data visualization tools to unearth hidden patterns, predict trends, and optimize decision-making across all levels of your organization. We transcend mere data crunching to empower businesses through our big data analytics expertise. Our data scientists translate complex analytics into tangible business results.',
      images: 'https://i.pinimg.com/736x/f3/ed/e7/f3ede74360be860ab11d1c4b1e898189.jpg',
      backgroundImage:
        'https://i.pinimg.com/736x/35/9b/74/359b74ab254bc1cd59a661c4a2e258f3.jpg',
    },
    {
      title: 'Artificial intelligence and machine learning',
      content:
        "Devcons Software Solutions Pvt. Ltd. offers AI and machine learning services to help businesses leverage these emerging technologies to improve their operations and stay competitive. We unlock the true potential of these transformative technologies, propelling the business towards greater efficiency and innovation. We unleash the alchemy of AI, fusing intelligent algorithms with your existing data and workflows. We're not just about algorithms and code; we're your trusted partner in harnessing the power of AI to solve your unique business challenges.",
      images: 'https://devconsoftware.com/assets/img/features-1.svg',
      backgroundImage:
        'https://i.pinimg.com/736x/0f/44/ca/0f44ca9c78bbd43218fb05622774eb9b.jpg',
    },
  ],
};

export default HomeData;
