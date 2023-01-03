"use client";

import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="px-8 max-w-3xl mx-auto"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
