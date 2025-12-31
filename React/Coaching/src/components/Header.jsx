import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between px-20 py-3 bg-amber-700">
        <h3 className="text-2xl text-amber-300">Coaching Registration</h3>
        <div className="flex gap-4">
            <Link to={"/"} className="text-2xl text-amber-300">Home</Link>
            <Link to={"/login"} className="text-2xl text-amber-300">LogIn</Link>
            <Link to={"/signup"} className="text-2xl text-amber-300">SignUp</Link>
        </div>
      </div>
    </>
  );
};

export default Header;