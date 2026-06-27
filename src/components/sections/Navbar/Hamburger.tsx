import { FC, PropsWithChildren } from "react";
import classNames from 'classnames';
import { navbarLinks } from "../../../data/data";
import { useLanguage } from "../../../contexts/LanguageContext";
import LanguagePicker from "./LanguagePicker";

const Hamburger: FC<PropsWithChildren<{ isOpen: boolean }>> = ({ isOpen }) => {
    const { t } = useLanguage();
    const button = classNames("w-8 h-8 flex justify-around flex-nowrap flex-col",
        "z-10 transition-all duration-300 ease-linear", isOpen ? "translate-x-1" : "");
    const slideMenu = classNames(isOpen ? "flex" : "hidden", "flex flex-col",
        "w-10/12 h-screen z-[300] bg-white fixed top-0 left-0 text-center text-base",
        "items-center justify-center");
    const baseBurger = "w-8 h-1 rounded-lg bg-black origin-[1px] transition-all duration-300 ease-linear";
    const burger1 = classNames(baseBurger, isOpen ? "rotate-45" : "rotate-0");
    const burger2 = classNames(baseBurger, isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-1");
    const burger3 = classNames(baseBurger, isOpen ? "rotate-[-45deg]" : "rotate-0");
    return (
        <>
            <nav className={classNames(slideMenu)}>
                <LanguagePicker className="mb-6" />
                {navbarLinks.map(item => (
                    <a key={item.translationKey} href={item.href} className="mr-5 text-4xl p-4 hover:text-sky-300">
                        {t.navbar[item.translationKey]}
                    </a>
                ))}
            </nav>
            <div className={button}>
                <div className={classNames(burger1)} />
                <div className={classNames(burger2)} />
                <div className={classNames(burger3)} />
            </div>
        </>
    );
}

export default Hamburger;
