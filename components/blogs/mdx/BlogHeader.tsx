import { manrope, poppins } from "lib/util/get-class";
import { Blogs, BlogType } from "types/blogs";
import BlogImage from "components/blogs/mdx/BlogImage";
import Divider from "components/Divider";

type Props = {};

const BlogHeader = (portfolioBlogs: Blogs) => {
  const currentBlog: BlogType = portfolioBlogs.portfolioBlogs[0];

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h1 className={`${poppins} text-primary-white text-3xl`}>
          {currentBlog.title}
        </h1>
        <p
          className={`${manrope} leading-normal tracking-wide text-secondary-white`}
        >
          {currentBlog.description}
        </p>
      </div>
      <div className={`${manrope}`}>
        <p className="text-primary-gray">
          Published on <span className="select-none">•</span>{" "}
          {currentBlog.blogDate}
        </p>
      </div>

      <BlogImage coverImage={currentBlog.coverImage} />
    </div>
  );
};

export default BlogHeader;
