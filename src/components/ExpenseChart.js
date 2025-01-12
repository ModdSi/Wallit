import React from "react";

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
function ExpenseChart({ formattedData2 }) {
  return (
    <div className=" w-full chart-container   xl:mt-8 bg-customwhite md:w-2/5 flex items-center justify-center flex-col  p-8  rounded-[56px]">
      <h1 className="text-customRed  text-2xl">Income Chart</h1>
      <Line
        data={formattedData2}
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
    </div>
  );
}
export default ExpenseChart;
