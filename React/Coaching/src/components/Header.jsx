import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex bg-primary p-2 text-light align-items-center justify-content-between">
        <h3>Coaching Registration</h3>
        <div className="d-flex gap-3">
            <Link to={"/"} className="text-decoration-none text-light">Home</Link>
            <Link to={"/login"} className="text-decoration-none text-light">LogIn</Link>
            <Link to={"/signup"} className="text-decoration-none text-light">SignUp</Link>
        </div>
      </div>
    </>
  );
};

export default Header;