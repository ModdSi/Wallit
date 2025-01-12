import Draw from "./draw.js";
import ExpenseChart from "./ExpenseChart.js";
import RecentExpense from "./RecentExpense.js";
import "./styles/tailStyle.css";
import TotalBalance from "./TotalBalance.js";
function Expense({ income, setIncome, inORex, formattedData2 }) {
  return (
    <div class="   font-body font-semibold   w-full h-3/4  my-auto mb-0 flex flex-row flex-wrap justify-center gap-4">
      <Draw income={income} setIncome={setIncome} />
      <TotalBalance income={income} setIncome={setIncome} />
      <RecentExpense income={income} inORex={inORex} />
      <ExpenseChart formattedData2={formattedData2} />
    </div>
  );
}

export default Expense;
