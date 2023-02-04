import React, { useState } from "react";
import Image from "next/image";
import { cn } from "lib/util/cn";

const BlogSubImage = (props: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      alt={props.alt}
      width={1000}
      height={1000}
      className={cn(
        "rounded-md select-none group-hover:opacity-75 duration-1000 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setIsLoading(false)}
      draggable="false"
      src={props.src}
    />
  );
};

export default BlogSubImage;
