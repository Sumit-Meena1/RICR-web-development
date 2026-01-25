import React, { useState } from "react";
// import { FaMagnifyingGlassChart } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { FaCartShopping } from "react-icons/fa6";
// import { GiReceiveMoney } from "react-icons/gi";
// import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import api from "../../config/Api.jsx"
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const SideBar = ({ active, setActive, collapse, setCollapse }) => {
  console.log(collapse);

  const handleCollapse = () => {
    setCollapse(false);
  };

  const handleLogout = async()=>{
    try{
      const res = await api.get("/auth/logout")
      toast.success(res.data.data);
    }catch(error){
      toast.error(error.response?.data?.message || "Technical Error");

    }

  }

  return (
    <>
      <div className="p-2 flex flex-col justify-between h-full ">
        <div className="p">
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
                  ? "bg-(--color-secondary) border-black border-b-3 text-white"
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
                  ? "bg-(--color-secondary) border-black border-b-3 text-white"
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
                  ? "bg-(--color-secondary) border-black border-b-3 text-white"
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
                  ? "bg-(--color-secondary) border-black border-b-3 text-white"
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
                  ? "bg-(--color-secondary) border-black border-b-3 text-white"
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
        <div>
          <button
            className={`flex gap-3 text-nowrap overflow-hidden rounded-xl p-3 text-red-600 bg-gray-500 hover:text-white items-center  hover:border-b-3`}
            onClick={handleLogout}
          >
            {/* <GiReceiveMoney />  */}
            ✈️ Log-Out
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
