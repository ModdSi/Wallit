import Add from "./Add";
import IncomeChart from "./InocmeChart";
import RecentIncome from "./RecentIncome";
import "./styles/tailStyle.css";
import TotalBalance from "./TotalBalance";

function Income({ income, setIncome, formattedData, inORex }) {
  console.log("from income" + inORex);
  return (
    <div class="   font-body font-semibold   w-full h-3/4  my-auto mb-0 flex flex-row flex-wrap justify-center gap-4">
      <Add income={income} setIncome={setIncome} />
      <TotalBalance income={income} />
      <RecentIncome income={income} inORex={inORex} />
      <IncomeChart formattedData={formattedData} />
    </div>
  );
}

export default Income;
