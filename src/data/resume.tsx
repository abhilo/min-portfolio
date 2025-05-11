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
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
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
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Sampple",
    },
    {
      company: "IBM",
      badges: [],
      href: "https://www.ibm.com/ca-en",
      location: "Toronto, ON",
      title: "Software Developer Intern",
      logoUrl: "/ibm.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Sanoke",
    },
    {
      company: "RBC",
      href: "https://www.rbc.com/about-rbc.html",
      badges: [],
      location: "Toronto, ON",
      title: "Software Developer Intern",
      logoUrl: "/rbc.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Sample",
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
        "Playlist ocnverter.",
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
        "Playlist ocnverter.",
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
        "Playlist ocnverter.",
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
