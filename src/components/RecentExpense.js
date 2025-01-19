import "./styles/tailStyle.css";
import * as motion from "motion/react-client";
function RecentIncome({ income, inORex }) {
  let reIncome = [...income].reverse();
  console.log("from recent" + inORex);
  let count = 0;

  // Filter first six negative values
  const firstSixNegatives = reIncome.filter((item) => {
    if (item.money < 0 && count < 6) {
      count++;
      return true;
    }
    return false;
  });

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
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.3 },
      }}
      className="bg-customwhite dark:bg-stone-400 p-4 w-full md:w-2/5 xl:w-2/4  flex flex-col rounded-[56px] overflow-hidden min-h-[400px]"
    >
      <h1 className="text-lg mb-4 mt-2 mx-10 text-gray-700">Recent</h1>
      <div className="flex flex-col">
        {/* Check if there is no data */}
        {firstSixNegatives.length === 0 ? (
          <div className="flex  text-gray-400 dark:text-gray-500 mx-10 justify-center items-center my-28  flex-row">
            <h1>No Data Yet</h1>
          </div>
        ) : (
          firstSixNegatives.map((el, index) => {
            // Render each negative income item
            if (el.money) {
              return (
                <div
                  key={index}
                  className="container py-2.5 mb-2 bg-customGray rounded-[56px]"
                >
                  <div className="flex text-gray-600 mx-10 justify-between flex-row">
                    <h1 className="xl:mr-20">{el.name}</h1>
                    <h1 className="flex-row-reverse text-customRed">
                      {el.money} IQD
                    </h1>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </motion.div>
  );
}

export default RecentIncome;
