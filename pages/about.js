import Footer from "../components/Footer"
import Header from "../components/Header"
import Head from "next/head"
import routeName from "../helpers/routeName"
import { Fragment } from "react"
import Stack from "../components/Stack"

export default function About() {
    const aboutData = [
        {
            id: 1,
            description: "I'm Sanyam, a full stack web developer from India and a budding Web3 enthusiast. I specialise in creating full stack web application with a focus on simplicity and usability. I am passionate about creating scalable web apps to provide good user experience.",
        },
        {
            id: 2,
            description: "I started my developer journey in 2018 when I first heard about Google Code-In, an annual programming competition which was hosted by Google LLC. I prepared for this competition where I learned a lot about web development. For GCI, I completed 42 tasks which included UI Designing, front/back-end improvement, overall code refinement by contributing to SCoRe Labs, an open source organization. I was also declared as one of the finalist for 2018."
        },
        {
            id: 3,
            description: "Forwarding to 2021, I started with React as my first web library and gradually learned the core concepts and understood the functionality of it and then moving to Next.js as my another framework.",
        },
        {
            id: 4,
            description: "In 2021 itself, I created four major projects for my portfolio in which I learned a lot about various aspects of web applications, most importantly the design flow, project structure and it's implementation.",
        }
    ]

    return (
        <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>
            <Header />

            <div className="mt-28 mb-10">
                <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">About</h1>
            </div>

            <div className="flex flex-col gap-5 items-center">
                <img className="w-56 mb-5" src="/man.png" />
                {aboutData.map((data) => (
                    <Fragment key={data.id}>
                        <p className="font-source_code_pro text-bgBlack dark:text-mainWhite">{data.description}</p>
                    </Fragment>
                ))}

                <hr className="my-14 w-1/3 mx-auto border-lightLinkHover dark:text-divider" />
            </div>

            <div className="mb-14">
                <p className="mb-5 font-source_code_pro text-lg text-bgBlack dark:text-mainWhite">Below is the tech stack I use in my development</p>
                <Stack />
            </div>

            <Footer />
        </div>
    )
}