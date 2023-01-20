import React from "react";
import SpotifyEmbed from "./embeds/SpotifyEmbed";
import SoundCloudEmbed from "./embeds/SoundCloudEmbed";

type Props = {};

const EmbedContainer = (props: Props) => {
  return (
    <>
      {/* Apply styles if using <SoundCloudEmbed /> */}
      {/* grid grid-cols-2 gap-4 items-center */}
      <div className="my-12">
        {/* <SoundCloudEmbed /> */}
        <SpotifyEmbed />
      </div>
    </>
  );
};

export default EmbedContainer;
