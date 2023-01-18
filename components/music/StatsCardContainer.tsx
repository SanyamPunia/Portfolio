import React from "react";
import Divider from "components/Divider";
import SpotifyStatsCard from "./stat-cards/SpotifyStatsCard";
import SoundCloudStatsCard from "./stat-cards/SoundCloudStatsCard";
import YouTubeStatsCard from "./stat-cards/YouTubeStatsCard";

const StatsCardContainer = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <SpotifyStatsCard />
        {/* <SoundCloudStatsCard /> */}
        <YouTubeStatsCard />
      </div>
      <Divider />
    </>
  );
};

export default StatsCardContainer;
