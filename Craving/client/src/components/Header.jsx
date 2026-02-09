import React, { useState } from "react";
import trans2 from "../assets/trans2.png";
import { Link, useNavigate } from "react-router-dom";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import { GrContact } from "react-icons/gr";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { user, isLogin, role } = useAuth();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalItems } = useCart();
  const [openCart, setOpenCart] = useState(false);

  const handleNavigate = () => {
    switch (res.data.data.role) {
      case role: {
        navigate("/restaurant-dashboard");
        break;
      }
      case "admin": {
        navigate("/admin-dashboard");
        break;
      }
      case "partner": {
        navigate("/rider-dashboard");
        break;
      }
      case "customer": {
        navigate("/user-dashboard");
        break;
      }
      default:
        break;
    }
  };

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
          <div className="relative">
            <button
              onClick={() => setOpenCart((s) => !s)}
              className="text-white text-xl px-3 py-2 rounded hover:opacity-90"
              aria-label="cart"
            >
              🛒
              <span className="ml-1 bg-red-600 text-xs rounded-full px-2 py-0.5">
                {getTotalItems()}
              </span>
            </button>

            {openCart && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-black shadow-lg rounded p-3 z-50">
                <h4 className="font-semibold mb-2">Your Cart</h4>
                {cartItems.length === 0 ? (
                  <div className="text-gray-500">Cart is empty</div>
                ) : (
                  <div className="flex flex-col gap-2 max-h-60 overflow-auto">
                    {cartItems.map((it) => (
                      <div key={it._id} className="flex items-center gap-2">
                        <img src={it.images?.[0]?.url} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{it.itemName}</div>
                          <div className="text-xs text-gray-600">₹{it.price}</div>
                          <div className="mt-1 flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(it._id, (it.quantity || 1) - 1)}
                              className="px-2 bg-gray-200 rounded"
                            >
                              -
                            </button>
                            <div className="px-2">{it.quantity || 1}</div>
                            <button
                              onClick={() => updateQuantity(it._id, (it.quantity || 1) + 1)}
                              className="px-2 bg-gray-200 rounded"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(it._id)}
                              className="ml-auto text-red-600 text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 flex justify-end">
                      <Link to={'/order-now'} onClick={() => setOpenCart(false)} className="bg-green-600 text-white px-3 py-1 rounded">Checkout</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {isLogin ? (
            <div
              onClick={() => navigate("/customer-dashboard")}
              className="text-white shadow-2xl cursor-pointer shadow-black text-xl hover:animate-pulse"
            >
              Hy {user.fullName}🖐️
            </div>
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
