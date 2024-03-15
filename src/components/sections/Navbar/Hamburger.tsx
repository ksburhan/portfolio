import { FC, PropsWithChildren } from "react";
import classNames from 'classnames';
import { navbarItems } from "../../../data/data";

const Hamburger: FC<PropsWithChildren<{ isOpen: boolean }>> = ({ isOpen }) => {
    const slideMenu = classNames(isOpen ? "flex" : "hidden", "flex flex-col",
        "w-10/12 h-screen z-[300] bg-white fixed top-0 left-0 text-center text-base",
        "items-center justify-center transition-all duration-300 ease-linear");
    const baseBurger = "w-8 h-1 rounded-lg bg-black origin-[1px] transition-all duration-300 ease-linear";
    const burger1 = classNames(baseBurger, isOpen ? "rotate-45" : "rotate-0");
    const burger2 = classNames(baseBurger, isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-1");
    const burger3 = classNames(baseBurger, isOpen ? "rotate-[-45deg]" : "rotate-0");
    return (
        <>
            <nav className={classNames(slideMenu)}>
                {navbarItems.map(item => (
                    <a key={item.name} href={item.href} className="mr-5 hover:text-sky-300">
                        {item.name}
                    </a>
                ))}
            </nav>
            <div className="w-8 h-8 flex justify-around flex-nowrap flex-col z-10">
                <div className={classNames(burger1)} />
                <div className={classNames(burger2)} />
                <div className={classNames(burger3)} />
            </div>
        </>
    );
}

export default Hamburger;
