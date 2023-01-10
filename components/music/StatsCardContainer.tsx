import React from "react";
import StatsCard from "./StatsCard";
import Divider from "components/Divider";

const StatsCardContainer = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard />
      </div>
      <Divider />
    </>
  );
};

export default StatsCardContainer;
