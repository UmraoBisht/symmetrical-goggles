/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/


/** 
 * Import Components 
 */
import { NavLink } from "react-router";
import Navbar from "./Navbar";
import { useState } from "react";



const Header = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    return (
        <header className="fixed top-0 left-0 z-50 min-h-16 w-full flex justify-between items-center py-6 px-4  backdrop-blur-2xl">
            <h1 className="text-gray-600 font-bold text-2xl">Portfolio.<span className="text-white">Umrao Bisht</span></h1>
            <div className="hidden md:block">
                <Navbar navLinks={navLinks} />
            </div>
            <div className="md:hidden relative">
                <button className="bg-zinc-100/10 py-2 px-3 rounded-md grid items-center" onClick={() => setIsOpen(prev => !prev)}>
                    {
                        isOpen ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                            : <span className="material-symbols-rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" /></svg>
                            </span>
                    }
                </button>
                <div className={`${isOpen ? "" : "hidden"} absolute top-full bg-zinc-800 min-w-40 mt-4 p-2 right-0 rounded-2xl ring-inset ring-1 ring-zinc-50/10 scale-90 isolate transition-[transform, filter] flex items-center flex-col`}>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <NavLink to={link.link} key={index} className="hover:text-white text-zinc-50/50 h-9 px-4 text-sm font-medium transition-colors">
                                    {link.label}
                                </NavLink>
                            );
                        })
                    }

                </div>
            </div>
        </header>
    );
}

interface NavLink {
    label: string;
    link: string;
}

const navLinks: NavLink[] = [
    {
        label: "About",
        link: "#about",
    },
    {
        label: "Skills",
        link: "#skills",
    },
    {
        label: "Projects",
        link: "#projects",
    },
    {
        label: "Contact",
        link: "#contact",
    },
];





export default Header;