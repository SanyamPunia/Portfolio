import Footer from "../components/Footer"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Head from "next/head"
import routeName from "../helpers/routeName"

export default function Home({ blogs }) {
  return (
    <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
      <Head>
        <title>Sanyam | {routeName()}</title>
      </Head>
      <Header />
      <Landing />
      <Projects />
      <Footer />
    </div>
  )
}