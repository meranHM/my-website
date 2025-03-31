import project1Img from "../assets/projects/cyberpunk-portfolio/thumbnail.png"

//Header NavBar
export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/home",
    },
    {
        id: "1",
        title: "Projects",
        url: "/home/projects",
    },
    {
        id: "2",
        title: "About",
        url: "/home/about",
    },
    {
        id: "3",
        title: "Contact",
        url: "/home/contact",
    }
]

// Main Terminal Welcome Messages
export const welcomeMessage1 = [
    "SYSTEM BOOTING...",
    "CONNECTION ESTABLISHED...",
    "ACCESS GRANTED",
    "WELCOME, OPERATIVE",
]

export const welcomeMessage2 = [
    "INITIALIZING SYSTEM...",
    "LOADING CORE MODULES...",
    "SYSTEM CHECKS PASSED...",
    "BOOT COMPLETE. WELCOME, OPERATIVE.",
]

export const welcomeMessage3 = [
    "USER AUTHENTICATION IN PROGRESS...",
    "BIOMETRIC DATA VERIFIED...",
    "SECURITY CLEARANCE ACCEPTED...",
    "ACCESS GRANTED. WELCOME BACK.",
]

export const welcomeMessage4 = [
    "RETRIEVING MISSION FILES...",
    "DECRYPTION SUCCESSFUL...",
    "TARGET COORDINATES LOCKED...",
    "MISSION STATUS: ACTIVE. PROCEED WITH CAUTION.",
]

export const welcomeMessage5 = [
    "ESTABLISHING SECURE CONNECTION...",
    "ENCRYPTION KEY EXCHANGED...",
    "DATA STREAM SYNCHRONIZED...",
    "CONNECTION STABLE. READY FOR TRANSMISSION.",
]

export const welcomeMessage6 = [
    "CONSCIOUSNESS INITIALIZING...",
    "MEMORY BANKS LOADED...",
    "LOGIC MODULES OPTIMIZED...",
    "AI ONLINE. AWAITING COMMANDS.",
]

export const allWelcomeMessages = [ 
    welcomeMessage1, 
    welcomeMessage2, 
    welcomeMessage3,
    welcomeMessage4,
    welcomeMessage5,
    welcomeMessage6
]


// Main Terminal AsciiArt Logo
export const asciiArt = `
 _______ _______ _______ ______ _______ _______ 
|   |   |    ___|   |   |   __ \   _   |    |  |
|       |    ___|       |      <       |       |
|__|_|__|_______|___|___|___|__|___|___|__|____|
                                                
`

// Terminal Commands
export const commands = [
    "help",
    "clear",
    "cd home",
    "cd projects",
    "cd about",
    "cd contact",
]


// Skills
export const skills = [
    {
        title: "HTML",
        stack: "Frontend",
        category: "Language",
        size: "col-span-1 row-span-1",
        color: "text-color-neonOrange",
    },
    {
        title: "CSS",
        stack: "Frontend",
        category: "Language",
        size: "col-span-1 row-span-1",
        color: "text-color-neonDeepBlue",
    },
    {
        title: "Git",
        stack: "Fullstack",
        category: "Tool",
        size: "col-span-1 row-span-1",
        color: "text-color-neonRed",
    },
    {
        title: "JavaScript",
        stack: "Frontend",
        category: "Language",
        size: "col-span-2 row-span-1",
        color: "text-color-neonYellow",
    },
    {
        title: "TypeScript",
        stack: "Frontend",
        category: "Language",
        size: "col-span-1 row-span-1",
        color: "text-color-neonBlue",
    },
    {
        title: "React",
        stack: "Frontend",
        category: "Framework",
        size: "col-span-2 row-span-1",
        color: "text-color-neonCyan",
    },
    {
        title: "React Router",
        stack: "Frontend",
        category: "Framework",
        size: "col-span-1 row-span-1",
        color: "text-color-neonWhite",
    },

    {
        title: "Next.js",
        stack: "Fullstack",
        category: "Framework",
        size: "col-span-3 row-span-1",
        color: "text-color-neonWhite",
    },
    {
        title: "Tailwind CSS",
        stack: "Frontend",
        category: "Framework",
        size: "col-span-2 row-span-1",
        color: "text-color-neonTeal",
    },

    {
        title: "SASS",
        stack: "Frontend",
        size: "col-span-1 row-span-1",
        color: "text-color-neonPink",
    },
    {
        title: "Framer Motion",
        stack: "Frontend",
        category: "UI/UX",
        size: "col-span-2 row-span-1",
        color: "text-color-neonViolet",
    },
    {
        title: "GSAP",
        stack: "Frontend",
        category: "UI/UX",
        size: "col-span-1 row-span-1",
        color: "text-color-neonGreen",
    },
    {
        title: "Vite",
        stack: "Frontend",
        category: "Tool",
        size: "col-span-2 row-span-1",
        color: "text-color-neonMagenta",
    },
    {
        title: "Webpack",
        stack: "Frontend",
        category: "Tool",
        size: "col-span-1 row-span-1",
        color: "text-color-neonDeepBlue",
    },
]


// Mini Terminal Messages
export const miniTerminalMessageHero = `SYSTEM ONLINE...  
WELCOME TO THE CYBER GRID`

export const miniTerminalMessageSkills = `CORE SYSTEMS INITIALIZED...
STATUS: ONLINE`

export const miniTerminalMessageProjects = `ACCESS GRANTED TO THE MAINFRAME...
DATA STREAM: ACTIVED`

export const miniTerminalMessageCTA = `CONNECTION REQUEST DETECTED...  
ESTABLISHING SECURE LINK...  
STATUS: CONNECTION STABLE  
AWAITING USER INPUT...`  

export const miniTerminalMessageBlog = `DATA NODES LOCATED...
DECODING LATEST LOG ENTRIES...  
ACCESSING KNOWLEDGE ARCHIVE...`




// Projects
export const projects = [
    {
        id: 1,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: "/images/cyberpunk-portfolio.png"
    },
    {
        id: 2,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
    {
        id: 3,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
    {
        id: 4,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
    {
        id: 5,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
    {
        id: 6,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
    {
        id: 7,
        title: "Cyberpunk Portfolio",
        description: "A futuristic portfolio website with a hacker aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: project1Img,
        liveDemo: "https://example.com",
        repo: "https://github.com/meranHM/my-website",
        featured: true,
        date: "2025-03-28",
        status: "In Progress",
        tag: "Portfolio",
        video: project1Img
    },
]

// System Diagnostic Content
export const skillSet = [
    { name: "JavaScript", level: 92, color: "bg-color-neonYellow/60" },
    { name: "React", level: 89, color: "bg-color-neonCyan/60" },
    { name: "Next.js", level: 85, color: "bg-color-neonWhite/60" },
    { name: "TypeScript", level: 80, color: "bg-color-neonBlue/60" },
    { name: "Tailwind CSS", level: 90, color: "bg-color-neonTeal/60" },
    { name: "Framer Motion", level: 78, color: "bg-color-neonViolet/60" },
    { name: "Git & GitHub", level: 88, color: "bg-color-neonRed/60" },
  ]

export const logs = [
    "Initializing system scan...",
    "Fetching core skill data...",
    "Analyzing efficiency levels...",
    "Processing AI diagnostics...",
    "Compiling system performance report...",
    "Optimization complete. STATUS: STABLE.",
  ]


