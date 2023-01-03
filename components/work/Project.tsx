import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "lib/project-list";

type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      <ProjectCard projectList={projectList} />
    </div>
  );
};

export default Project;
