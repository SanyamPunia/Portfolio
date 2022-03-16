import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity"
import PortableText from "react-portable-text"
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import Code from "../../components/blog-content/Code"
import Head from "next/head"
import routeName from "../../helpers/routeName"

Refractor.registerLanguage(js)

const BlogPage = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>Sanyam | {routeName()} </title>
      </Head>
      <main className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
        <Header />

        {post.mainImage &&
          <img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()} alt="" />
        }
        <article>
          <h1 className="">{post.title}</h1>
          <h1>{post.description}</h1>
          <h1>Published at {new Date(post._createdAt).toLocaleString()}</h1>

          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={
              {
                h1: (props) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props) => (
                  <h1 className="text-xl font-bold my5" {...props} />
                ),
                li: ({ children }) => (
                  <li className="ml-4 list-disc">{childre}</li>
                ),
                link: ({ href, children }) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
                code: (props) => (
                  <code {...props} />
                )
              }
            }
          />
          
          {post.exampleUsage &&
            <Code language={post?.exampleUsage.language} value={post?.exampleUsage.code} />
          }
        </article>
      </main>
    </>
  )
}

export default BlogPage

export const getStaticPaths = async () => {
  const query = `*[_type=='post'] {
    _id,
    slug {
    current
  }
  }`;

  const post = await sanityClient.fetch(query);
  const paths = post.map(post => (
    {
      params: {
        slug: post.slug.current
      }
    }
  ))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `*[_type=='post' && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    author -> {
    name,
    image
  },
  description,
  exampleUsage,
  mainImage,
  slug,
  body
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds, it will update the old cache version
  }
}