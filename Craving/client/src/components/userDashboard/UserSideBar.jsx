import React, { useState } from "react";
// import { FaMagnifyingGlassChart } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { FaCartShopping } from "react-icons/fa6";
// import { GiReceiveMoney } from "react-icons/gi";
// import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ active, setActive, collapse, setCollapse }) => {
  console.log(collapse);

  const handleCollapse = () => {
    setCollapse(false);
  };

  return (
    <>
      <div className="p-3">
        <div
          className="text-xl font-bold flex gap-3 items-center"
          onClick={handleCollapse}
        >
          <GiHamburgerMenu /> User Dashboard
        </div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl p-3 items-center 
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-amber-500  hover:border-b-3"
              }
              `}
            onClick={() => setActive("overview")}
          >
            {/* <FaMagnifyingGlassChart /> */}
            🔍 Overview
          </button>
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl  p-3 items-center 
              ${
                active === "profile"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-amber-500  hover:border-b-3"
              }
              `}
            onClick={() => setActive("profile")}
          >
            {/* <CgProfile /> */}
            👨‍💻 Profile
          </button>
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl p-3 items-center 
              ${
                active === "orders"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-amber-500  hover:border-b-3"
              }
              `}
            onClick={() => setActive("orders")}
          >
            {/* <FaCartShopping /> */}
            🛒 Orders
          </button>
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl p-3 items-center 
              ${
                active === "transection"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-amber-500  hover:border-b-3"
              }
              `}
            onClick={() => setActive("transection")}
          >
            {/* <GiReceiveMoney />  */}
            💸 Transections
          </button>
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl p-3 items-center 
              ${
                active === "help"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-amber-500  hover:border-b-3"
              }
              `}
            onClick={() => setActive("help")}
          >
            {/* <RiCustomerServiceFill /> */}
            🕹️ HelpDesk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
