import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex bg-primary p-2 text-light align-items-center justify-content-between">
        <h3>My Website</h3>
        <div className="d-flex gap-3">
            <Link to={"/"} className="text-decoration-none text-light">Home</Link>
            <Link to={"/about"} className="text-decoration-none text-light">About</Link>
            <Link to={"/product"} className="text-decoration-none text-light">Products</Link>
            <Link to={"/contact"} className="text-decoration-none text-light">Contacts</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
