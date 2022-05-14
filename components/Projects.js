import Link from "next/link"
import { GoMarkGithub } from "react-icons/go"
import { FaGlobe } from "react-icons/fa"
import { Fragment } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Projects = (props) => {
    const propProject = props.projects;
    console.log(props);
    return (
        <div>
            <div className="mb-5">
                <h1 className="font-mulish text-3xl font-extrabold text-bgBlack dark:text-mainGreen">Featured Projects</h1>
                <p className="font-source_code_pro text-lg text-divider dark:text-mainWhite mt-3">Collection of few projects I made</p>
            </div>
            <div className="flex flex-col gap-5">
                {propProject.map(project => (
                    <a href={`/projects/${project?.slug?.current}`} key={project.id}>
                        {console.log(project?.slug?.current)}
                        <Fragment key={project.id}>
                            <div className="bg-mainWhite dark:bg-cardBg grid grid-cols-2 items-center p-4 gap-8 rounded-md transition shadow-md hover:bg-lightLinkHover dark:hover:bg-divider sm:flex sm:flex-col">
                                <Zoom zoomMargin={150}>
                                    <img className="rounded-md" src={`/${project.logo_path}`} />
                                </Zoom>

                                <div className="flex flex-col justify-between gap-3">
                                    <h1 className="text-bgBlack dark:text-mainGreen font-source_code_pro font-bold text-lg">{project.title}</h1>
                                    <p className="text-bgBlack dark:text-mainWhite font-source_code_pro text-sm">{project.projectDescription}</p>
                                    <div className="flex gap-5 text-bgBlack dark:text-mainWhite text-xl">
                                        <div>
                                            <a rel="noreferrer" target="_blank" href={project.githubUrl}><GoMarkGithub /></a>
                                        </div>
                                        <div>
                                            <a rel="noreferrer" target="_blank" href={project.hostedUrl}><FaGlobe /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    </a>
                ))}
            </div>
            <hr className="mt-28 mb-14 w-1/3 mx-auto text-hoverGray dark:text-divider" />
        </div>
    )
}

export default Projects