import React from "react";
import { motion } from "framer-motion";

interface TabProps {
  active: boolean;
  selectTab: any;
  children: React.ReactNode;
}

const variants = {
  default: {width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}

export const Tab = ({ active, selectTab, children }: TabProps) => {
  const tabClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${tabClasses}`}>
        {children}
      </p>
      <motion.div animate={active ? "active" : "default"} variants={variants} className="h-1 bg-pink-500 rounded-full mt-1 mr-3">

      </motion.div>
    </button>
  );
};
