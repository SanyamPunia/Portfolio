import { experienceList } from "lib/experience";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div>
      <ExperienceCard experienceList={experienceList} />
    </div>
  );
};

export default Experience;
