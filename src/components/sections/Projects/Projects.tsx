import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import React, { FC, memo, useRef } from "react";
import { projectAssets, SectionId } from "../../../data/data";
import { useLanguage } from "../../../contexts/LanguageContext";
import Image from 'next/image';
import Section from "../../layout/Section";

interface ResolvedProject {
  url: string;
  image: string;
  title: string;
  description: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const resolved: ResolvedProject[] = t.projects.items.map((copy, index) => ({
    ...copy,
    url: projectAssets[index]?.url ?? "",
    image: projectAssets[index]?.image ?? "",
  }));

  let content =
    <div className=" w-full columns-2 md:columns-3 lg:columns-4">
      {resolved.map((item, index) => {
        const { title, image } = item;
        return (
          <div className="pb-6" key={`${title}-${index}`}>
            <div className='relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl'>
              <Image alt={title} width={50} height={50} className="h-full w-full" src={image ? image : ""} />
              <ItemOverlay item={item} />
            </div>
          </div>
        );
      })}
    </div>;

  return (
    <Section sectionId={SectionId.Projects} className="body-font bg-white">
      <div className="container max-w-7xl px-5 pb-10 mx-auto text-center">
        <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
          {t.projects.title}
        </h1>
      </div>
      {content}
    </Section>
  );
}

export default Projects;

const ItemOverlay: FC<{ item: ResolvedProject }> = memo(({ item: { url, title, description } }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <a
      className='absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80'
      href={url}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
