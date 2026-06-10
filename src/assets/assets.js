import {
  FaCode,
  FaDesktop,
  FaMicrochip,
  FaMobile,
  FaReact,
  FaRProject,
  FaSchool,
} from "react-icons/fa6";
import profileImg from "./img.jpeg";
import { FaProjectDiagram } from "react-icons/fa";

import passwordImg from '../assets/passwordImg.jpg';
import todoImg from '../assets/todoImg.jpg';
import calculatorImg from '../assets/calculatorImg.png';
import fooliveryImg from '../assets/fooliveryImg.png';
import weatherImg from '../assets/weatherImg.jpg';
import snakeImg from '../assets/snakeImg.png';
import templateImg from '../assets/templateImg.png';

export const assets = {
  profileImg,
  passwordImg,
  todoImg,
  calculatorImg,
  fooliveryImg,
  weatherImg,
  snakeImg,
  templateImg,
};

export const navMenu = [
  "Home",
  "Work",
  "Skills",
  "About",
  "Education",
  "Contact",
];

export const skillsData = [
  {
    icon: FaReact,
    title: "Frontend",
    technologies: ["HTML", "CSS", "TailwindCss", "JavaScript", "React.js"],
  },
  {
    icon: FaMicrochip,
    title: "Backend",
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    icon: FaDesktop,
    title: "UI/UX",
    technologies: ["Responsive Design",  "Modern UI", "User Experience"],
  },
  {
    icon: FaCode,
    title: "Tools",
    technologies: ["VS Code", "Git", "Github", "Vite", "Postman", "Thunder"],
  },
  // {
  //     icon: FaMobile,
  //     title: 'Mobile',
  //     technologies: ['React Native', 'Android', 'Flutter', 'Java']
  // },
];

export const projectData = [
  {
    title: "Health Care",
    description: "Immersive shopping experience with python tailwind and react",
    image:
      "https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["React", "Tailwindcss", "Python"],
  },
  {
    title: "Foolivery",
    description:
      "Designed a responsive React.js frontend for a seamless user experience on all devices.",
    image:
      fooliveryImg,
    tech: ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"],
  },
  {
    title: "Password Generator",
    description:
      "Developed a secure Password Generator using React.js and Tailwind CSS with customizable password options, clipboard functionality, and responsive UI design.",
    image:
      passwordImg,
      tech: ["HTML", "Tailwindcss", "JavaScript", "React"],
  },
  {  
    title: "Weather App",
    description: "Built a responsive Weather App using React.js that provides real-time weather updates and forecasts based on user location or city search.",
    image:
    weatherImg,
    tech: ["HTML", "Tailwindcss", "JavaScript", "React"],
  },
  {
    title: "Todo List",
    description: "This is a responsive todo app features including adding, editing, completing, and deleting tasks.",
    image:
    todoImg,
    tech: ["HTML", "Css", "JavaScript"],
  },
  {
    title: "Calculator",
    description: "Built a modern and responsive Calculator using JavaScript with real-time calculations and a clean UI.",
    image:
    calculatorImg,
    tech: ["HTML", "Css", "JavaScript"],
  },
  {
    title: "Snake Game",
    description: "Built a classic Snake Game using JavaScript with smooth controls and real-time score tracking.",
    image:
    snakeImg,
    tech: ["HTML", "Css", "JavaScript"],
  },
  {
    title: "Burger Template",
    description: "Built a modern and responsive Burger Template using HTML and CSS with an attractive layout and clean design.",
    image:
    templateImg,
    tech: ["HTML", "Css"],
  },
];

export const profileData = [
  {
    icon: FaCode,
    title: "Language",
    technologies: ["Python", "C", "C++", "Core Java"],
  },
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["Bachelor in Compuer Application"],
  },
  {
    icon: FaProjectDiagram,
    title: "Projects",
    technologies: ["Built more than 5+"],
  },
];
