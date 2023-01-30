import Image from "next/image";

type Props = {};

const BlogImage = ({
  coverImage,
}: {
  coverImage: { url: string; width: number; height: number };
}) => {
  return (
    <Image
      style={{ borderRadius: "7px" }}
      className="select-none"
      draggable="false"
      width={1000}
      height={1000}
      src={coverImage.url}
      alt="blog-cover"
    />
  );
};

export default BlogImage;
