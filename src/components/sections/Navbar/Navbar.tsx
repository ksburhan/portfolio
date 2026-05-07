import React, { useState } from "react";
import Hamburger from "./Hamburger";
import classNames from "classnames";
import { navbarLinks } from "../../../data/data";
import { useLanguage } from "../../../contexts/LanguageContext";
import LanguagePicker from "./LanguagePicker";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { t } = useLanguage();

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <header className="bg-white md:sticky top-0 z-10 font-bold shadow-md">
      <div className={classNames("container mx-auto max-w-screen-lg py-5 items-center hidden md:flex md:flex-wrap", hamburgerOpen ? "hidden" : "inline")}>
        <a className="title-font font-black mb-4 mx-2 sm:mb-0 text-xl hover:text-sky-300" href="#about">
          Burhan Köseler
        </a>
        <nav className="sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 sm:border-l sm:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {navbarLinks.map((item) => (
            <a key={item.translationKey} href={item.href} className="mr-5 hover:text-sky-300">
              {t.navbar[item.translationKey]}
            </a>
          ))}
        </nav>
        <LanguagePicker className="mx-2" />
      </div>
      <div className="fixed right-2 top-2 rounded-lg bg-sky-300 p-2.5 m-2.5 z-10  md:hidden" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </header>
  );
}

export default Navbar;
