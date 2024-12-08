/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/

/** 
 * Import Components 
 */
import { ButtonOutline, ButtonPrimary } from "./Button"


const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28">

            <div
                className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div className="">
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="https://avatars.githubusercontent.com/u/100154701?v=4"
                                alt="Hero Image"
                                width={40}
                                height={40}
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center text-zinc-400 gap-1.5 text-sm tracking-wide reveal-up">
                            <span className="relative h-2 w-2 rounded-full bg-emerald-400 animate-ping">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary />
                        <ButtonOutline />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[380px] rounded-2xl ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400">
                        <img
                            src="src/assets/images/hero-banner.png"
                            alt="hero-banner"
                            width={280}
                            height={380}
                            className="w-full rounded-2xl"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Hero