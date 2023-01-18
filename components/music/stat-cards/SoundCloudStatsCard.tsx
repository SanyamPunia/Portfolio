import Divider from "components/Divider";
import { poppins } from "lib/util/get-class";
import React from "react";
import { FaSoundcloud } from "react-icons/fa";
// import takeScreenshot from "lib/util/screenshot";

type Props = {};

const SoundCloudStatsCard = (props: Props) => {
  return (
    <div className="stats-card">
      <div className="flex justify-between text-primary-white text-xl">
        <h1 className={`${poppins}`}>SoundCloud</h1>
        <div className="p-1 roudned-md transition-all duration-300">
          <span style={{ color: "#FF7700" }}>
            <FaSoundcloud />
          </span>
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default SoundCloudStatsCard;
