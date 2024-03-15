import React from "react";
import Image from 'next/image';

import { SectionId, about } from "../../data/data";
import Skills from "./Skills";
import SocialIcons from "../Icon/SocialIcons";
import Section from "../layout/Section";

const About = () => {
  const { name, header, description, imageSrc } = about;
  return (
    <Section className="bg-gray-100 h-screen md:h-[calc(100vh-72px)]" sectionId={SectionId.About}>
      <div className={'md:py-12 flex flex-col-reverse md:grid md:grid-cols-3'}>
        <div className={'text-center md:text-left md:pr-12 col-span-1 flex flex-col md:col-span-2'}>
          <div className="flex flex-col">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
              {name}
              <br className="hidden lg:inline-block" />{header}
            </h1>
            <p className="prose prose-sm mb-4 sm:prose-base">{description}</p>
            <SocialIcons />
          </div>
        </div>
        {!!imageSrc && (
          <div className="col-span-1 flex pb-2 justify-center md:justify-start">
            <div className="relative h-80 w-80 overflow-hidden">
              <Image alt="about-me-image" className="hero-img h-full w-full object-cover" src={imageSrc} />
            </div>
          </div>
        )}
      </div>
      <Skills />
    </Section >
  );
}

export default About;
