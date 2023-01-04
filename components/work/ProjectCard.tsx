"use client";

import Image from "next/image";
import ProjectCardContent from "components/work/ProjectCardContent";
import { motion } from "framer-motion";

interface ProjectPropType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  bgImage: string;
  logoImage: string;
  githubUrl: string;
  previewUrl?: string;
}

interface Project {
  projectList: ProjectPropType[];
}

const ProjectCard = ({ projectList }: Project) => {
  return (
    <div className="space-y-4 grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 md:grid-cols-1">
      {projectList.map((project: ProjectPropType) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          key={project.id}
          className="rounded-lg"
        >
          <div className="flex flex-col justify-between md:items-center md:flex-row gap-6 rounded-lg shadow-md bg-secondary-black border border-[#222222] transition-all duration-300 hover:backdrop-blur-sm hover:border-[#303030]">
            {/* LEFT SECTION */}
            {/* PROJECT IMAGE */}
            <Image
              width={1000}
              height={1000}
              className="select-none rounded-t-lg md:rounded-l-lg md:rounded-r-none md:w-64"
              src={`/assets/project-preview/${project.logoImage}.png`}
              alt="project-image"
              draggable="false"
            />

            {/* RIGHT SECTION */}
            <ProjectCardContent
              name={project.name}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
