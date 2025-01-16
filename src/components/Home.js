import BarChart from "./BarChart";
import DonutChart from "./Doughnut";
import Percentage from "./percentage";
import "./styles/tailStyle.css";
import TotalBalance from "./TotalBalance";
import grArr from "../images/grArrow.png";
import rdArr from "../images/reArrow.png";

function Home({ income, setIncome, formattedData }) {
  let imges = [grArr, rdArr];
  let incomePart = 0;
  let expensePart = 0;
  income.forEach((item) => {
    if (item.money > 0) {
      incomePart += item.money;
    } else {
      expensePart -= item.money;
    }
  });

  let perIncome = (incomePart / (incomePart + expensePart)) * 100;
  let perExpense = (expensePart / (incomePart + expensePart)) * 100;
  return (
    <div class="   font-body font-semibold   w-full h-3/4  my-auto mb-0 flex flex-row flex-wrap justify-center gap-4">
      <Percentage prop={Math.round(perIncome)} imges={imges[0]} clr={true} />
      <Percentage prop={Math.round(perExpense)} imges={imges[1]} clr={false} />

      <TotalBalance income={income} setIncome={setIncome} />
      <BarChart income={income} formattedData={formattedData} />
      <DonutChart incomePart={incomePart} expensePart={expensePart} />
    </div>
  );
}

export default Home;
