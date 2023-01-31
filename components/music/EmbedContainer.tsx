import React from "react";
import SpotifyEmbed from "./embeds/SpotifyEmbed";

type Props = {};

const EmbedContainer = (props: Props) => {
  return (
    <>
      <div className="my-12">
        <SpotifyEmbed />
      </div>
    </>
  );
};

export default EmbedContainer;
