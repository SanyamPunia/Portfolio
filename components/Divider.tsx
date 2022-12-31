"use client";

import { motion } from "framer-motion";

type Props = {};

const Divider = (props: Props) => {
  return (
    <div className="my-14">
      <hr className="border-0 h-px bg-divider" />
    </div>
  );
};

export default Divider;
