import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import './About.scss';

const About = () => {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hi, I'm Burhan Köseler.
                <br className="hidden lg:inline-block" />A passionate Fullstack Engineer based in Japan. 📍
              </h1>
              <p className="mb-8 leading-relaxed">
                Hey, my name is Burhan, and I'm a Full-Stack Developer. My passion is to create and develop clean Services with clean Websites for my users.
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
              <span className="flex justify-center">
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/burhan-k%C3%B6seler-2b4130235/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ksburhan"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
            </div>
            <div className="hero-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
          </div>
        </section>
      );
}

export default About;
