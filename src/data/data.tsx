import EmailIcon from "../components/Icon/EmailIcon";
import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import LocationIcon from "../components/Icon/LocationIcon";
import heroPicture from "../images/heroPicture.jpg";
import monkeyTicketPicture from "../images/monkeyTickets.jpg";
import { About, ContactItem, Metadata, NavbarItem, ProjectItem, Skill, TestimonialItem, TimelineItem } from "./dataDef";

export const metadata: Metadata = {
  title: "ksburhans",
  description: "Portfolio page for Burhan Köseler",
}

export const navbarItems: NavbarItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  // { name: "Reviews", href: "#testimonials" },
  // { name: "Contact", href: "#contact" },
]

export const about: About = {
  name: "Hi, I'm Burhan Köseler. ",
  header: "A passionate Software Engineer based in Japan 📍",
  description: "Hey, my name is Burhan, and I'm a Software Engineer. \n" +
    "My passion is to create and develop clean Services and clean Websites for my users. " +
    "I have worked in the automotive industry as well as the game industry, " +
    "working on microservices for web applications and various server applications, mainly in Java or Kotlin. \n" +
    "I speak fluent German, English, Turkish and Japanese. ",
  imageSrc: heroPicture,
}

export const education: TimelineItem[] = [
  {
    date: 'March 2018 - February 2022',
    location: 'OTH Regensburg, Germany',
    title: 'Bachelor of Science in Computer Science',
    content: [
      "Courses in Computer Graphics, AI, Software Engineering and Software Architecture Design. " +
      "Bachelors Thesis: Framework for AI creation and comparing different AI algorithms.",
    ]
  },
  {
    date: 'September 2015 - July 2017',
    location: 'Technik FOS Munich, Germany',
    title: 'Technical High School Graduation',
    content: [
      "High school classes in addition to 10 week internship in electronic technologies and" +
      " 10 week internship in metal technologies.",
    ]
  },
];

export const work: TimelineItem[] = [
  {
    date: 'March 2024 - present',
    location: 'Soft Gear CO., Ltd., Tokyo/Osaka, Japan',
    title: 'Game Server Engineer',
    content: [
      "Teammember of a R&D Team developing game servers for a real time action game",
      "Created design documents according to clients specificiations",
      "Communicated regularly with the client/interface partner",
      "Lead the design and implementation of a reliable matchmaker that matches the clients together based on certain criteria",
      "Ownership of the web API component that handles account information and communicates with the game client and game servers",
      "Responsible for the AWS infrastructure the servers are deployed on during development."
    ]
  },
  {
    date: 'July 2022 - October 2023',
    location: 'Xibix Solutions GmbH, Munich, Germany',
    title: 'Junior Software Engineer',
    content: [
      "Teammember of a Microservice Web development Project using Java (Quarkus), Angular, NGRX",
      "Fullstack Development of a car messaging Service",
      "Ownership of a monolithic Web development Project using Angular, NodeJS, RXJS and TypeOrm",
      "Fullstack Development of a media management Website implementing new features as well as refactoring old code to improve performance",
      "Committed code to GIT and deployed updates on the Microsoft Azure Cloud",
      "Analyzed user needs and proposed solutions to meet them",
      "Communicated regularly with Product Owners of the BMW Group",
    ]
  },
  {
    date: 'March 2020 - August 2020',
    location: 'CipSoft GmbH, Regensburg, Germany',
    title: 'Intern',
    content: [
      "Ownership of project \"visualize relationships between game content\"",
      "Researched and prepared documentation about bulk importing into Neo4j database",
      "Wrote clear, clean code to export game content and their relationships. Created plugin for game designers to use database without query knowledge",
      "Wrote scripts and configured Jenkins for automating the process",
      "Collaborated effectively with members of software development team and personnel in other departments",
    ]
  },
];

export const projects: ProjectItem[] = [
  {
    url: "http://www.monkey-ticket.site",
    image: monkeyTicketPicture,
    title: "[CURRENTLY OFFLINE] Monkey Ticket",
    description: "Web service for reselling tickets using micro services. Built on React and NodeJS with event based communication between the microservices. Deployed with Kubernetes on DigitalOcean",
  },
];

export const skills: Skill[] = [
  {
    img: "https://skillicons.dev/icons?i=java,kotlin",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=react,next",
    id: 4,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,scss",
    id: 5,
  },
  {
    img: "https://skillicons.dev/icons?i=docker,kubernetes",
    id: 6,
  },
  {
    img: "https://skillicons.dev/icons?i=aws,azure",
    id: 7,
  },
  {
    img: "https://skillicons.dev/icons?i=postgres,mysql",
    id: 8,
  },
  {
    img: "https://skillicons.dev/icons?i=spring,godot",
    id: 9,
  },
];

export const testimonials: TestimonialItem[] = [
  // {
  //   image: "https://preview.redd.it/minish-cap-toon-link-mod-is-now-in-development-v0-iogndtlilk6c1.png?width=830&format=png&auto=webp&s=7a2b3044b4713620fdc099b250d3b8f39b96b503",
  //   text: "great service",
  //   name: "Fliegengitter World",
  // },
];

export const contacts: ContactItem[] = [
  {
    type: 'Email',
    text: 'burhan.koeseler@hotmail.de',
    href: 'mailto:burhan.koeseler@hotmail.de',
    Icon: EmailIcon,
  },
  {
    type: 'Location',
    text: 'Osaka, Japan',
    href: 'https://maps.app.goo.gl/TyTzqfde5sS4HiLZA',
    Icon: LocationIcon,
  },
  {
    type: 'Instagram',
    text: '@ks_burhan',
    href: 'https://www.instagram.com/ks_burhan/',
    Icon: InstagramIcon,
  },
  {
    type: 'LinkedIn',
    text: 'Burhan Köseler',
    href: 'https://www.linkedin.com/in/burhan-k%C3%B6seler-2b4130235/',
    Icon: LinkedInIcon,
  },
  {
    type: 'Github',
    text: 'ksburhan',
    href: 'https://github.com/ksburhan',
    Icon: GithubIcon,
  },
]

export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];