
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "PHP Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Salesforce Consultant",
        icon: creator,
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Computer Science DUT",
        company_name: "IUT Aix-Marseille",
        icon: starbucks,
        iconBg: "#383E56",
        date: "September 2020 - August 2022",
        points: [
            "Knowledge of programming languages (C, C++, Java, Python, HTML, CSS, JavaScript, PHP, SQL, etc.)",
            "Knowledge of operating systems (Windows, Linux, MacOS)",
            "Knowledge of computer networks (TCP/IP, OSI, etc.)",
            "Knowledge of databases (MySQL, Oracle, etc.)",
        ],
    },
    {
        title: "Big Data & E-Commerce professional degree",
        company_name: "IUT Aix-Marseille",
        icon: starbucks,
        iconBg: "#383E56",
        date: "September 2022 - August 2023",
        points: [
            "Learning Big Data technologies (PHP, Laravel, etc.)",
            "Professionalisation of E-Commerce skills (B2B, B2C, etc.)",
            "Learning web development technologies (HTML, CSS, JavaScript, etc.)",
            "Project management (Agile method, Scrum, etc.)",
        ],
    },
    {
        title: "Expert Dev Ops",
        company_name: "Ynov Aix-en-Provence",
        icon: shopify,
        iconBg: "#9292ac",
        date: "September 2023 - August 2025",
        points: [
            "Adapting development tools and methods to the company's needs",
            "Implement monitoring and supervision tools",
            "Automate deployment and maintenance tasks",
            "Guaranteeing the security of applications and data",
        ],
    },
    {
        title: "Consultant Technique Salesforce",
        company_name: "Tvh Consulting",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - July 2024",
        points: [
            "Developing and maintaining web applications using JavaScript, HTML, and CSS.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
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
        name: "Project Tesla",
        description:
            "This 2022/2023 project aims to offer Tesla users the greatest possible comfort. It includes an application system similar to those available on operating systems, but with a new design and tricks developed.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tesla,
        source_code_link: "https://github.com/Tesla-App-Project/Tesla-App-Project-Repo",
    },
    {
        name: "Webservices Api Reservations/Movies",
        description:
            "This project is a REST API that allows you to manage reservations for movies. It includes an authentication system and a system for managing movies.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://gitlab.com/CalixteManaud/webservice-reservations",
    },
    {
        name: "Flex Office",
        description:
            "This was my very first project on Salesforce to understand the tools and the interaction between code and admin. This project allows you to book a weather reservation with certain rules on the reservation.",
        tags: [
            {
                name: "Apex",
                color: "blue-text-gradient",
            },
            {
                name: "Salesforce",
                color: "green-text-gradient",
            },
            {
                name: "LWC",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/CalixteManaud/Flex-Office",
    },
];

export { services, technologies, experiences, testimonials, projects };
