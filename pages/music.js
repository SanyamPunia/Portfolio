import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import routeName from "../helpers/routeName"
import { useEffect } from "react"
// import nowPlaying from "../helpers/nowPlaying"

export default function Music() {
    // const code = 'AQCAJDNoCyVXADaSOuW7gJTX8yC2qFueIP6d5BHqAfl-AfU2DYW9avJ8HX0W-GLLZqOob9OuHLawEuBElHBNv6vJiLHq9hD1dhoPcm9PL5arDXZGlDwx_qth8dbdWVCN-KMLic_0sT-RaesLS_GBUiWBoVsj77Csv1GjnciCaTvkqdLc_2S-oYoGvKx6bEvTLchFgwBg3nXXGScVkPNPIMKv0TOzG-PsMHM'

    // console.log(nowPlaying());

    return (
        <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>

            <Header />

            <div className="my-28">
                <div className="mb-5">
                    <h1 className="font-mulish text-4xl font-extrablack text-mainGreen leading-14">Music</h1>
                    <p className="font-source_code_pro text-base text-mainWhite">Listen to some of my most recent drops on <a target="_blank" className="text-mainGreen font-bold transition hover:text-hoverGray " href="https://soundcloud.com/prodmxle">Soundcloud</a>!</p>
                </div>
                <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1336060153&color=%234ecca3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>

            <Footer />
        </div>
    )
}