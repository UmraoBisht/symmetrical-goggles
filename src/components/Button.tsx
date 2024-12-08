/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/

import { HashLink } from "react-router-hash-link"

/** 
 * Import Components 
 */
const ButtonPrimary = () => {
    return (
        <button type="button" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 md:px-5 md:py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Download CV <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
        </button>
    )
}


const ButtonOutline = () => {
    return (
        <HashLink to="#about" className="flex items-center justify-center gap-1.5 focus:outline-none text-white bg-zinc-700/50 font-medium rounded-lg text-sm md:px-5 px-2.5 py-1.5 md:py-2.5 me-2 mb-2 hover:text-gray-400">
            <span>
                Scroll Down
            </span>
            <span className="animate-bounce flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" /></svg>
            </span>
        </HashLink>
    )
}

export { ButtonPrimary, ButtonOutline }