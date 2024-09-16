import {
  mobile,
  research,
  teach,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  postman,
  swift,
  git,
  figma,
  docker,
  cornell,
  mamelodi,
  spa,
  threejs,
  munchies,
  oasis,
  portfolio,
  disney
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Research & Data Analysis",
    icon: research,
  },
  {
    title: "Teaching & Instruction",
    icon: teach,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Postman", 
    icon: postman,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Systems Planning and Analysis Inc.",
    icon: spa,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developing and designing web-based applications for deployment on client SharePoint sites using Typescript, JS Web Components, Bootstrap, C# and related technologies.",
      "Developing new analytical tools and maintaining modeling and simulation tools",
      "Collaborating with program managers, technical leads, and the development team to deliver high-visibility software solutions to external customers and internal stakeholders.",
      "Presenting and training on products and deliverables to both technical and non-technical audiences.",
    ],
  },
  {
    title: "Software Development Research Assistant",
    company_name: "Cornell SC Johnson Food Industry Management Program",
    icon: cornell,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - May 2023",
    points: [
      "Deciphered and organized undocumented VBA code using Excel to improve the operational decision-making algorithms of Cornell's Supermarket Simulation, which is used annually by 70+ global executives.",
      "Reprogrammed and enhanced the VBA-based simulation by converting its functionality to Python."
    ],
  },
  {
    title: "Mathematics and Programming Instructor",
    company_name: "The Mamelodi Initiative South Africa",
    icon: mamelodi,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Designed and implemented structured lesson plans tailored to diverse learning styles of high school students. Encouraged student engagement through dynamic class discussions, fostering a collaborative learning environment.",
      "Enhanced student performance by introducing active learning approaches, providing individualized tutoring, and conducting regular progress assessments. Reinforced key concepts through repetition and tailored support, contributing to a 17% improvement in exam results.",
    ],
  }
];

const testimonials = [
  {
    title: "grad",
    image: ,
    text: "I graduated from Cornell University. BS - Interdisciplinary Studies, Concentrating in Computer Science, Food Science, and Biology",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Personal Portfolio",
    description:
      "A web-based interactive portfolio that showcases my work and background.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "blender",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/janetko/3D-Portfolio/",
  },
  {
    name: "Disney Plus Clone",
    description:
      "A replica of a popular web-based streaming platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/janetko/disney-plus-clone/",
  },
  {
    name: "Munchies",
    description:
      "A mobile iOS application that allows Cornell students to review dining halls.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "swift",
        color: "green-text-gradient",
      },
      {
        name: "uikit",
        color: "pink-text-gradient",
      },
    ],
    image: munchies,
    source_code_link: "https://github.com/janetko/munchies-frontend/",
  },
  {
    name: "Oasis",
    description:
      "A mobile iOS mental health and wellness application that serves to uplift and connect students at Cornell.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql-alchemy",
        color: "green-text-gradient",
      },
      {
        name: "google-cloud",
        color: "pink-text-gradient",
      },
      {
        name: "postman",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: oasis,
    source_code_link: "https://github.com/janetko/Oasis/tree/Backend/",
  },
];

export { services, technologies, experiences, testimonials, projects };