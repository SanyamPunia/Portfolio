import React from "react";

type Props = {};

const SpotifyEmbed = (props: Props) => {
  return (
    <div className="rounded-md">
      <iframe
        src="https://open.spotify.com/embed/artist/2QbtOIjb8mUIsnCNqvyWAW?utm_source=generator"
        width="100%"
        height="400px"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
