import Image from "next/image";

interface ProjectPropType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  bgImage: string;
  logoImage: string;
}

interface Project {
  projectList: ProjectPropType[];
}

const ProjectCard = ({ projectList }: Project) => {
  return (
    <div className="space-y-4 grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 md:grid-cols-1">
      {projectList.map((project: ProjectPropType) => (
        <div key={project.id} className="rounded-lg">
          <div className="flex flex-col justify-between md:items-center md:flex-row gap-6 rounded-lg shadow-md bg-secondary-black border border-[#222222] transition-all duration-300 hover:backdrop-blur-sm hover:border-[#303030]">
            {/* LEFT SECTION */}
            {/* PROJECT IMAGE */}
            <Image
              width={1000}
              height={1000}
              className="select-none rounded-t-lg md:rounded-l-lg md:rounded-r-none md:w-64 w-full"
              src={`/assets/project-preview/${project.logoImage}.png`}
              alt="project-image"
              draggable="false"
            />

            {/* RIGHT SECTION */}
            <div className="mx-6 space-y-4 sm:max-w-md max-w-2xl mb-6">
              {/* NAME */}
              <p className="text-primary-white text-2xl font-medium">
                {project.name}
              </p>
              {/* DESCRIPTION */}
              <p className="text-secondary-white text-md">
                {project.description}
              </p>
              {/* TAGS */}
              <div className="gap-2 flex flex-wrap justify-start">
                {project.tags.map((tag, index) => (
                  <span
                    className="text-primary-gray bg-[#222222] transition-all hover:text-primary-gray-highlighted cursor-default select-none px-2 rounded-lg"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
