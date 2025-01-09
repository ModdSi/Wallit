import { useState } from "react";
import "./styles/tailStyle.css";
function Draw({ income, setIncome }) {
  const [newName, setName] = useState("");
  const [newMoney, setMoney] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setIncome([
      ...income,
      {
        name: newName,
        money: -parseInt(newMoney) || 0,
      },
    ]);
  };

  return (
    <div className="  bg-customwhite w-full md:w-2/5 xl:w-2/4 px-4   rounded-[56px]">
      <form className="flex flex-col items-center" onSubmit={handlesubmit}>
        <h1 className=" text-xl my-6 justify-center  items-center text-gray-700">
          Add Expense
        </h1>
        <div className="flex flex-col justify-center w-3/4 ">
          <input
            type="text"
            name="name"
            value={newName}
            onChange={(e) => setName(e.target.value)}
            className=" rounded-[20px] bg-customGray m-2 p-1"
            placeholder="ex: New phone, Taxes, Subsicribtion"
          />
          <input
            type="number"
            onChange={(e) => setMoney(e.target.value)}
            value={newMoney}
            className="rounded-[20px] bg-customGray p-1 m-2 no-spinner"
            placeholder="ex: 350000IQD"
          />
        </div>
        <button
          type="submit"
          className="my-4 p-2 bg-lime-600 w-1/4 rounded-[20px] hover:bg-lime-700 hover:transition-all text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Draw;
