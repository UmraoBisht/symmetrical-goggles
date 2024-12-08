/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/

/** 
 * Import Components 
 */

import React from 'react';
import { HashLink } from 'react-router-hash-link';

interface NavLink {
    label: string;
    link: string;
}

interface NavBarProps {
    navLinks: NavLink[];
}

const Navbar: React.FC<NavBarProps> = ({ navLinks }) => {

    return (
        <nav className="flex justify-end gap-3 bg-zinc-100/10 px-2.5 py-1.5 rounded-md">
            {
                navLinks?.map((link, key) => {
                    return (
                        <HashLink key={key} to={link.link} className=" hover:bg-white px-2.5 py-1.5 hover:text-black transition-all rounded-md"
                        > {link.label}</HashLink>
                    )
                })
            }
        </nav >
    )
}

export default Navbar;