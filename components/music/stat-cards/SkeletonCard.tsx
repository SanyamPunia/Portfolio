import Divider from "components/Divider";
import React from "react";
import clsx from "clsx";

type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <div
      className={clsx(
        "transition-all duration-300",
        "border border-primary-card-border",
        "shadow rounded-xl p-6",
        "animate-pulse"
      )}
    >
      <div className={clsx("flex", "justify-between items-center")}>
        <div
          className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
        />
        <div
          className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
        />
      </div>
      <Divider />
      <div className={clsx("flex", "flex-col space-y-5")}>
        <div className={clsx("flex", "justify-between items-center")}>
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
        </div>
        <div className={clsx("flex", "justify-between items-center")}>
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
        </div>
        <div className={clsx("flex", "justify-between items-center")}>
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
          <div
            className={clsx("h-1 w-20", "rounded-lg", "bg-primary-card-border")}
          />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
