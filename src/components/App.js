import Income from "./Income";
import SideBar from "./Sidebar";
import "./styles/tailStyle.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Expense from "./Expense";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import moon from "../images/moon.png";
import sun from "../images/sun.png";

function App() {
  // localStorage.clear();
  const [dark, setDark] = useState(true);
  const storedData = JSON.parse(localStorage.getItem("key"));
  if (!storedData) {
    localStorage.setItem(
      "key",
      JSON.stringify([{ name: "", money: 0, date: "" }])
    );
  }
  const [income, setIncome] = useState(storedData);

  useEffect(() => {
    document.title = "Wallit";
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("key", JSON.stringify(income));
    } catch (e) {
      console.log(`Reached storage limit`);
      localStorage.clear();
    }
  }, [income]);

  ////////// for income chart //////////////
  const moneyValues = (income || []).map((entry) => {
    if (entry.money > 0) return entry.money;
  });

  const labels2 = [];
  for (let i = 0; i < moneyValues.length; ++i) {
    labels2.push(i.toString());
  }

  console.log("this is money value for chart" + moneyValues);
  const formattedData = {
    labels: labels2, // Use your actual labels
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

  //////////////  for expense chart  ////////////////////
  const moneyValues2 = (income || []).map((entry) => {
    if (entry.money < 0) return entry.money;
  });

  const labels = [];
  for (let i = 0; i < moneyValues2.length; ++i) {
    labels.push(i.toString());
  }
  const formattedData2 = {
    labels: labels, // Use your actual labels
    datasets: [
      {
        label: "Money Diclined",
        data: moneyValues2, // Make sure this is an array of numbers matching the labels
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#903F3F",
        borderWidth: 3,
      },
    ],
  };

  function handleDarkmode() {
    setDark((prevDark) => !prevDark);
  }

  var inORex = true;
  return (
    <div
      className={`flex flex-col overflow-hidden min-h-screen ${
        dark ? "dark" : "light"
      } dark:bg-stone-800 transition-all`}
    >
      <div className="navbar flex flex-row p-4 md:mb-4 xl:mb-0 mt-4 mx-4 sm:mx-8 justify-between">
        <h1 className="dark:text-yellow-600 text-lime-600 text-4xl  font-medium">
          Wall<span className=" text-black dark:text-white">it</span>
        </h1>
        <div>
          <div
            onClick={handleDarkmode}
            className="mt-0 w-[30px] cursor-pointer"
          >
            <img src={dark ? sun : moon} />
          </div>
        </div>
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
              <Route
                path="/"
                element={<Home income={income} setIncome={setIncome} />}
              />
              <Route
                path="/expense"
                element={
                  <Expense
                    inORex={inORex}
                    income={income}
                    setIncome={setIncome}
                    formattedData2={formattedData2}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      <Footer income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
