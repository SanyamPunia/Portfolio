import Header from '../components/Header'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Fragment } from 'react'
import Head from "next/head"
import routeName from '../helpers/routeName'

export default function Blogs({ blogs }) {
    return (
        <>
            <Head>
                <title>Sanyam | {routeName()}</title>
            </Head>
            <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
                <Header />
                <div className='mt-28 flex flex-col gap-5'>
                    <h1 className="font-mulish text-4xl font-extrablack text-bgBlack dark:text-mainGreen leading-14">Blogs</h1>
                    <p className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">I started writing blogs and articles in 2022, since then I am writing about various technologies and experiences of my web developer journey.</p>
                </div>

                <hr className="mt-20 mb-14 w-1/3 mx-auto text-hoverGray dark:text-divider" />

                {blogs.map((blog, index) => (
                    <Fragment>
                        <Link href={'/blogs/' + blog.slug} passHref key={index}>
                            <div className='flex flex-col gap-4 cursor-pointer'>
                                    <div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className="font-source_code_pro text-2xl text-base text-bgBlack dark:text-mainWhite">{blog.frontMatter.title}</h1>
                                            <h1 className="font-source_code_pro text-lg text-base text-bgBlack dark:text-blogViews">views</h1>
                                        </div>
                                        <div>
                                            <h1 className="font-source_code_pro text-md text-base text-bgBlack dark:text-blogDate">{blog.frontMatter.date}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <h1 className="font-source_code_pro text-base text-bgBlack dark:text-mainWhite">{blog.frontMatter.description}</h1> */}
                                        <h1 className="font-source_code_pro text-base text-divider dark:text-blogDescriptionGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</h1>
                                    </div>
                                </div>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('blogs'));

    const blogs = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('blogs', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            frontMatter,
            slug: filename.split('.')[0],
        }
    })

    return {
        props: {
            blogs
        }
    }
}