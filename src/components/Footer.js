import { ChevronUpIcon } from '@heroicons/react/24/solid';

import { contacts } from "../data/data";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <section id="footer" className="body-font">
            <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
                <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
                    <a
                        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                        href={`/#about`}>
                        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
                    </a>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <div className="flex gap-x-4 text-neutral-500">
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
                    <span className="text-sm text-neutral-700">© Copyright {currentYear} Burhan Köseler</span>
                </div>
            </div>
        </section>
    )
};

Footer.displayName = 'Footer';
export default Footer;
