import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: '/src/assets/images/project-1.jpg',
        title: 'Full stack music app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
        imgSrc: '/src/assets/images/project-2.jpg',
        title: 'Free stock photo app',
        tags: ['API', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: '/src/assets/images/project-3.jpg',
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: '/src/assets/images/project-4.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: '/src/assets/images/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/src/assets/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Work = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My projects highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {

                        works.map((project, index) => {
                            return (
                                <ProjectCard {...project} key={index} />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Work