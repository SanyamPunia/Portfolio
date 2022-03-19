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

      <img className="mb-4 w-full rounded" src={props.image} alt="" />

      <Blog value={props.bodyArray} />

    </div>
  )
}

export default BlogContainer