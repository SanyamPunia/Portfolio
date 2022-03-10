import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import routeName from "../helpers/routeName"

export default function Music() {
    return (
        <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>

            <Header />

            <div className="my-28">
                <div className="mb-5">
                    <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">Music</h1>
                    {/* <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">Listen to some of my most recent drops!</p> */}
                </div>
                <div className="flex flex-col gap-6 mb-10">
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">2020 was the year when I decided to put my music out on the internet. Uploading it to <a target="_blank" className="text-mainPurple dark:text-mainGreen transition dark:hover:text-mainWhite" href="https://soundcloud.com/prodmxle">SoundCloud</a>, <a target="_blank" className="text-mainPurple dark:text-mainGreen transition dark:hover:text-mainWhite" href="https://open.spotify.com/artist/2QbtOIjb8mUIsnCNqvyWAW">Spotify</a> and other platforms helped me gather bunch of people that enjoyed listening to my music.</p>
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">Early 2020, I started with producing Trap beats, collaborating with some cool producers from around the globe.</p>
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">The transition from making beats to actual full tracks took some time and in mid 2020, I finally decided to try and make electronic genre. On 23rd of September, I released my very first electronic EP '<a className="text-mainPurple dark:text-mainGreen  transition dark:hover:text-mainWhite" target="_blank" href="https://soundcloud.com/prodmxle/sets/a-light-in-the-dark?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">a light in the dark</a>' along with a self designed '<a target="_blank" className="text-mainPurple dark:text-mainGreen  transition dark:hover:text-mainWhite" href="https://payhip.com/b/pQdaY">sample pack</a>', which was indeed a great success for me.</p>
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">Reaching <span className="text-mainPurple dark:text-mainGreen">75,000+</span> plays on SoundCloud within a span of 1.5 years was a big achievement for me. With combined plays from YouTube & other streaming services, total number of plays peaked <span className="text-mainPurple dark:text-mainGreen">150,000+</span>.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1336060153&color=%234ecca3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}