import React from 'react'
import { Link } from 'react-router';

type ProjectTye = {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
}




const ProjectCard: React.FC<ProjectTye> = ({ imgSrc, title, tags, projectLink }) => {
    return (
        <div className="relative rounded-2xl bg-zinc-800 p-5 hover:bg-zinc-700/50 ring ring-inset ring-zinc-50/5 transition-colors reveal-up">
            <figure className='img-box aspect-square rounded-lg'>
                <img src={imgSrc} loading='lazy' alt={title} className='img-cover' />
            </figure>
            <div className="flex items-center justify-between gap-4 mt-3">
                <div>
                    <h3 className='title-1 mb-3'>
                        {title}
                    </h3>
                    <div className='flex flex-wrap items-center gap-2'>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <span key={index} className='tag h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center content-center rounded-lg p-3'>
                                        {tag}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div >
                <div className='h-10 w-10 rounded-lg  grid place-items-center bg-sky-400 text-zinc-950 shrink-0'>
                    <span
                        className=''
                        aria-hidden="true"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" /></svg>

                    </span>
                </div>
            </div >
            <Link to={projectLink} target='_blank' className='absolute inset-0'></Link>
        </div >
    )
}

export default ProjectCard