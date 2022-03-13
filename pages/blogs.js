import Link from "next/link";
import Header from "../components/Header"
import { sanityClient, urlFor } from "../sanity"
import post from "../studio/schemas/post";

export default function Blogs({ posts }) {
    console.log(posts[0].author.name);
    return (
        <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
            <Header />

            <div>
                {posts.map((post) => (
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                        <div>
                            <img src={urlFor(post.mainImage)} alt="" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type=='post'] {
        _id,
        title,
        author -> {
        name,
        image
      },
      description,
      mainImage,
      slug
      }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        }
    }
}