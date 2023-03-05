import React from "react";
import { Experience } from "types/experience";
import { manrope } from "lib/util/get-class";
import { FaExternalLinkAlt } from "react-icons/fa";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = ({ experienceList }: Experience) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-10"
    >
      {experienceList.map(
        ({ id, name, role, startDate, endDate, source, description }) => (
          <div
            key={id}
            className={clsx(
              "flex flex-col gap-2",
              manrope,
              "border border-primary-card-border hover:border-hover-card-border rounded-md",
              "p-5 transition"
            )}
          >
            <div className="flex flex-col gap-3 sm:flex-row justify-between">
              <div>
                <h1 className="text-xl text-primary-white font-semibold flex gap-3 items-center">
                  {name}
                  <div
                    className={clsx(
                      "transition duration-300",
                      "hover:bg-zinc-700 hover:shadow-blue-500/50",
                      "text-sm text-[#e0e0e0] bg-zinc-800",
                      "shadow-lg cursor-pointer p-1.5 rounded-md"
                    )}
                  >
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </h1>
                <p className="italic text-secondary-white text-md">{role}</p>
              </div>
              <div className="flex gap-2 text-primary-gray-highlighted">
                <span>{startDate}</span>
                <span className="select-none">•</span>
                <span>{endDate}</span>
              </div>
            </div>

            <hr className="my-3 border-0 h-px bg-divider" />

            <div className={`text-secondary-white ${manrope}`}>
              {description}
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default ExperienceCard;
