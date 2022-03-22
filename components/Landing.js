import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

const Landing = () => {
    return (
        <div>
            <div className="mt-28">
                <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">Hi,</h1>
                <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">I am <span className="text-mainPurple">Sanyam</span>.</h1>
                <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">A Full Stack Web Developer</h1>
            </div>
            <div className="mt-4">
                <p className="mb-3 font-source_code_pro text-base text-divider dark:text-mainWhite">from India and a budding Web3 enthusiast. I specialize in creating full stack web application with a focus on simplicity and usability.</p>
                <p className="font-source_code_pro text-base text-divider dark:text-mainWhite">I am currently looking internship opportunity as a frontend developer. Feel free to reach out for any inquiry regarding it.</p>
            </div>
            <div className="mt-6 flex gap-5 text-2xl text-mainWhite">
                <div className="bg-cardBg p-2 rounded-md transition hover:bg-divider hover:text-[#1DA1F2]">
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/prodmxle"><FaTwitter /></a>
                </div>
                <div className="bg-cardBg p-2 rounded-md transition hover:bg-divider">
                    <a rel="noreferrer" target="_blank" href="https://github.com/SanyamPunia"><GoMarkGithub /></a>
                </div>
                <div className="bg-cardBg p-2 rounded-md transition hover:bg-divider hover:text-[#2867B2]">
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sanyampunia/"><FaLinkedin /></a>
                </div>
            </div>
            <hr className="my-28 w-1/3 mx-auto border-lightLinkHover dark:text-divider" />
        </div>
    )
}

export default Landing