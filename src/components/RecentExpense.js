import "./styles/tailStyle.css";
function RecentIncome({ income, inORex }) {
  let reIncome = [...income].reverse();
  console.log("from recent" + inORex);
  let count = 0;
  const firstSixNegatives = reIncome.filter((item) => {
    if (item.money < 0 && count < 6) {
      count++;
      return true;
    }
    return false;
  });

  return (
    <div class="  bg-customwhite p-4   w-full md:w-2/5 h-4/6 xl:w-2/4 flex flex-col  rounded-[56px] overflow-hidden ">
      <h1 className=" text-lg mb-4 mt-2 mx-10   text-gray-700">Recent</h1>
      <div className="flex flex-col">
        {firstSixNegatives.map((el) => {
          if (el.name == "" && el.money == 0) {
            var content = <h1 className=" ">No Data Yet</h1>;

            return (
              <div className="flex  my-20 text-gray-400 mx-10 justify-center items-center flex-row">
                {content}
              </div>
            );
          } else if (el.money) {
            console.log("hi jasm");
            content = "";
            return (
              <div className="container  py-2.5 mb-2 bg-customGray rounded-[56px]">
                <div className="flex    mx-10 justify-between flex-row">
                  <h1 className="text-gray-600 xl:mr-20">{el.name}</h1>
                  <h1 className="flex-row-reverse text-customRed opacity-75">
                    {el.money}IQD
                  </h1>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default RecentIncome;
