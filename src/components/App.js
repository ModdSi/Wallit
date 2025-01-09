import Income from "./Income";
import SideBar from "./Sidebar";
import "./styles/tailStyle.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Expense from "./Expense";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  // localStorage.clear();
  const storedData = JSON.parse(localStorage.getItem("key"));
  if (!storedData) {
    localStorage.setItem("key", JSON.stringify([{ name: "", money: 0 }]));
  }
  const [income, setIncome] = useState(storedData);

  useEffect(() => {
    try {
      localStorage.setItem("key", JSON.stringify(income));
    } catch (e) {
      console.log(`Reached storage limit`);
      localStorage.clear();
    }
  }, [income]);

  const moneyValues = income.map((entry) => entry.money);
  console.log("this is money value for chart" + moneyValues);
  const formattedData = {
    labels: ["1", "2", "3", "4", "5", "6"], // Use your actual labels
    datasets: [
      {
        label: "Money Gained",
        data: moneyValues, // Make sure this is an array of numbers matching the labels
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#669835",
        borderWidth: 3,
      },
    ],
  };

  if (income.money < 0) {
    setIncome([
      ...income,
      {
        name: "reset",
        money: 0,
      },
    ]);
  }

  var inORex = true;

  return (
    <div className="flex flex-col   overflow-hidden ">
      <div className="navbar p-4 md:mb-4 xl:mb-0 ">
        <h1 className=" text-lime-600 text-3xl mt-4 mx-20 font-medium">
          Wall<span className=" text-black">it</span>
        </h1>
      </div>
      <div className=" ">
        <div className=" w-screen  flex xl:flex-row flex-col  xl:justify-start items-center xl:items-start  p-4  my-0 ">
          <div className="md:w-lvw xl:w-1/5   flex justify-center  xl:mr-4  ">
            <SideBar prop={inORex} />
          </div>
          <div className=" w-full  xl:mr-8 ">
            <Routes>
              <Route
                path="/income"
                element={
                  <Income
                    inORex={inORex}
                    income={income}
                    setIncome={setIncome}
                    formattedData={formattedData}
                  />
                }
              />
              <Route path="/" element={<Home />} />
              <Route
                path="/expense"
                element={
                  <Expense
                    inORex={inORex}
                    income={income}
                    setIncome={setIncome}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
