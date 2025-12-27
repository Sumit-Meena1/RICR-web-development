import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <div className="flex gap-3 bg-blue-700 justify-between">
        <div className="text-white text-shadow-black">Glow More</div>
        <div className="flex gap-4.5 mx-5">
          <Link to={"/"} className="text-decoration-none text-light ">
            Home
          </Link>
          <Link to={"/about"} className="text-decoration-none text-light">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;
