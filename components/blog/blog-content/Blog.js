import Code from "./sub-components/Code"
import BlockContent from "./sub-components/BlockContent"
import ImageContent from "./sub-components/ImageContent"

const Blog = (props) => {
    console.log(props);
    return (
        <>
            {props.value.map((blog) => {
                if (blog._type === 'code') {
                    return (
                        <Code value={blog.code} />
                    )
                } else if (blog._type === 'block') {
                    if (blog.listItem === 'bullet') {
                        return (
                            <BlockContent value={blog.children[0].text} style={blog.style} listItem={blog.listItem} />
                        )
                    } else {
                        return (
                            <BlockContent value={blog.children[0].text} style={blog.style} />
                        )
                    }
                } else {
                    return (
                        <ImageContent value={blog.asset._ref} />
                    )
                }
            })}
        </>
    )
}

export default Blog