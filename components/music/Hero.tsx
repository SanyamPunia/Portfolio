import { manrope } from "lib/util/get-class";
import React from "react";
import EmbedContainer from "./EmbedContainer";
import StatsCardContainer from "./StatsCardContainer";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={`text-secondary-white ${manrope} text-hero-primary-para space-y-12 mb-12`}
    >
      <p className="leading-normal tracking-wide">
        <span className="text-4xl">2020</span> was the year when I decided to
        put my music out on the internet. Uploading my music to{" "}
        <span className="text-primary-white underline transition-all hover:text-secondary-white">
          <a
            href="https://soundcloud.com/prodmxle"
            target="_blank"
            rel="noreferrer"
          >
            SoundCloud
          </a>
        </span>
        ,{" "}
        <span className="text-primary-white underline transition-all hover:text-secondary-white">
          <a
            href="https://open.spotify.com/artist/2QbtOIjb8mUIsnCNqvyWAW"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </span>
        ,{" "}
        <span className="text-primary-white underline transition-all hover:text-secondary-white">
          <a
            href="https://www.youtube.com/channel/UCz0--qtJqdsucn3HY0sx5qg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </span>
        , and other platforms helped me gather a bunch of people that enjoyed
        listening to my music.
      </p>

      <StatsCardContainer />

      <p className="leading-normal tracking-wide">
        Reaching <span className="text-primary-white">75,000+</span> plays on
        SoundCloud within a span of 1.5 years was a big achievement for me. With
        combined plays from YouTube & other streaming services, the total number of
        plays peaked <span className="text-primary-white">150,000+</span>.
      </p>

      <EmbedContainer />
    </div>
  );
};

export default Hero;
