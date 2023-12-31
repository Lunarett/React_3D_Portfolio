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

    ll1,
    ll2,
    ll3,
    ll4,
    ll5,

    wp1,
    wp2,

    r3d1,

    dx1,
    dx2,

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
    uiDesignDark,
    reactDevDark,
    gameDevDark,

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
        iconLight: uiDesign,
        iconDark: uiDesignDark,
    },
    {
        title: "React.js Developer",
        iconLight: reactDev,
        iconDark: reactDevDark,
    },
    {
        title: "Game Developer",
        iconLight: gameDev,
        iconDark: gameDevDark,
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
        iconBG: "#fff",
        date: "2021 - 2022",
    },
    {
        course: "Audio Engineering",
        qualification: "Bachelors of Arts",
        name: "Middlesex & SAE Institute",
        icon: ms_logo,
        iconBG: "#ff0000",
        date: "2016 - 2021",
    }
]

const projects = [
    {
        title: "Little Lemon - Restaurant Website",
        desc: "Little Lemon is a fully responsive website for a restaurant that was made using React. It contains all the usual fields a website for a restaurant might have, such as reservations page, login page, etc.",
        photos: [ll1, ll2, ll3, ll4, ll5],
        gitLink: "https://github.com/Lunarett/little-lemon",
        tags: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "My 3D Portfolio",
        desc: "A portfolio website that demonstrates all of my skills in frontend development, and working with external libraries such as Three.js and Tailwind CSS.",
        photos: [r3d1],
        gitLink: "https://github.com/Lunarett/React_3D_Portfolio",
        tags: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Three.js"]
    },
    {
        title: "Ready Set Roll!",
        desc: "Ready Set Roll is a local multiplayer game that challenges you to race through a colorful toy block world as hamster balls. The game is developed using Unreal Engine 4 and features dynamic physics and interactive obstacles. Your main goal is to stay on the track and reach the finish line before your opponents. Ready Set Roll is a fun and engaging game for all ages.",
        photos: [rsr1, rsr2, rsr3, rsr4, rsr5],
        gitLink: "https://github.com/Lunarett/-BallGame",
        tags: ["Unreal Engine", "Blueprints", "C++"]
    },
    {
        title: "Whispurr Messenger",
        desc: "This project is a simple messenger application developed in Windows Presentation Forms (WPF) that allows users to connect to a server and chat with each other.",
        photos: [wp1, wp2],
        gitLink: "https://github.com/Lunarett/Whispurr",
        tags: ["C#", "Networking", "WPF", "MVVM"]
    },
    {
        title: "Heist Simulator",
        desc: "Heist Simulator is a thrilling game developed in Unity, where you have to balance between looting cash and fighting off waves of cops. The game challenges you to survive as long as you can while the police forces become more numerous and tougher. How much money can you make before you get caught?",
        photos: [hs1, hs2, hs3, hs4, hs5],
        gitLink: "https://github.com/Brombaer/Rob-a-Bank-Simulator",
        tags: ["C#", "Unity", "FMOD"]
    },
    {
        title: "Terrain Generator",
        desc: "Heightmap Generator is a tool for creating heightmaps and textures created using windows presentation forms. It is developed for designers and artists who need to generate realistic terrain for their projects. The tool allows you to adjust various parameters to customize the heightmap. You can also export the heightmap as a .png file or save the project for later editing.",
        photos: [gen1, gen2, gen3],
        gitLink: "https://github.com/Lunarett/MyTerrainTool",
        tags: ["C#", "XAML", "WPF", "Multi-Threading"]
    },
    {
        title: "DirectX 11 - Object Rednering",
        desc: "A simple program that loads .obj files and renders them using specified shaders.",
        photos: [dx1, dx2],
        gitLink: "https://github.com/Lunarett/LunarEngine_DX11",
        tags: ["C++", "DirectX", "HLSL"]
    },
];

export { services, technologies, experiences, qualifications, projects };