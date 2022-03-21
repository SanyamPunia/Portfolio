import Blog from "./blog-content/Blog"
import BlogHeader from "./blog-content/BlogHeader"

const BlogContainer = (props) => {
  return (
    <div className="my-28">
      <BlogHeader
        title={props.title}
        description={props.description}
        date={props.date}
      />

      {props.image &&
        <img className="mb-4 w-full rounded" src={props.image} alt="" />
      }

      <hr className="my-10 w-1/3 mx-auto border-lightLinkHover dark:text-divider" />

      <Blog value={props.bodyArray} />
    </div>
  )
}

export default BlogContainer