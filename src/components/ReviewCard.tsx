import React from 'react'

type ReviewCardProps = {
    content: string;
    name: string;
    imgSrc: string;
    company: string;
}

let ratings = new Array(5);
ratings.fill({
    icon: "grade",
    style: {
        fontVariationSettings: '"FILL"1'
    }
})

const ReviewCard: React.FC<ReviewCardProps> = ({ content, company, name, imgSrc }) => {

    return (
        <div className='bg-zinc-800 p-5 rounded-xl flex flex-col min-w-[320px] lg:min-w-[420] reveal-up'>
            <div className='flex items-center gap-1 mb-3 '>
                {
                    ratings.map(({ icon }, index) => {
                        return (
                            <span className="material-icons text-yellow-300 text-sm" key={index}>
                                {icon}
                            </span>
                        )
                    })
                }

            </div>
            <p className='text-zinc-400 mb-8'>
                {content}
            </p>
            <div className='flex items-center gap-2 mt-auto'>
                <figure className='img-box rounded-lg'>
                    <img src={imgSrc} alt={name} className='img-cover' height={44} width={44} loading='lazy' />
                </figure>
                <div>
                    <p>{name}</p>
                    <p className='text-sm text-zinc-400 tracking-wider'>{company}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard