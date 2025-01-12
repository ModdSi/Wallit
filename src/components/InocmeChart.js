import React from "react";
import * as motion from "motion/react-client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function IncomeChart({ formattedData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      // initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      transition={{
        duration: 0.4,
        delay: 0.4,
        scale: { type: "spring", visualDuration: 0.9, bounce: 0.3 },
      }}
      className=" w-full chart-container    bg-customwhite md:w-2/5 flex items-center justify-center flex-col  p-8  rounded-[56px]"
    >
      <h1 className="text-customGreen  text-2xl">Income Chart</h1>
      <Line
        data={formattedData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Money Gained recently",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </motion.div>
  );
}
export default IncomeChart;
