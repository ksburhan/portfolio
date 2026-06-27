import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { SectionId } from "../../../data/data";
import { useLanguage } from "../../../contexts/LanguageContext";
import Section from "../../layout/Section";

const Resume = () => {
    const { t } = useLanguage();
    return (
        <Section sectionId={SectionId.Resume} className="body-font bg-gray-100">
            <div className="container max-w-7xl px-5 pb-10 mx-auto text-center">
                <DocumentTextIcon className="h-6 w-6 mb-4 inline-block sm:h-10 sm:w-10" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font">
                    {t.resume.title}
                </h1>
            </div>
            <div className="divide-y-2 divide-neutral-300">
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-max">
                            <h2 className="text-xl font-bold uppercase text-neutral-800">{t.resume.workLabel}</h2>
                            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-sky-300" />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col md:col-span-3">
                        {
                            t.resume.work.map((item, index) => (
                                <div key={index} className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
                                    <div className="flex flex-col pb-4">
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                            <span className="flex-1 text-sm font-medium italic sm:flex-none">{item.location}</span>
                                            <span>•</span>
                                            <span className="flex-1 text-sm sm:flex-none">{item.date}</span>
                                        </div>
                                    </div>
                                    <ul className="md:list-disc sm:list-none">
                                        {item.content.map((el, i) => (
                                            <li key={i}>{el}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-max">
                            <h2 className="text-xl font-bold uppercase text-neutral-800">{t.resume.educationLabel}</h2>
                            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-sky-300" />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col md:col-span-3">
                        {
                            t.resume.education.map((item, index) => (
                                <div key={index} className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
                                    <div className="flex flex-col pb-4">
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                            <span className="flex-1 text-sm font-medium italic sm:flex-none">{item.location}</span>
                                            <span>•</span>
                                            <span className="flex-1 text-sm sm:flex-none">{item.date}</span>
                                        </div>
                                    </div>
                                    <ul className="md:list-disc sm:list-none">
                                        {item.content.map((el, i) => (
                                            <li key={i}>{el}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Resume;
