import React from "react";

type Props = {};

const SoundCloudEmbed = (props: Props) => {
  return (
    <div className="rounded-md">
      <iframe
        width="100%"
        height="400px"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1336060153&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
  );
};

export default SoundCloudEmbed;
