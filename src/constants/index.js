import {
    // Tech
    c,
    cpp,
    cs,
    unity,
    ue,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    threejs,

    // Services
    uiDesign,
    reactDev,
    gameDev,

    // Experience and Qualification Logos
    sc_logo,
    si_logo,
    ms_logo,
    sae_logo,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work Experience",
    },
    {
        id: "qualification",
        title: "Qualifications"
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Designer",
        icon: uiDesign,
    },
    {
        title: "React.js Developer",
        icon: reactDev,
    },
    {
        title: "Game Developer",
        icon: gameDev,
    },
];

const technologies = [
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "C Sharp",
        icon: cs,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Unreal Engine",
        icon: ue,
    },
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
        name: "React JS",
        icon: reactjs,
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
];

const experiences = [
    {
        title: "Game Developer - Unreal Engine",
        company_name: "Sunrise Intelligence",
        icon: si_logo,
        iconBg: "#000",
        date: "July 2022 - December 2022",
        points: [
            "Developed mobile menu system and contributed to in-game user interface (UI) development.",
            "Designed and implemented debugging tools using Unreal Engine 4, improving bug detection.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Created comprehensive test cases within Unreal Engine 4 to ensure software quality and functionality",
        ],
    },
    {
        title: "Game Developer - Unity",
        company_name: "Semper Cozy",
        icon: sc_logo,
        iconBg: "#fff",
        date: "June 2021 - December 2021",
        points: [
            "Successfully developed a menu system, including a deck builder, for the Wolves of Rome project, enhancing player engagement and gameplay progression.",
            "Contributed to the development of gameplay mechanics and shaders for an unannounced project, ensuring immersive and visually appealing gaming experiences.",
        ],
    },
];

const qualifications = [
    {
        course: "Games Programming",
        qualification: "Diploma",
        name: "SAE Institute",
        icon: sae_logo,
        date: "2021 - 2022"
    },
    {
        course: "Audio Engineering",
        qualification: "Bachelors of Arts",
        name: "Middlesex & SAE Institute",
        icon: ms_logo,
        date: "2016 - 2021"
    }
]

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: {},
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: {},
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: {},
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, qualifications, projects };