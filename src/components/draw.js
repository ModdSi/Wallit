import { useState } from "react";
import "./styles/tailStyle.css";
import * as moiton from "motion/react-client";
function Draw({ income, setIncome }) {
  const [newName, setName] = useState("");
  const [newMoney, setMoney] = useState("");

  const handlesubmit = (e) => {
    const currentDate = new Date();

    e.preventDefault();
    setIncome([
      ...income,
      {
        name: newName,
        money: -parseInt(newMoney) || 0,
        date: currentDate.toString(),
      },
    ]);
    console.log(income);
  };

  return (
    <moiton.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      // initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      className="  bg-customwhite w-full md:w-2/5 xl:w-2/4 px-4   rounded-[56px]"
    >
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
          className="my-4 p-2 bg-customRed w-1/4 rounded-[20px] hover:bg-red-900 hover:transition-all text-white"
        >
          Add
        </button>
      </form>
    </moiton.div>
  );
}

export default Draw;
