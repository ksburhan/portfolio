import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";

import { skills } from "../data";
import './About.scss';

const About = () => {
    return (
        <section id="about">
          <div className="container max-w-6xl mx-auto flex px-10 md:flex-row flex-col items-center h-[calc(100vh-72px)]">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
              Hi, I'm Burhan Köseler.
                <br className="hidden lg:inline-block" />A passionate Full-Stack Engineer based in Japan. 📍
              </h1>
              <p className="mb-4 leading-relaxed">
                Hey, my name is Burhan, and I'm a Full-Stack Developer. My passion is to create and develop clean Services with clean Websites for my users.
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
              </p>
              <div className="flex justify-center">
                <a
                  className="pr-1"
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/burhan-k%C3%B6seler-2b4130235/"
                >
                  <IconBrandLinkedin width={32} height={32} />
                </a>
                <a
                  className="pl-1"
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ksburhan"
                >
                  <IconBrandGithub width={32} height={32} />
                </a>
              </div>
              <div className="container max-w-7xl px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <CpuChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              </p>
            </div>
            <ul>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                    <li key={skill.id} className="p-3">
                      <img src={skill.img} alt="skill-icon" />
                    </li>
              ))}
            </div>
            </ul>
          </div>
            </div>
            <div className="hero-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
          </div>
        </section>
      );
}

export default About;
