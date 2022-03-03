import Footer from "../components/Footer"
import Header from "../components/Header"
import Head from "next/head"
import routeName from "../helpers/routeName"

export default function About() {
    return (
        <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>
            <Header />

            <div className="my-28">
                <h1 className="font-mulish text-4xl font-extrablack text-mainGreen leading-14">About</h1>
            </div>
            <Footer />
        </div>
    )
}