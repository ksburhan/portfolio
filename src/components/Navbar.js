import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white md:sticky top-0 z-10 font-bold shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-black mb-4 md:mb-0 text-xl ml-3" href="#about">
          Burhan Köseler
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-sky-300">
            Projects
          </a>
          <a href="#resume" className="mr-5 hover:text-sky-300">
            Resume
          </a>
          <a href="#testimonials" className="mr-5 hover:text-sky-300">
            Reviews
          </a>
          <a href="#contact" className="mr-5 hover:text-sky-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
