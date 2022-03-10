const Stack = () => {
    return (
        <div className="font-source_code_pro flex flex-col gap-4">
            <div className="md:flex md:flex-col md:gap-1 md:border-b-1 border-lightLinkHover dark:md:border-divider md:pb-4 grid grid-cols-2 justify-items-start justify-end">
                <p className="text-mainPurple md:text-lg dark:text-mainGreen">Programming Languages</p>
                <p className="text-divider dark:text-hoverGray">HTML/CSS, Javascript</p>
            </div>
            <div className="md:flex md:flex-col md:gap-1 md:border-b-1 border-lightLinkHover dark:md:border-divider md:pb-4 grid grid-cols-2 justify-items-start">
                <p className="text-mainPurple md:text-lg dark:text-mainGreen">Frameworks/Libraries</p>
                <p className="text-divider dark:text-hoverGray">NodeJS, Svelte/SvelteKit, ReactJS, Next.js, Bootstrap, Tailwind, SASS</p>
            </div>
            <div className="md:flex md:flex-col md:gap-1 md:border-b-1 border-lightLinkHover dark:md:border-divider md:pb-4 grid grid-cols-2 justify-items-start">
                <p className="text-mainPurple md:text-lg dark:text-mainGreen">Database</p>
                <p className="text-divider dark:text-hoverGray">Firebase, Supabase, Sanity.io</p>
            </div>
            <div className="md:flex md:flex-col md:gap-1 md:border-b-1 border-lightLinkHover dark:md:border-divider md:pb-4 grid grid-cols-2 justify-items-start">
                <p className="text-mainPurple md:text-lg dark:text-mainGreen">Developer Tools</p>
                <p className="text-divider dark:text-hoverGray">Git/Github, Heroku, Netlify, Vercel, Adobe XD, Photoshop, Linux</p>
            </div>
        </div>
    )
}

export default Stack