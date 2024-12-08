/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/

/** 
 * Import Components 
 */
const About = () => {

    const aboutItems = [
        {
            label: "Project Done",
            number: 5
        },
        {
            label: "Years of Experience",
            number: 8
        }
    ]

    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 rounded-2xl p-7 md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 lg:mb-8 md:text-lg md:max-w-[60ch]">
                        Hi, I'm Umrao Bisht. I'm a software engineer with a passion for technology and design. I've been working remotely for the past few years, focusing primarily on frontend development and design. I love collaborating with other talented developers and designers to create innovative and user-friendly products.
                    </p>
                    <div className="flex items-center flex-wrap gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, index) => (
                                <div key={index}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-400 text-sm">{label}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About