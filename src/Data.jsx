import digiCosmetics from "./assets/digiCosmetics.png";
import portfolio from "./assets/portfolio.png";
import appleStore from "./assets/appleStore.png";
import golsam from "./assets/golsam.png";

import Testimonial1 from "./assets/testimonial1.jpg";
import Testimonial2 from "./assets/testimonial2.jpg";
import Testimonial3 from "./assets/testimonial3.jpg";
import Testimonial4 from "./assets/testimonial4.jpg";
import Testimonial5 from "./assets/testimonial5.jpg";
import accounting from "./assets/accounting.png";
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiAntdesign } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  // {
  //   name: "Services",
  //   path: "services",
  // },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Resume",
    path: "resume",
  },
  // {
  //   name: "Testimonials",
  //   path: "testimonial",
  // },
  // {
  //   name: "Pricing",
  //   path: "pricing",
  // },
  // {
  //   name: "Blog",
  //   path: "blog",
  // },
  {
    name: "Contact",
    path: "contact",
  },
];

export const service = [
  {
    id: 1,
    name: "Web Development",
    title: "Custom Development",
    description:
      "I build stunning websites using React.js, Next.js, and modern JavaScript that aren't just beautiful, but also fast and interactive. Your ideas deserve a website that stands out from the crowd!",
  },
  {
    id: 2,
    name: "User Experience",
    title: "User Experience Design",
    description:
      "Let me craft an experience your users will love! I create intuitive, engaging interfaces that not only look great but feel natural to use, keeping your visitors coming back for more.",
  },
  {
    id: 3,
    name: "Web Optimization",
    title: "Speed Optimization",
    description:
      "Is your website crawling when it should be flying? I'll tune up your site's performance so it loads in a flash, boosting your SEO rankings and keeping impatient visitors from clicking away.",
  },
  {
    id: 4,
    name: "Web Maintenance",
    title: "Maintenance and Support",
    description:
      "Your website needs love too! I'll handle all the behind-the-scenes work—bug fixes, security updates, and content refreshes—so you can focus on what you do best: growing your business.",
  },
  {
    id: 5,
    name: "Interactive Effects",
    title: "Animations and Effects",
    description:
      "Want to wow your visitors? I'll bring your website to life with eye-catching animations and interactive elements using CSS, framer-motion, and three.js that will leave a lasting impression.",
  },
];

export const skill = [
  {
    id: 1,
    name: "HTML",
    percentage: 99,
    description:
      "Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.",
    icon: <FaHtml5 color="#E34F26" />,
  },

  {
    id: 2,
    name: "JavaScript",
    percentage: 90,
    description:
      "JavaScript is a scripting language used for creating dynamic web pages and web applications.",
    icon: <FaJsSquare color="#F7DF1E" />,
  },

  {
    id: 3,
    name: "React.js",
    percentage: 90,
    description:
      "A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.",
    icon: <FaReact color="#61DAFB" />,
  },

  {
    id: 4,
    name: "Next.js",
    percentage: 85,
    description:
      "Next.js is a React-based framework for building server-side rendered and statically generated web applications.",
    icon: <SiNextdotjs color="#000000" />,
  },

  {
    id: 5,
    name: "TypeScript",
    percentage: 75,
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.",
    icon: <SiTypescript color="#3178C6" />,
  },

  {
    id: 6,
    name: "Tailwind CSS",
    percentage: 80,
    description:
      "Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.",
    icon: <SiTailwindcss color="#38B2AC" />,
  },

  {
    id: 7,
    name: "Git",
    percentage: 80,
    description:
      "Git is a widely used version control system that is essential for collaborative development and project management.",
    icon: <FaGitAlt color="#F05032" />,
  },

  {
    id: 10,
    name: "RESTful API",
    percentage: 90,
    description:
      "RESTful API is an interface that two computer systems use to exchange information securely over the internet.",
    icon: <FaNodeJs color="#339933" />,
  },

  {
    id: 17,
    name: "React Query",
    percentage: 80,
    description:
      "React Query is a powerful data-fetching and state management library for React applications that simplifies server state handling.",
    icon: <FaReact color="#61DAFB" />,
  },

  {
    id: 24,
    name: "ANTDESIGN",
    percentage: 85,
    description:
      "Ant Design is an enterprise-class UI design language and React UI library with a set of high-quality components and demos.",
    icon: <SiAntdesign color="#0170FE" />,
  },
];

export const project = [
  {
    id: 1,
    img: accounting,
    category: "Commerce",
    title: "Accounting web",
    description:
      "Landing page designed for selling cosmetic products. It typically includes a visually appealing design, easy navigation, and clear product descriptions.",
    url: "https://drive.google.com/file/d/1fW_c0Hx5MFkM7_0oXn_-aOa_X4L6O2OL/view?usp=sharing",
    sourceUrl: "https://github.com/TuCongDanh12/DATN-v2.git",
  },

  {
    id: 2,
    img: portfolio,
    category: "Portfolio",
    title: "Developer Portfolio",
    description:
      "This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.",
    url: "https://portfolio-steel-mu-10.vercel.app/#home",
    sourceUrl: "https://github.com/TuCongDanh12/portfolio",
  },

  // {
  //   id: 3,
  //   img: appleStore,
  //   category: "Ecommerce",
  //   title: "New Apple Store",
  //   description:
  //     "The new Apple Store landing page is a web page designed for showcasing and promoting Apple products, services, and features.",
  //   url: "https://newapplestore.netlify.app/",
  //   sourceUrl: "https://github.com/khakiiman/applestore",
  // },

  // {
  //   id: 4,
  //   img: golsam,
  //   category: "Blog",
  //   title: "Golsam Sepahan",
  //   description:
  //     "A new design blog provides informative content related to the agricultural industry, including tips and advice on the use of fertilizers and pesticides. ",
  //   url: "https://golsamsepahan.netlify.app",
  //   sourceUrl: "https://github.com/khakiiman/golsam-sepahan",
  // },
];

