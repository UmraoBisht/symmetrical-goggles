/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/

/**
 * Imports node modules
 */
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Initialize gsap
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/** 
 * Import Components 
 */
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Review from './components/Review'
import Skill from './components/Skill'
import Work from './components/Work'

const Layout = () => {

    useGSAP(() => {
        const targets = gsap.utils.toArray(".reveal-up");
        targets.forEach((target) => {
            gsap.to(target, {
                scrollTrigger: {
                    trigger: target,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            })
        })
        return ()=>{
            gsap.killTweensOf(targets);
        }
    });

    return (
        <ReactLenis root>
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    )
}

export default Layout