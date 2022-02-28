import Image from "next/image"
import { GoMarkGithub } from "react-icons/go"
import { FaGlobe } from "react-icons/fa"

const Projects = () => {

    const projectInfo = [
        {
            id: 1,
            logo: 'coinbase.png',
            name: 'Coinbase Rebuilt Web3',
            description: 'It is a Crypto Transaction web app similar to Coinbase made on Blockchain using thirdweb, Next.js & Sanity.io. Send crypto from one wallet to another within seconds',
            githubUrl: 'https://github.com/SanyamPunia/Coinbase-Rebuild-Web3',
            hostedUrl: 'https://coinbase-rebuild-web3.vercel.app/',
        },
        {
            id: 2,
            logo: 'skillup.png',
            name: 'Skill Up NCU',
            description: 'Skill Up NCU is an online forum built for the university student community to ask doubts from their peers and seniors. With a rich markdown editor, with image support, ask your question and post it within a matter of seconds.',
            githubUrl: 'https://github.com/SanyamPunia/Skill-Up-NCU',
            hostedUrl: 'https://skillup-ncu.vercel.app/',
        },
        {
            id: 3,
            logo: 'nextblog.png',
            name: 'Next Blog',
            description: 'Inspired by popular blogging web apps, Next Blog is a comprehensive blog publishing website made using Next JS and Firebase. It includes key features such as liking, image uploading, and admin route',
            githubUrl: 'https://github.com/SanyamPunia/next-blog',
            hostedUrl: 'https://next-blog-app-virid.vercel.app/',
        },
        {
            id: 4,
            logo: 'suparadio.png',
            name: 'Supa Radio',
            description: 'An Interactive Music Visualizer created using Supabase & Hosted via Firebase. Key features include Supabase Auth, Database, Storage, Realtime Chat.',
            githubUrl: 'https://github.com/SanyamPunia/Supa-Radio',
            hostedUrl: 'https://suparadio-viz.web.app/',
        }
    ]

    return (
        <div>
            <div className="mb-5">
                <h1 className="font-mulish text-3xl font-extrabold text-mainGreen">Projects</h1>
                <p className="font-source_code_pro text-lg text-mainWhite mt-3">Collection of few projects I made</p>
            </div>
            <div className="flex flex-col gap-5">
                {projectInfo.map(project  => (
                    <div className="bg-cardBg grid grid-cols-2 items-center p-4 gap-8 rounded-md transition shadow-md hover:bg-divider sm:flex sm:flex-col">
                        <img className="rounded-md" src={`/${project.logo}`} />
                        <div className="flex flex-col justify-between gap-3">
                            <h1 className="text-mainGreen font-source_code_pro font-bold text-lg">{project.name}</h1>
                            <p className="text-mainWhite font-source_code_pro text-sm">{project.description}</p>
                            <div className="flex gap-5 text-mainWhite text-xl">
                                <div>
                                    <a href={project.githubUrl}><GoMarkGithub /></a>
                                </div>
                                <div>
                                    <a href={project.hostedUrl}><FaGlobe /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="mt-28 mb-14 w-1/3 mx-auto text-divider" />
        </div>
    )
}

export default Projects