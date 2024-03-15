import { FC } from 'react';

export interface Metadata {
  title: string;
  description: string;
}

export interface NavbarItem {
  name: string;
  href: string;
}

export interface About {
  imageSrc: string;
  header: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export interface Skill {
  img: string;
  id: number;
}

export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: string[];
}

export interface Testimonials {
  imageSrc?: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialItem {
  image?: string;
  name: string;
  text: string;
}

export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
  Icon: FC;
}
export interface Social {
  label: string;
  Icon: FC;
  href: string;
}
