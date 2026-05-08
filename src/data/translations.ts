export type Language = "en" | "de" | "tr" | "ja";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const languageOptions: LanguageOption[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "ja", label: "JP", flag: "🇯🇵" },
];

export interface TimelineCopy {
  date: string;
  location: string;
  title: string;
  content: string[];
}

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface Translation {
  navbar: {
    about: string;
    projects: string;
    resume: string;
    languageLabel: string;
  };
  about: {
    name: string;
    header: string;
    description: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    items: ProjectCopy[];
  };
  resume: {
    title: string;
    workLabel: string;
    educationLabel: string;
    work: TimelineCopy[];
    education: TimelineCopy[];
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    navbar: {
      about: "About",
      projects: "Projects",
      resume: "Resume",
      languageLabel: "Language",
    },
    about: {
      name: "Hi, I'm Burhan Köseler. ",
      header: "A passionate Software Engineer based in Japan 📍",
      description:
        "Hey, my name is Burhan, and I'm a Software Engineer. \n" +
        "My passion is to create and develop clean Services and clean Websites for my users. " +
        "I have worked in the automotive industry as well as the game industry, " +
        "working on microservices for web applications and various server applications, mainly in Java or Kotlin. \n" +
        "I speak fluent German, English, Turkish and Japanese. ",
    },
    skills: {
      title: "Skills & Technologies",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "[CURRENTLY OFFLINE] Monkey Ticket",
          description:
            "Web service for reselling tickets using micro services. Built on React and NodeJS with event based communication between the microservices. Deployed with Kubernetes on DigitalOcean",
        },
      ],
    },
    resume: {
      title: "Resume",
      workLabel: "Work",
      educationLabel: "Education",
      work: [
        {
          date: "March 2024 - present",
          location: "Soft Gear CO., Ltd., Tokyo/Osaka, Japan",
          title: "Game Server Engineer",
          content: [
            "Teammember of a R&D Team developing game servers for a real time action game",
            "Created design documents according to clients specificiations",
            "Communicated regularly with the client/interface partner",
            "Lead the design and implementation of a reliable matchmaker that matches the clients together based on certain criteria",
            "Ownership of the web API component that handles account information and communicates with the game client and game servers",
            "Responsible for the AWS infrastructure the servers are deployed on during development.",
          ],
        },
        {
          date: "July 2022 - October 2023",
          location: "Xibix Solutions GmbH, Munich, Germany",
          title: "Junior Software Engineer",
          content: [
            "Teammember of a Microservice Web development Project using Java (Quarkus), Angular, NGRX",
            "Fullstack Development of a car messaging Service",
            "Ownership of a monolithic Web development Project using Angular, NodeJS, RXJS and TypeOrm",
            "Fullstack Development of a media management Website implementing new features as well as refactoring old code to improve performance",
            "Committed code to GIT and deployed updates on the Microsoft Azure Cloud",
            "Analyzed user needs and proposed solutions to meet them",
            "Communicated regularly with Product Owners of the BMW Group",
          ],
        },
        {
          date: "March 2020 - August 2020",
          location: "CipSoft GmbH, Regensburg, Germany",
          title: "Intern",
          content: [
            'Ownership of project "visualize relationships between game content"',
            "Researched and prepared documentation about bulk importing into Neo4j database",
            "Wrote clear, clean code to export game content and their relationships. Created plugin for game designers to use database without query knowledge",
            "Wrote scripts and configured Jenkins for automating the process",
            "Collaborated effectively with members of software development team and personnel in other departments",
          ],
        },
      ],
      education: [
        {
          date: "March 2018 - February 2022",
          location: "OTH Regensburg, Germany",
          title: "Bachelor of Science in Computer Science",
          content: [
            "Courses in Computer Graphics, AI, Software Engineering and Software Architecture Design. " +
              "Bachelors Thesis: Framework for AI creation and comparing different AI algorithms.",
          ],
        },
        {
          date: "September 2015 - July 2017",
          location: "Technik FOS Munich, Germany",
          title: "Technical High School Graduation",
          content: [
            "High school classes in addition to 10 week internship in electronic technologies and" +
              " 10 week internship in metal technologies.",
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright",
    },
  },
  de: {
    navbar: {
      about: "TODO: About",
      projects: "TODO: Projects",
      resume: "TODO: Resume",
      languageLabel: "TODO: Language",
    },
    about: {
      name: "TODO: about.name",
      header: "TODO: about.header",
      description: "TODO: about.description",
    },
    skills: {
      title: "TODO: skills.title",
    },
    projects: {
      title: "TODO: projects.title",
      items: [
        {
          title: "TODO: projects.items[0].title",
          description: "TODO: projects.items[0].description",
        },
      ],
    },
    resume: {
      title: "TODO: resume.title",
      workLabel: "TODO: resume.workLabel",
      educationLabel: "TODO: resume.educationLabel",
      work: [
        {
          date: "TODO: work[0].date",
          location: "TODO: work[0].location",
          title: "TODO: work[0].title",
          content: ["TODO: work[0].content[0]"],
        },
        {
          date: "TODO: work[1].date",
          location: "TODO: work[1].location",
          title: "TODO: work[1].title",
          content: ["TODO: work[1].content[0]"],
        },
        {
          date: "TODO: work[2].date",
          location: "TODO: work[2].location",
          title: "TODO: work[2].title",
          content: ["TODO: work[2].content[0]"],
        },
      ],
      education: [
        {
          date: "TODO: education[0].date",
          location: "TODO: education[0].location",
          title: "TODO: education[0].title",
          content: ["TODO: education[0].content[0]"],
        },
        {
          date: "TODO: education[1].date",
          location: "TODO: education[1].location",
          title: "TODO: education[1].title",
          content: ["TODO: education[1].content[0]"],
        },
      ],
    },
    footer: {
      copyright: "TODO: footer.copyright",
    },
  },
  tr: {
    navbar: {
      about: "TODO: About",
      projects: "TODO: Projects",
      resume: "TODO: Resume",
      languageLabel: "TODO: Language",
    },
    about: {
      name: "TODO: about.name",
      header: "TODO: about.header",
      description: "TODO: about.description",
    },
    skills: {
      title: "TODO: skills.title",
    },
    projects: {
      title: "TODO: projects.title",
      items: [
        {
          title: "TODO: projects.items[0].title",
          description: "TODO: projects.items[0].description",
        },
      ],
    },
    resume: {
      title: "TODO: resume.title",
      workLabel: "TODO: resume.workLabel",
      educationLabel: "TODO: resume.educationLabel",
      work: [
        {
          date: "TODO: work[0].date",
          location: "TODO: work[0].location",
          title: "TODO: work[0].title",
          content: ["TODO: work[0].content[0]"],
        },
        {
          date: "TODO: work[1].date",
          location: "TODO: work[1].location",
          title: "TODO: work[1].title",
          content: ["TODO: work[1].content[0]"],
        },
        {
          date: "TODO: work[2].date",
          location: "TODO: work[2].location",
          title: "TODO: work[2].title",
          content: ["TODO: work[2].content[0]"],
        },
      ],
      education: [
        {
          date: "TODO: education[0].date",
          location: "TODO: education[0].location",
          title: "TODO: education[0].title",
          content: ["TODO: education[0].content[0]"],
        },
        {
          date: "TODO: education[1].date",
          location: "TODO: education[1].location",
          title: "TODO: education[1].title",
          content: ["TODO: education[1].content[0]"],
        },
      ],
    },
    footer: {
      copyright: "TODO: footer.copyright",
    },
  },
  ja: {
    navbar: {
      about: "TODO: About",
      projects: "TODO: Projects",
      resume: "TODO: Resume",
      languageLabel: "TODO: Language",
    },
    about: {
      name: "TODO: about.name",
      header: "TODO: about.header",
      description: "TODO: about.description",
    },
    skills: {
      title: "TODO: skills.title",
    },
    projects: {
      title: "TODO: projects.title",
      items: [
        {
          title: "TODO: projects.items[0].title",
          description: "TODO: projects.items[0].description",
        },
      ],
    },
    resume: {
      title: "TODO: resume.title",
      workLabel: "TODO: resume.workLabel",
      educationLabel: "TODO: resume.educationLabel",
      work: [
        {
          date: "TODO: work[0].date",
          location: "TODO: work[0].location",
          title: "TODO: work[0].title",
          content: ["TODO: work[0].content[0]"],
        },
        {
          date: "TODO: work[1].date",
          location: "TODO: work[1].location",
          title: "TODO: work[1].title",
          content: ["TODO: work[1].content[0]"],
        },
        {
          date: "TODO: work[2].date",
          location: "TODO: work[2].location",
          title: "TODO: work[2].title",
          content: ["TODO: work[2].content[0]"],
        },
      ],
      education: [
        {
          date: "TODO: education[0].date",
          location: "TODO: education[0].location",
          title: "TODO: education[0].title",
          content: ["TODO: education[0].content[0]"],
        },
        {
          date: "TODO: education[1].date",
          location: "TODO: education[1].location",
          title: "TODO: education[1].title",
          content: ["TODO: education[1].content[0]"],
        },
      ],
    },
    footer: {
      copyright: "TODO: footer.copyright",
    },
  },
};
