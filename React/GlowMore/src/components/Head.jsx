import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <div>Glow More</div>
      <div className="flex gap-3 bg-blue-700">
            <Link to={"/"} className="text-decoration-none text-light">Home</Link>
            <Link to={"/about"} className="text-decoration-none text-light">About</Link>
        </div>
    </>
  );
};

export default Head;
