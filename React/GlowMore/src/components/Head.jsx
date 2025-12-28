import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <div className="flex gap-3 bg-blue-700 justify-between py-2.5 px-2.5">
        <div className="text-white text-shadow-black text-4xl">Glow More</div>
        <div className="flex gap-4.5 mx-5 text-2xl text-white">
          <Link to={"/"} className="text-decoration-none">
            Home
          </Link>
          <Link to={"/product"} className="text-decoration-none">
            Product
          </Link>
          <Link to={"/about"} className="text-decoration-none">
            About
          </Link>
          <Link to={"/contact"} className="text-decoration-none">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;
