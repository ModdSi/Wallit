import "./styles/tailStyle.css";
import rr from "../images/r.png";
function Footer({ income, setIncome }) {
  function handlClear() {
    localStorage.clear();
    console.log("cleared");
  }
  return (
    <div className="relative text-gray-500 md:w-11/12 w-5/6 mx-auto mt-4 mb-4 flex flex-row justify-center items-center ">
      <div className="  ">
        <h1>Muhammad Si ©️2025</h1>
      </div>
      <div
        onClick={handlClear}
        className=" cursor-pointer absolute right-1  flex flex-row gap-2 items-center"
      >
        <img className="w-[30px]  " src={rr} />
        <p className="hidden md:block">Clear Cache</p>
      </div>
    </div>
  );
}

export default Footer;
