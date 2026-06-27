import EmailIcon from "../components/Icon/EmailIcon";
import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import LocationIcon from "../components/Icon/LocationIcon";
import heroPicture from "../images/heroPicture.jpg";
import monkeyTicketPicture from "../images/monkeyTickets.jpg";
import { ContactItem, Metadata, Skill, TestimonialItem } from "./dataDef";

export const metadata: Metadata = {
  title: "ksburhan",
  description: "Portfolio page for Burhan Köseler",
}

export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const navbarLinks: { translationKey: "about" | "projects" | "resume"; href: string }[] = [
  { translationKey: "about", href: `#${SectionId.About}` },
  { translationKey: "projects", href: `#${SectionId.Projects}` },
  { translationKey: "resume", href: `#${SectionId.Resume}` },
];

export const heroImage = heroPicture;

export const projectAssets: { url: string; image: string }[] = [
  {
    url: "http://www.monkey-ticket.site",
    image: monkeyTicketPicture,
  },
];

export const skills: Skill[] = [
  { img: "https://skillicons.dev/icons?i=java,kotlin", id: 1 },
  { img: "https://skillicons.dev/icons?i=html,css", id: 2 },
  { img: "https://skillicons.dev/icons?i=js,ts", id: 3 },
  { img: "https://skillicons.dev/icons?i=react,next", id: 4 },
  { img: "https://skillicons.dev/icons?i=tailwind,scss", id: 5 },
  { img: "https://skillicons.dev/icons?i=docker,kubernetes", id: 6 },
  { img: "https://skillicons.dev/icons?i=aws,azure", id: 7 },
  { img: "https://skillicons.dev/icons?i=postgres,mysql", id: 8 },
  { img: "https://skillicons.dev/icons?i=spring,godot", id: 9 },
];

export const testimonials: TestimonialItem[] = [];

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
