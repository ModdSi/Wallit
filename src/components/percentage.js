import "./styles/tailStyle.css";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

function Percentage({ prop, imges, clr }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,

        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      className="  bg-customwhite sm:text-sm flex flex-col justify-between items-center py-4 px-4 rounded-[36px] w-5/12 h-[180px] sm:h-[250px] md:w-1/4 md:h-[250px] xl:h-[250px]    md:rounded-[56px] "
    >
      {" "}
      <img src={imges} className="w-1/5 ml-24 md:ml-36 xl:ml-36" />
      <div className="text-4xl xl:text-6xl text-gray-600 mx-auto my-auto ">
        {" "}
        {prop}%
      </div>
      {clr ? (
        <div className="w-3/4 h-[10px] bg-customGreen rounded-[30px] mt-10"></div>
      ) : (
        <div className="w-3/4 h-[10px] bg-customRed rounded-[30px] mt-10"></div>
      )}
    </motion.div>
  );
}

export default Percentage;
