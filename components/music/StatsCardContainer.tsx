import React from "react";
import SpotifyStatsCard from "./stat-cards/SpotifyStatsCard";
import YouTubeStatsCard from "./stat-cards/YouTubeStatsCard";
import clsx from "clsx";

const StatsCardContainer = () => {
  return (
    <div
      className={clsx("sm:grid sm:grid-cols-2 sm:gap-4", "flex flex-col gap-4")}
    >
      <SpotifyStatsCard />
      <YouTubeStatsCard />
    </div>
  );
};

export default StatsCardContainer;
