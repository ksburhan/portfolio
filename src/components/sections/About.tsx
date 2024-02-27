import classNames from 'classnames';
import React from "react";
import Image from 'next/image';

import { SectionId, about } from "../../data/data";
import Skills from "./Skills";
import SocialIcons from "../Icon/SocialIcons";
import Section from "../layout/Section";

const About = () => {
  const { name, header, description, imageSrc } = about;
  return (
    <Section className="bg-gray-100 h-[calc(100vh-72px)]" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-2 gap-y-4', { 'md:grid-cols-4': !!imageSrc })}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-2': !!imageSrc })}>
          <div className="flex flex-col gap-y-2">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
              {name}
              <br className="hidden lg:inline-block" />{header}
            </h1>
            <p className="prose prose-sm sm:prose-base">{description}</p>
            <SocialIcons />
          </div>
        </div>
        {!!imageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-80 w-80 overflow-hidden">
              <Image alt="about-me-image" className="hero-img h-full w-full object-cover" src={imageSrc} />
            </div>
          </div>
        )}
      </div>
      <Skills />
      {/* <div className="grid grid-cols-2 gap-y-4 h-[calc(100vh-72px)]">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-4 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="hero-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        <Skills />
      </div> */}
    </Section >
  );
}

export default About;
