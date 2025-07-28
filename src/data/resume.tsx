import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText, MapPin } from "lucide-react";

export const DATA = {
  name: "Abhi Sharma",
  initials: "AS",
  url: "https://abhilo.dev",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software Engineer.",
  summary:
    "I'm currently a **computer science student** at the University of Toronto, focused on building and scaling my own software projects alongside my studies. In the past, I've interned at companies like **RBC**, **IBM**, and **Manulife**, where I worked on projects involving **data engineering**, **AI**, and **automation**. I've also explored areas like **design thinking** and **sustainable development**—always aiming to build tech that's **practical**, **impactful**, and rooted in **real-world problem-solving**.",
  avatarUrl: "/me.png",
  skills: [
    "Software Engineering",
    "Data Engineering",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "mailto:sabhi.swe@gmail.com", icon: Icons.email, label: "Email" },
    { href: "https://www.google.com/maps/place/toronto", icon: MapPin, label: "Location" }
  ],
  contact: {
    email: "sabhi.swe@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhilo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sabhis/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/yourusername",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@yourchannel",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sabhi.swe@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Manulife",
      href: "https://www.manulife.ca/personal.html",
      badges: [],
      location: "Waterloo, ON",
      title: "Software Developer Intern",
      logoUrl: "/manulife.png",
      start: "April 2025",
      end: "August 2025",
      description:
        "Incoming intern...",
    },
    {
      company: "IBM",
      badges: [],
      href: "https://www.ibm.com/ca-en",
      location: "Toronto, ON",
      title: "Software Developer Intern",
      logoUrl: "/ibm.png",
      start: "January 2025",
      end: "April 2025",
      description:
        "Contributed to the ICP Payments team as a backend developer, building features for a high-scale, API-driven payment processing platform and automating AWS infrastructure using Python and Boto3. Improved deployment reliability through CI/CD with Jenkins and logger testing in an Agile Scrum environment.",
    },
    {
      company: "RBC",
      href: "https://www.rbc.com/about-rbc.html",
      badges: [],
      location: "Toronto, ON",
      title: "Software Developer Intern",
      logoUrl: "/rbc.png",
      start: "January 2024",
      end: "Aug 2024",
      description:
        "Engineered an internal monitoring tool that reports Apache Airflow pipeline failures to over 100 Data and AI staff, saving 250+ hours annually. Built with Python, SQL, and Pandas, the tool tracks 256+ jobs via the Airflow REST API, stores results in PostgreSQL and MySQL, and automates daily email reports through a cron-scheduled SMTP service.",
    },
    
  ],
  education: [
    {
      school: "University of Toronto",
      href: "https://www.utoronto.ca",
      degree: "Honours Bachelor of Science in Computer Science",
      logoUrl: "/uoft.png",
      start: "2022",
      end: "2026",
    },

  ],
  projects: [
    {
      title: "UofT Archives",
      href: "https://github.com/abhilo/uoftarchives",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a course review directory for University of Toronto students, enabling detailed feedback on courses and instructors. Migrated from EJS-based server-side rendering to a modern ReactJS client-side architecture for a smoother user experience. Built a scalable backend with Node.js and Express.js, and designed a PostgreSQL database hosted on AWS RDS. Deployed the backend on an AWS EC2 instance to ensure high availability and performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/abhilo/uoftarchives",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/course.png",
      video:
        "",
    },
    {
      title: "Songwarp",
      href: "https://github.com/finesden33/Songwarp",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a Java application using clean architecture to convert playlists between YouTube and Spotify, implementing an algorithm to map and transfer 80+ songs seamlessly. Designed an intuitive Swing interface with drag-and-drop support, real-time progress indicators, and status messages. Adhered to SOLID principles and achieved 90% unit test coverage using JUnit 5.",
      technologies: [
        "Java",
        "Swing",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/finesden33/Songwarp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/songwarp.png",
      video:
        "",
    },
     {
      title: "Graphimaze",
      href: "https://github.com/AlbertKang1004/MazeSolver",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Built a maze pathfinding game in Python using graph theory concepts and data structures, incorporating cycles for increased difficulty and spanning trees to determine optimal paths. Implemented breadth-first search for efficient traversal through over 150 nodes. Designed a functional and interactive user interface with Tkinter, integrating gameplay mechanics for a smooth user experience.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/AlbertKang1004/MazeSolver",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/maze.png",
      video:
        "",
             },
    {
      title: "PhysioApp",
      href: "https://github.com/csc301-2025-y/project-9-physioapp",
      dates: "Jan 2024 - Apr 2024",
      active: true,
      description:
        "Developed a rehabilitation-focused workout generator that delivers evidence-based gym routines in seconds. Built with React frontend and Spring Boot backend, featuring AI-powered chatbot for physiotherapy guidance, Excel-based exercise recommendations, and animated exercise demos. Implemented user authentication, progress logging, and personalized workout plans based on muscle groups to strengthen/exclude. Used Docker for containerization and Supabase PostgreSQL for data storage.",
      technologies: [
        "React",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Docker",
        "AI/ML",
        "Excel API",
        "JWT Authentication",
        "Supabase",
        "Figma",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/csc301-2025-y/project-9-physioapp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/physio.png",
      video:
        "",
    },
         
    
  ],
  // hackathons: [
  //   {
  //     title: "Uoft hACKS",
  //     dates: "November 2022",
  //     location: "tORONTO, Ontario",
  //     description:
  //       "cOHERE AI - 1st place. Built a web app using react and typescript to generate images using the Cohere AI API.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "",
  //     links: [],
  //   },
  // ],
} as const;
