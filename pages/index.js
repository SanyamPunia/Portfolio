import Footer from "../components/Footer"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
      <Header />
      <Landing />
      <Projects />
      <Footer />
    </div>
  )
}