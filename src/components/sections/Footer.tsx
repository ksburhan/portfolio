import { ChevronUpIcon } from '@heroicons/react/24/solid';
import SocialIcons from '../Icon/SocialIcons';


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
                    <SocialIcons />
                    <span className="text-sm text-neutral-700">© Copyright {currentYear} Burhan Köseler</span>
                </div>
            </div>
        </section>
    )
};

export default Footer;
