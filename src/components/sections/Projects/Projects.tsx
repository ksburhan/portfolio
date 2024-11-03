import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects, SectionId } from "../../../data/data";
import Section from "../../layout/Section";

const Projects = () => {
  let content = <div className="flex flex-wrap -m-4">
    {projects.map((project) => (
      <a
        href={project.url}
        key={project.title}
        className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
              {project.description}
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              {project.title}
            </h1>
            <p className="leading-relaxed">{project.description}</p>
          </div>
        </div>
      </a>
    ))}
  </div>;

  return (
    <Section sectionId={SectionId.Projects} className="body-font bg-white">
      <div className="container max-w-7xl px-5 pb-10 mx-auto text-center">
        <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
          Projects
        </h1>
      </div>
      {content}
    </Section>
  );
}

export default Projects;
