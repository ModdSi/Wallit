import "./styles/tailStyle.css";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

function Percentage({ income, setIncome }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
      }}
      className="  bg-customwhite w-full md:w-3/5 xl:w-1/4 px-4 py-6  rounded-[56px]"
    >
      jadsm
    </motion.div>
  );
}

export default Percentage;