export const cv = [
  {
    id: 1,
    title: "University of Technology",
    subtitle: "Faculty of Computer Science",
    date: "10/2020 - 11/2024",
    description:
      "The Computer Science program at the University of Technology provides in-depth knowledge of programming, algorithms, and software development.",
    category: "education",
  },

  {
    id: 2,
    title: "TOEIC Certificate",
    subtitle: "TOEIC 660",
    date: "",
    description:
      "TOEIC certificate with a score of 660, demonstrating proficiency in English for international work environments.",
    category: "education",
  },

  {
    id: 3,
    title: "Software Development with Scrum Certificate",
    subtitle: "Scrum Methodology",
    date: "",
    description:
      "The Software Development with Scrum certificate provides knowledge of agile software development and project management using the Scrum methodology.",
    category: "education",
  },

  {
    id: 4,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "0000 - 0000",
    description: "Coming Soon...",
    category: "education",
  },

  {
    id: 5,
    title: "Frontend Developer",
    subtitle: "Gira Tech",
    date: "4/2024- 7/2024",
    description:
      "Developed a responsive UI, integrated with backend APIs, and optimized for performance and cross-browser compatibility",
    category: "experience",
  },

  {
    id: 6,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },

  {
    id: 7,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },

  {
    id: 8,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },
];

export const testimonial = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description: "Coming Soon...",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description: "Coming Soon...",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description: "Coming Soon...",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description: "Coming Soon...",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description: "Coming Soon...",
  },
];

export const post = [
  {
    id: 1,
    date: "October 31, 2022",
    imgURL:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png",
    title: "Introduction to React Hooks",
    description:
      "Learn how to use React Hooks to simplify state management and improve performance in your frontend applications.",
  },
  {
    id: 2,
    date: "November 19, 2022",
    imgURL: "https://softagency.in/wp-content/uploads/2023/02/vuejsfeat.jpg",
    title: "Getting Started with Vue.js",
    description:
      "Explore the basics of Vue.js, a progressive JavaScript framework for building user interfaces.",
  },
  {
    id: 3,
    date: "April 12, 2022",
    imgURL:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qF8LfAwUhl57g9T0BVvVdg.jpeg",
    title: "Best Practices for Responsive Web Design",
    description:
      "Discover the key principles and techniques for creating responsive web designs that look great on any device.",
  },
  {
    id: 4,
    date: "March 5, 2022",
    imgURL:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--CHCog3Bn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/3200/1%2AtiS4RzayAJdIeTEkNL1ztw.png",
    title: "Mastering CSS Flexbox",
    description:
      "Get up to speed with CSS Flexbox, a powerful layout tool for building modern, flexible, and responsive web designs.",
  },
  {
    id: 5,
    date: "June 25, 2022",
    imgURL:
      "https://silktide.com/app/uploads/2021/05/We-analyzed-6554-websites-1024x576.jpg",
    title: "Creating Accessible Web Content",
    description:
      "Learn how to make your web content more accessible to users with disabilities, including tips for designing for screen readers and other assistive technologies.",
  },
  {
    id: 6,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OyXMz4TaaY4FJOg00N6c7zsYKuqAAA8VUA&usqp=CAU",
    title: "10 Tips for Writing Clean Code in JavaScript",
    description:
      "Discover best practices for writing clean, maintainable, and efficient JavaScript code that will help you become a better developer.",
  },
  {
    id: 7,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lU_0yLYzO5o9oKAeShqM-8y_s1BWudtcyQ&usqp=CAU",
    title: "The Future of Frontend Development: What to Expect in 2022",
    description:
      "Explore the latest trends and technologies in frontend development.",
  },
  {
    id: 8,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuqChNWRh2a5AbtgPZYPnAogzqDsBQ-dAg&usqp=CAU",
    title: "10 Essential Tools for Every Frontend Developer",
    description:
      "Check out our list of must-have tools for frontend developers, from code editors.",
  },
  {
    id: 9,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpPs_cWDHKLvC45gy0btz4sNfD9LOArjcdA&usqp=CAU",
    title: "Mastering the Fundamentals of Web Development",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript, and start building your own web applications from scratch.",
  },
  {
    id: 10,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KXJ50sZkMTcGcKBRpGj3Vnwz8g6iTnqKSQ&usqp=CAU",
    title: "Creating Beautiful and Responsive UI Designs with CSS Grid",
    description:
      "Get up to speed with CSS Grid, a powerful layout tool for creating complex and responsive user interfaces that adapt to any screen size.",
  },
];
