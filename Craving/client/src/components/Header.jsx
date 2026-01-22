import React from "react";
import trans2 from "../assets/trans2.png";
import { Link, useNavigate } from "react-router-dom";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import { GrContact } from "react-icons/gr";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={trans2}
            className="h-12 w-20 object-cover invert-100 animate-bounce"
          />
        </Link>
        <div className="flex gap-6">
          <Link
            to={"/"}
            className="text-decoration-none flex items-center gap-2 text-white hover:text-(--color-accent)"
          >
            {/* <IoHomeOutline /> */}
            🏠 Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none flex items-center gap-2 text-white hover:text-(--color-accent)"
          >
            {/* <FaRegSquarePlus /> */}
            📠 About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none flex items-center gap-2 text-white hover:text-(--color-accent)"
          >
            {/* <GrContact /> */}☎️ Contact
          </Link>
        </div>
        <div className="flex gap-3">
          {isLogin ? (
            <span className="text-white shadow-2xl shadow-black text-xl hover:animate-pulse">
              Hy {user?.fullName}🖐️
            </span>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary) py-2 px-4 rounded-2xl font-bold hover:bg-(--color-secondary-hover) hover:text-white"
              >
                🔑 LogIn
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) py-2 px-4 rounded-2xl  font-bold hover:bg-(--color-secondary-hover) hover:text-white"
              >
                🔐Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
