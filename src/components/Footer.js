import "./styles/tailStyle.css";

import PopupGfg from "./popup";

function Footer({ income, setIncome }) {
  return (
    <div className="relative text-gray-500 md:w-11/12 w-5/6 mx-auto mt-4 mb-4 flex flex-row justify-center items-center ">
      <div className="  ">
        <h1>Muhammad Si ©️2025</h1>
      </div>
      <PopupGfg className=" cursor-pointer absolute right-1  flex flex-row gap-2 items-center" />
    </div>
  );
}

export default Footer;
