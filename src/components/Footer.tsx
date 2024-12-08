import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/codewithsadee-org'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/codewithsadee_'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/codewithsadee'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/codewithsadee'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2 reveal-up">
                    <div className="mb-10">
                        <h2 className="headline-2 mb-8 max-w-[12ch]">Let&apos;s work together today!</h2>
                    </div>


                    <div className="lg:grid lg:grid-cols-2 gap-4 space-y-4">
                        <div>
                            <p className="mb-2 reveal-up">sitemap</p>
                            <ul>
                                {
                                    sitemap.map((item, index) => {
                                        return (
                                            <li key={index} >
                                                <HashLink to={item.href} className="block text-sm text-zinc-400 p-1 transition-colors hover:text-zinc-200 reveal-up">{item.label}</HashLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 reveal-up">Socials</p>
                            <ul>
                                {
                                    socials.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <HashLink to={item.href} target="_blank" className="block text-sm text-zinc-400 p-1 transition-colors hover:text-zinc-200 reveal-up">{item.label}</HashLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 py-4 mb-8">
                    <Link to="/" className="" >
                        <img src="/src/assets/images/logo.svg" alt="logo" width={40} height={40} />
                    </Link>
                    <p className="text-zinc-500 text-sm">
                        2024 &copy; All rights reserved. <span className="text-zinc-200">Umrao Bisht</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer