

import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState([]);
  console.log("Menu Page", restaurantId);

  const [restaurantData, setRestaurantData] = useState();

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(`/public/restaurant-menu/${restaurantId}/1`);
      setRestaurantData(res.data.data);
      setMenuItems(res.data.data || []);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  console.log(restaurantData || "No data");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loading/>
      </div>
    );
  }

  if (menuItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        No menu items available
      </div>
    );
  }

  const { addToCart } = useCart();

  const handleAdd = (item) => {
    addToCart(item);
    toast.success(`${item.itemName} added to cart`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex gap-4"
          >
            {/* Item Image */}
            <img
              src={item.images?.[0]?.url}
              alt={item.itemName}
              className="w-24 h-24 rounded-lg object-cover"
            />

            {/* Item Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.itemName}
                </h2>

                <span className="font-bold text-green-600">₹{item.price}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="px-2 py-1 bg-gray-100 rounded">
                  ⏱ {item.preparationTime} min
                </span>

                <span className="px-2 py-1 bg-gray-100 rounded">
                  🍽 Serves {item.servingSize}
                </span>

                <span className="px-2 py-1 bg-gray-100 rounded">
                  🍛 {item.cuisine}
                </span>

                <span
                  className={`px-2 py-1 rounded text-white ${
                    item.availability === "available"
                      ? "bg-green-600"
                      : "bg-red-500"
                  }`}
                >
                  {item.availability}
                </span>
              </div>

              <button
                onClick={() => handleAdd(item)}
                disabled={item.availability !== "available"}
                className="mt-4 w-full py-2 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDisplayMenu;
