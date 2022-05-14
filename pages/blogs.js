import Link from "next/link";
import Header from "../components/Header"
import { sanityClient } from "../sanity"
import Head from 'next/head'
import routeName from "../helpers/routeName";

export default function Blogs({ posts }) {
    console.log(posts[0]);

    return (
        <>
            <Head>
                <title>Sanyam | {routeName()} </title>
            </Head>
            <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
                <Header />

                <div className="mt-28">
                    <h1 className="mb-5 font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">Blogs</h1>
                    <p className="mb-5 font-source_code_pro text-base text-bgBlack dark:text-mainWhite">I started writing blogs and articles in november 2021, since then I am writing about various technologies and experiences of my web developer journey.</p>
                    <p className="mb-5 font-source_code_pro text-base text-bgBlack dark:text-mainWhite">All the articles here are work of my own research and none of them is a pure copy paste from any other site.</p>
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">You can read my other articles on <Link href="https://medium.com/@prodmxle"><a target="_blank" rel="noreferrer" className="transition dark:text-mainGreen text-mainPurple dark:hover:text-mainWhite">medium</a></Link>.</p>
                </div>

                <hr className="my-14 w-1/3 mx-auto border-lightLinkHover dark:text-divider" />

                <div>
                    {posts.map((post) => (
                        <div key={post._id} className="transition shadow-md hover:bg-lightLinkHover dark:hover:bg-divider dark:bg-cardBg bg-mainWhite my-5 p-4 rounded-md">
                            <div className="flex justify-between mb-2">
                                <div className="flex gap-1 flex-col">
                                    <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                                        <h1 className="cursor-pointer transition dark:hover:text-mainGreen font-mulish text-xl text-bgBlack dark:text-mainWhite">{post.title}</h1>
                                    </Link>
                                    {post.publishDate &&
                                        <h1 className="font-source_code_pro text-bgBlack dark:text-blogDate">Published on • {post.publishDate}</h1>
                                    }
                                </div>
                                <div>
                                    <h1 className="font- font-source_code_pro text-bgBlack dark:text-blogViews">views</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-source_code_pro text-bgBlack dark:text-blogDescriptionGray">{post.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
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
      publishDate,
      slug
      }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        }
    }
}