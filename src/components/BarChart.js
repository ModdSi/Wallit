import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import * as motion from "motion/react-client";
// Register necessary components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ income }) {
  // Data for the chart
  const dates = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Map income data to monthly values
  const monthlyIncome = Array(12).fill(0); // Initialize an array with 12 zeros
  income.forEach((item) => {
    monthlyIncome[item.date] += item.money;
  });
  console.log(monthlyIncome);
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Income",
        data: monthlyIncome,
        backgroundColor: Array(12).fill("rgba(54, 162, 235, 0.2)"), // Same color for all months
        borderColor: Array(12).fill("rgba(54, 162, 235, 1)"),
        borderWidth: 1,
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        scale: 0.5,
      },
      title: {
        display: true,
        text: "Monthly Income Data",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      // initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
      }}
      className="flex flex-col dark:bg-stone-400 justify-center items-center  bg-customwhite w-full h-[300px] sm:h-[100px] md:h-[300px] xl:h-[400px] md:w-6/12 xl:w-3/6 px-4 py-0 xl:py-16 md:py-0 rounded-[56px]"
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
}

export default BarChart;
