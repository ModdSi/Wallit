import Draw from "./draw.js";
import RecentExpense from "./RecentExpense.js";
import "./styles/tailStyle.css";
import TotalBalance from "./TotalBalance.js";
function Expense({ income, setIncome, inORex }) {
  return (
    <div class="   font-body font-semibold   w-full h-3/4  my-auto mb-0 flex flex-row flex-wrap justify-center gap-4">
      <Draw income={income} setIncome={setIncome} />
      <TotalBalance income={income} />

      <RecentExpense income={income} inORex={inORex} />
    </div>
  );
}

export default Expense;
