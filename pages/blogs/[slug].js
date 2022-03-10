import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Header from '../../components/Header'
import { useRouter } from "next/router"

const BlogPage = ({ frontMatter: { title }, mdxSource }) => {

    const route = useRouter();
    const routeName = route.query.slug;

    return (
        <>
        <Head>
            <title>Sanyam | {routeName}</title>
        </Head>
            <div className="mx-auto  w-1/3 2xl:w-2/4 lg:w-4/5">
                <Header />
                <h1>{title}</h1>
                <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', ''),
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8');

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        }
    }
}

export default BlogPage