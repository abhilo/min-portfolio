import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhi Sharma",
  initials: "AS",
  url: "https://abhilo.dev",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software Engineer.",
  summary:
    "I’m currently a computer science student, focused on building and scaling my own software projects alongside my studies. In the past, I’ve interned at companies like RBC, IBM, and Manulife, where I worked on projects involving data, AI, and automation. I’ve also explored areas like design thinking and sustainable development—always aiming to build tech that’s practical, impactful, and rooted in real-world problem-solving.",
  avatarUrl: "/me.png",
  skills: [
    "Software Engineering",
    "Data Engineering",
    "Machine Learning",
    "Artificial Inteligence",
    "Web Development",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hello@example.com",
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
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
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
      href: "https://buildspace.so",
      degree: "Honours Bachelor of Science in Computer Science",
      logoUrl: "/uoft.png",
      start: "2022",
      end: "2026",
    },

  ],
  projects: [
    {
      title: "UofT Archives",
      href: "https://chatcollect.com",
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
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/course.png",
      video:
        "",
    },
    {
      title: "Songwarp",
      href: "https://chatcollect.com",
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
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/songwarp.png",
      video:
        "",
    },
     {
      title: "Graphimaze",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Built a maze pathfinding game in Python using graph theory concepts and data structures, incorporating cycles for increased difficulty and spanning trees to determine optimal paths. Implemented breadth-first search for efficient traversal through over 150 nodes. Designed a functional and interactive user interface with Tkinter, integrating gameplay mechanics for a smooth user experience.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/maze.png",
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
