import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import rr from "../images/r.png";

export default function PopupGfg() {
  function handlClear() {
    localStorage.clear();
    window.location.reload();
    console.log("cleared");
  }
  return (
    <div className="cursor-pointer absolute right-1 ">
      <Popup
        trigger={
          <div className="flex flex-row gap-2 items-center">
            <img className="w-[30px]" src={rr} alt="Clear Cache" />
            <p className="hidden md:block">Clear Cache</p>
          </div>
        }
        modal
        nested
        contentStyle={{ width: "400px", borderRadius: "30px", padding: "20px" }}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        {(close) => (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Delete All Data?
            </h2>

            <div className="flex flex-row gap-4">
              <button
                className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900"
                onClick={() => {
                  handlClear();
                  close();
                }}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-500"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
