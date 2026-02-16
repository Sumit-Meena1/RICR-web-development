import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const data = useLocation().state;
  console.log("Resturant Menu Page", data);

  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState();

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setMenuItems(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  return (
    <>
      <div className="w-7xl p-3 rounded shadow mx-auto mt-2 ">
        <img
          src={data.photo.url}
          alt=""
          className="w-48 h-48 object-cover rounded"
        />
      </div>
      <div className="w-7xl p-3 rounded shadow mx-auto mt-2 ">
        <div className="text-(--color-secondary) font-bold text-2xl text-center">
          Menu
        </div>

        <div className="space-y-3">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                className="border border-gray-100 hover:shadow-lg  p-4 rounded"
                key={idx}
              >
                <div className="flex gap-4">
                  <img
                    src={EachItem.images[0].url}
                    alt=""
                    className="w-40 h-40 object-cover rounded "
                  />

                  <div className="flex justify-between border-red-500 w-full">
                    <div>
                      <div className="text-(--color-primary) text-lg font-bold">
                        {EachItem.itemName}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {EachItem.description}
                      </div>
                      <div className="mt-3 space-y-1 text-sm">
                        <div>
                          <span className="font-semibold">Cuisine:</span>{" "}
                          {EachItem.cuisine}
                        </div>
                        <div>
                          <span className="font-semibold">Type:</span>{" "}
                          <span
                            className="capitalize px-2 py-1 rounded text-white"
                            style={{
                              backgroundColor:
                                EachItem.type === "veg" ? "#22c55e" : "#ef4444",
                            }}
                          >
                            {EachItem.type}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold">Serving Size:</span>{" "}
                          {EachItem.servingSize}
                        </div>
                        <div>
                          <span className="font-semibold">
                            Preparation Time:
                          </span>{" "}
                          {EachItem.preparationTime}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <span className="font-semibold">Availability:</span>{" "}
                        <span
                          className={`capitalize px-2 py-1 rounded ${EachItem.availability === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                        >
                          {EachItem.availability}
                        </span>
                      </div>
                      <div className="text-(--color-primary) text-2xl font-bold">
                        ₹{EachItem.price}
                      </div>
                      <button className="bg-(--color-primary) text-white px-6 py-2 rounded hover:bg-(--color-primary-hover) transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantDisplayMenu;

// import React from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import api from "../config/Api";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useCart } from "../context/CartContext";
// import Loading from "../components/Loading";

// const RestaurantDisplayMenu = () => {
//   const restaurantId = useParams().id;
//   const [loading, setLoading] = useState(true);
//   const [menuItems, setMenuItems] = useState([]);
//   console.log("Menu Page", restaurantId);

//   const [restaurantData, setRestaurantData] = useState();

//   const fetchRestaurantMenu = async () => {
//     try {
//       const res = await api.get(`/public/restaurant-menu/${restaurantId}/1`);
//       setRestaurantData(res.data.data);
//       setMenuItems(res.data.data || []);
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRestaurantMenu();
//   }, [restaurantId]);

//   console.log(restaurantData || "No data");

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[60vh] text-gray-500">
//         <Loading/>
//       </div>
//     );
//   }

//   if (menuItems.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-[60vh] text-gray-500">
//         No menu items available
//       </div>
//     );
//   }

//   const { addToCart } = useCart();

//   const handleAdd = (item) => {
//     addToCart(item);
//     toast.success(`${item.itemName} added to cart`);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Menu</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex gap-4"
//           >
//             {/* Item Image */}
//             <img
//               src={item.images?.[0]?.url}
//               alt={item.itemName}
//               className="w-24 h-24 rounded-lg object-cover"
//             />

//             {/* Item Info */}
//             <div className="flex-1">
//               <div className="flex justify-between items-start">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {item.itemName}
//                 </h2>

//                 <span className="font-bold text-green-600">₹{item.price}</span>
//               </div>

//               <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                 {item.description}
//               </p>

//               <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
//                 <span className="px-2 py-1 bg-gray-100 rounded">
//                   ⏱ {item.preparationTime} min
//                 </span>

//                 <span className="px-2 py-1 bg-gray-100 rounded">
//                   🍽 Serves {item.servingSize}
//                 </span>

//                 <span className="px-2 py-1 bg-gray-100 rounded">
//                   🍛 {item.cuisine}
//                 </span>

//                 <span
//                   className={`px-2 py-1 rounded text-white ${
//                     item.availability === "available"
//                       ? "bg-green-600"
//                       : "bg-red-500"
//                   }`}
//                 >
//                   {item.availability}
//                 </span>
//               </div>

//               <button
//                 onClick={() => handleAdd(item)}
//                 disabled={item.availability !== "available"}
//                 className="mt-4 w-full py-2 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantDisplayMenu;
