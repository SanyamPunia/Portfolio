import React from "react";
import { FaExclamationTriangle, FaSpotify } from "react-icons/fa";
import { manrope } from "lib/util/get-class";

type Props = {};

const Spotify = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <FaSpotify className="text-[#1DB954]" />
        <h1 className={`text-white ${manrope}`}>Now Playing</h1>
      </div>
      <div className="flex gap-2">
        {/* <FaExclamationTriangle className="text-white" /> */}
        <div className="flex gap-1 text-white">
          <p>MXLE</p>
          <p>Glitched</p>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
