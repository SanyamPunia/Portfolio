import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

interface PropType {
  name: string;
  description: string;
  tags: Array<string>;
  githubUrl: string;
  previewUrl?: string;
}

const ProjectCardContent = ({
  name,
  description,
  tags,
  githubUrl,
  previewUrl,
}: PropType) => {
  return (
    <div className="mx-6 flex flex-col gap-4 sm:max-w-md max-w-2xl mb-6 md:mb-0">
      {/* NAME & URLs */}
      <div className="flex justify-between items-center">
        <p className="text-primary-white text-2xl font-medium">{name}</p>
        <div className="flex gap-3 text-primary-white text-lg">
          <Link
            target="_blank"
            href={githubUrl}
            className="hover:shadow-lg hover:shadow-blue-500/50 p-1 rounded-md bg-divider hover:bg-primary-gray transition-all duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href=""
            className="hover:shadow-lg hover:shadow-blue-500/50 p-1 rounded-md bg-divider hover:bg-primary-gray transition-all duration-300"
          >
            <FaLink />
          </Link>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-secondary-white text-md">{description}</p>

      {/* TAGS */}
      <div className="gap-2 flex flex-wrap justify-start">
        {tags.map((tag, index) => (
          <span
            className="text-primary-gray bg-[#222222] transition-all hover:text-primary-gray-highlighted cursor-default select-none px-2 rounded-lg"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardContent;
