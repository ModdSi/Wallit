import "./styles/tailStyle.css";
function TotalBalance({ income }) {
  let total = 0;

  income.map((el) => {
    let i = el.money;
    total = total + i;
  });

  if (total < 0) total = 0;

  return (
    <div class="   bg-customwhite w-full  md:w-2/5   items-center justify-between py-14  flex flex-col  rounded-[56px] ">
      <h1 className=" text-xl  xl:mx-20   text-gray-700">Total Balance</h1>
      <h1 className=" text-2xl  xl:mx-10   text-customGreen">{total}IQD</h1>
    </div>
  );
}

export default TotalBalance;
