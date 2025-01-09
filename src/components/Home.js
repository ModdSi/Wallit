import "./styles/tailStyle.css";
function Home() {
  return (
    <div>
      <div className=" bg-customwhite   flex flex-col items-center rounded-[56px]">
        <h1 className=" text-xl my-6 justify-center  items-center text-gray-700">
          Add Income
        </h1>
        <div className="mx-10 ">
          <input
            className="my-2 mr-4 rounded-[20px] bg-customGray p-1"
            placeholder="ex: Salary"
          />
          <input
            className="rounded-[20px] bg-customGray p-1"
            placeholder="ex: 499USD"
          />
        </div>
        <button className="my-4 p-2 bg-lime-600 w-1/4 rounded-[20px] text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default Home;
