import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import * as motion from "motion/react-client";
// Register necessary components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({ incomePart, expensePart }) {
  // Data for the chart
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Votes",
        data: [incomePart, expensePart], // Values for each category
        backgroundColor: [
          "rgb(101,152,53)",
          "rgb(153,46,35)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        borderWidth: 0,
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw;
            return `${label}: ${value}`;
          },
        },
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
        delay: 0.4,
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.3 },
      }}
      className="flex flex-col justify-center items-center bg-customwhite w-full sm:h-[100px] md:h-[300px] xl:h-[400px] md:w-2/5 xl:w-2/5 px-20 py-12  rounded-[56px]"
    >
      <h2>Actions</h2>
      <Doughnut data={data} options={options} />
    </motion.div>
  );
}

export default DonutChart;
