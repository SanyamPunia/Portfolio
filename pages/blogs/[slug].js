import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity"
import Head from "next/head"
import routeName from "../../helpers/routeName"
import BlogContainer from "../../components/blog/BlogContainer"

const BlogPage = ({ post }) => {
  const bodyArray = post.body;
  console.log(bodyArray);

  return (
    <>
      <Head>
        <title>Sanyam | {routeName()} </title>
      </Head>

      <main className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
        <Header />

        <BlogContainer 
          image={post.mainImage && urlFor(post.mainImage).url()}
          title={post.title}
          description={post.description}
          date={new Date(post._createdAt).toLocaleString()}
          bodyArray={bodyArray}
        />
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
  body,
  content,
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