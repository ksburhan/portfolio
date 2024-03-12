import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white md:sticky top-0 z-10 font-bold shadow-md">
      <div className="container mx-auto max-w-screen-lg flex flex-wrap py-5 items-center">
        <a className="title-font font-black mb-4 sm:mb-0 text-xl hover:text-sky-300" href="#about">
          Burhan Köseler
        </a>
        <nav className="sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 sm:border-l sm:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
