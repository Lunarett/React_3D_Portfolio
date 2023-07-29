import {
    //Projects
    rsr1,
    rsr2,
    rsr3,
    rsr4,
    rsr5,

    hs1,
    hs2,
    hs3,
    hs4,
    hs5,

    gen1,
    gen2,
    gen3,

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
        page: "home",
        id: "",
        title: "Home",
    },
    {
        page: "home",
        id: "about",
        title: "About",
    },
    {
        page: "home",
        id: "work",
        title: "Work Experience",
    },
    {
        page: "home",
        id: "qualification",
        title: "Qualifications"
    },
    {
        page: "project",
        id: "project",
        title: "Projects",
    },
    {
        page: "home",
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
        title: "Ready Set Roll!",
        desc: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        photos: [rsr1, rsr2, rsr3, rsr4, rsr5],
        gitLink: "https://github.com/Lunarett",
        tags: ["Unreal Engine", "Blueprints"]
    },
    {
        title: "Heist Simulator",
        desc: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        photos: [hs1, hs2, hs3, hs4, hs5],
        gitLink: "https://github.com/Lunarett",
        tags: ["C#", "Unity", "FMOD"]
    },
    {
        title: "Terrain Generator",
        desc: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        photos: [gen1, gen2, gen3],
        gitLink: "https://github.com/Lunarett",
        tags: ["C#", "XAML", "WPF"]
    },
];

export { services, technologies, experiences, qualifications, projects };