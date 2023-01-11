import Divider from "components/Divider";
import React from "react";

type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <div className="animate-pulse border transition-all duration-300 shadow  border-primary-card-border p-6 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
        <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
      </div>
      <Divider />
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center">
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
          <div className="h-0.5 w-20 rounded-md bg-primary-card-border"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
