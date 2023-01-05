import React from "react";
import StatsCard from "./StatsCard";
import { stats } from "lib/stats-info";
import Divider from "components/Divider";

const StatsCardContainer = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard stats={stats} />
      </div>
      <Divider />
    </>
  );
};

export default StatsCardContainer;
