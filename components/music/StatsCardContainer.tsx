import React from "react";
import SpotifyStatsCard from "./stat-cards/SpotifyStatsCard";
import SoundCloudStatsCard from "./stat-cards/SoundCloudStatsCard";
import YouTubeStatsCard from "./stat-cards/YouTubeStatsCard";

const StatsCardContainer = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 flex flex-col gap-4">
        <SpotifyStatsCard />
        {/* <SoundCloudStatsCard /> */}
        <YouTubeStatsCard />
      </div>
    </>
  );
};

export default StatsCardContainer;
