import Footer from "../components/Footer"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Head from "next/head"
import routeName from "../helpers/routeName"
import { sanityClient } from "../sanity"

export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">

      <Head>
        <title>Sanyam | {routeName()}</title>
      </Head>
      <Header />
      <Landing />
      <Projects projects={projects} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=='project'] {
    _id,
    title,
  description,
  mainImage,
  slug,
  logo_path,
  projectDescription,
  githubUrl,
  hostedUrl,
  }`;

  const projects = await sanityClient.fetch(query);

  return {
    props: {
      projects,
    }
  }
}