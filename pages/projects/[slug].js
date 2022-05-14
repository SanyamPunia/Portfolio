import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import Head from 'next/head';
import routeName from '../../helpers/routeName';
import Link from "next/link"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ProjectStack from "../../components/project/ProjectStack";
import Footer from "../../components/Footer"

const ProjectPage = ({ project }) => {
    console.log(project);

    return (
        <>
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>
            <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
                <Header />
                <h1 className="mt-28 mb-2 font-mulish text-4xl font-extrablack text-mainPurple dark:text-mainGreen leading-14">{project.title}</h1>
                <p className="text-bgBlack dark:text-mainWhite font-source_code_pro text-sm">{project.projectDescription}</p>

                <div className='w-full mt-4 flex justify-center'>
                    <Zoom zoomMargin={150}>
                        <img className='rounded-md' src={urlFor(project.mainImage.asset._ref).url()} />
                    </Zoom>
                </div>

                <div className="w-100 my-10 flex justify-center gap-5">
                    <Link href={project.githubUrl} passHref><a target="_blank" className="px-3 py-1 rounded hover:bg-lightLinkHover dark:bg-divider bg-lightCardHover font-mulish cursor-pointer transition">GitHub</a></Link>
                    <Link href={project.hostedUrl} passHref><a target="_blank" className="px-3 py-1 rounded hover:bg-lightLinkHover dark:bg-divider bg-lightCardHover font-mulish cursor-pointer transition">Live</a></Link>
                </div>

                <hr className="my-20 w-1/3 mx-auto border-lightLinkHover dark:text-divider" />

                <div className='mb-14'>
                    <ProjectStack projectStack={project?.body} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProjectPage

export const getStaticPaths = async () => {
    const query = `*[_type=='project'] {
        _id,
        slug {
            current
        }
       }`;

    const project = await sanityClient.fetch(query);
    const paths = project.map(project => (
        {
            params: {
                slug: project.slug.current
            }
        }
    ))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }) => {
    const query = `*[_type=='project' && slug.current == $slug][0] {
        _id,
        title,
        description,
        projectDescription,
        mainImage,
        slug,
        githubUrl,
        hostedUrl,
        body,
       }`

    const project = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!project) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            project,
        },
        revalidate: 60,
    }
}