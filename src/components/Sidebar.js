import "./styles/tailStyle.css";
import home from "../images/home.png";
import coin from "../images/coin.png";
import notebook from "../images/notebook.png";
import { Link } from "react-router-dom";
function SideBar({ inORex }) {
  return (
    <div className=" xl:h-[665px]  mb-8 xl:mb-0  font-body font-semibold container bg-customGreen w-5/6 md:w-11/12 xl:w-52     rounded-[56px]  p-4 md:p-2 flex   items-center ">
      <div
        id="buttons"
        className="w-screen flex xl:flex-col  flex-row justify-center"
      >
        {/* btn 1 */}
        <Link to="/">
          <div className=" md:hover:bg-lime-700 my-auto flex flex-row rounded-full cursor-pointer ">
            <div className=" my-auto   mx-4 md:ml-6 h-8 w-8">
              <img src={home} />
            </div>
            <h2 className="text-white hidden md:block mx-2 text-xl my-4 md:mr-8">
              Home
            </h2>
          </div>
        </Link>

        {/* btn2 */}
        <Link to="/income">
          <div
            onClick={() => {
              inORex = true;
              console.log(inORex);
            }}
            className=" md:hover:bg-lime-700 my-auto flex flex-row  rounded-full cursor-pointer"
          >
            <div className=" my-auto mx-4 md:ml-6 h-8 w-8">
              <img src={coin} />
            </div>
            <h2 className="text-white xl:mx-2 hidden md:block text-xl my-4 md:mr-8">
              Income
            </h2>
          </div>
        </Link>

        {/* btn 3 */}
        <Link to="/expense">
          {" "}
          <div
            onClick={() => {
              inORex = false;
              console.log(inORex);
            }}
            className=" md:hover:bg-lime-700 my-auto flex flex-row rounded-full cursor-pointer"
          >
            <div className=" my-auto mx-4 md:ml-6 h-8 w-8">
              <img src={notebook} />
            </div>
            <h2 className="text-white xl:mx-2 hidden md:block text-xl my-4 md:mr-8">
              Expense
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
