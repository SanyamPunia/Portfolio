import { manrope, poppins } from "lib/util/get-class";
import { Blogs, BlogType } from "types/blogs";
import BlogImage from "components/blogs/mdx/BlogCoverImage";
import clsx from "clsx";

const BlogHeader = (portfolioBlogs: Blogs) => {
  const currentBlog: BlogType = portfolioBlogs.portfolioBlogs[0];

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h1 className={clsx(poppins, "text-primary-white text-3xl")}>
          {currentBlog.title}
        </h1>
        <p
          className={clsx(
            "leading-normal tracking-wide",
            "text-secondary-white",
            manrope
          )}
        >
          {currentBlog.description}
        </p>
      </div>
      <div className={manrope}>
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
