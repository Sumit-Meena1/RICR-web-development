import React from "react";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaIndianRupeeSign } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className="flex justify-between px-4 py-2 bg-amber-700">
        <HiCurrencyDollar/>
        <HiMiniCurrencyEuro/>
        <h3 className="text-2xl text-amber-300 px-4 p-2">Currency Converter</h3>
        <HiCurrencyDollar/>
        <FaIndianRupeeSign/>
      </div>
    </>
  );
};

export default Header;