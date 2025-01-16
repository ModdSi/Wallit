import "./styles/tailStyle.css";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
function TotalBalance({ income, setIncome }) {
  let total = 0;

  income.map((el) => {
    let i = el.money;
    total = total + i;
  });

  useEffect(() => {
    if (total < 0) {
      setIncome((prevIncome) => {
        // Add values to income to refill the balance back to 0
        const newIncome = [...prevIncome];
        const deficit = Math.abs(total); // Amount needed to balance the total to 0
        newIncome.push({ money: deficit, name: "zeroReset" }); // Refill with the necessary value
        return newIncome;
      });
    }
  }, [total, setIncome]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
      }}
      class="   bg-customwhite w-full  md:w-2/5   items-center justify-around py-14  flex flex-col  rounded-[56px] "
    >
      <h1 className=" text-2xl  xl:mx-20   text-gray-700">Total Balance</h1>
      <h1 className=" text-3xl  xl:mx-10   text-customGreen">{total}IQD</h1>
    </motion.div>
  );
}

export default TotalBalance;
