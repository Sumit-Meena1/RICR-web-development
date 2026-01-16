import React, {useState} from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";


const SideBar = ({ active, setActive }) => {
  
    
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex gap-3 items-center"><GiHamburgerMenu onClick={}/> User Dashboard</div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 rounded-xl p-3 items-center hover:bg-amber-500
              ${
                active === "overview" ? "bg-(--color-secondary) text-white" : ""
              }
              `}
            onClick={() => setActive("overview")}
          >
            <FaMagnifyingGlassChart />
            Overview
          </button>
          <button
            className={`flex gap-3 rounded-xl p-3 items-center hover:bg-amber-500
              ${active === "profile" ? "bg-(--color-secondary) text-white" : ""}
              `}
            onClick={() => setActive("profile")}
          >
            <CgProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 rounded-xl p-3 items-center hover:bg-amber-500
              ${active === "orders" ? "bg-(--color-secondary) text-white" : ""}
              `}
            onClick={() => setActive("orders")}
          >
            <FaCartShopping /> Orders
          </button>
          <button
            className={`flex gap-3 rounded-xl p-3 items-center hover:bg-amber-500
              ${
                active === "transection"
                  ? "bg-(--color-secondary) text-white"
                  : ""
              }
              `}
            onClick={() => setActive("transection")}
          >
            <GiReceiveMoney /> Transections
          </button>
          <button
            className={`flex gap-3 rounded-xl p-3 items-center hover:bg-amber-500
              ${active === "help" ? "bg-(--color-secondary) text-white" : ""}
              `}
            onClick={() => setActive("help")}
          >
            <RiCustomerServiceFill /> HelpDesk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
