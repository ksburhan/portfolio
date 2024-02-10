import React from "react";

import { about, contacts } from "../data/data";
import Skills from "./Skills";
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="container max-w-6xl mx-auto flex flex-wrap content-center px-10 md:flex-row flex-col items-center h-[calc(100vh-72px)]">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
            {about.header}
            <br className="hidden lg:inline-block" />{about.description}
          </h1>
          <p className="mb-4 leading-relaxed">
            {about.about}
          </p>
          <div className="flex gap-x-4 ">
            {contacts.map(({ type, href, Icon }) => {
              return (
                <div key={type}>
                  <dt className="sr-only">{type}</dt>
                  <dd className="flex items-center">
                    <a
                      className=
                      '-m-2 flex rounded-md p-2 hover:text-sky-300'
                      href={href}>
                      <Icon />
                    </a>
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hero-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
