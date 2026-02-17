import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState();

  const fetctAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetctAllRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantinfo) => {
    console.log("Restaurant Clicked");
    navigate("/restaurant", { state: restaurantinfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh]">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-4 mx-10">
        {restaurant &&
          restaurant.map((EachRestaurant, idx) => (
            <div
              className="h-100 border border-gray-100 rounded-xl p-2 group cursor-pointer hover:scale-103 hover:shadow-xl hover:border-(--color-secondary) duration-100"
              key={idx}
              onClick={() => handleRestaurantClick(EachRestaurant)}
            >
              <img
                src={EachRestaurant.photo.url}
                alt=""
                className="w-full h-[50%] object-cover rounded-t-xl"
              />
              <div className="text-2xl font-semibold text-(--color-secondary)">
                {EachRestaurant.restaurantName}
              </div>
              <div>{EachRestaurant.cuisine}</div>
              <div>{EachRestaurant.address}</div>
              <div>{EachRestaurant.city}</div>
              <div>{EachRestaurant.pin}</div>
              <div>{EachRestaurant.mobileNumber}</div>
              <div className="flex float-end items-center text-(--color-secondary) gap-2 group-hover:border-b-2 w-fit">
                Explore Menu <FaArrowRight />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OrderNow;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../config/Api";
// import toast from "react-hot-toast";

// const OrderNow = () => {
//   const navigate = useNavigate();
//   const [restaurants, setRestaurants] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchAllRestaurant = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/public/allRestaurants");
//       setRestaurants(res.data.data);
//       // console.log(res.data.data.photo);
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllRestaurant();
//   }, []);

//   const handleResturantClick = (restaurantID) => {
//     console.log("restaurant Clicked");
//     console.log("OrderNow Page", restaurantID);

//     navigate(`/restaurant/${restaurantID}`);
//   };
//   console.log(restaurants);

//   return (
//     <>
//       <div className="bg-gray-100 p-3 h-screen">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-3xl font-bold text-gray-800">Order Now</h1>
//           <p className="text-gray-600 mt-2">
//             Browse our menu and place your order now!
//           </p>
//         </div>

//         {restaurants ? (
//           <div className="grid grid-cols-4 gap-3 mt-5 py-5">
//             {restaurants.map((restaurant, idx) => (
//               <div
//                 key={idx}
//                 className="rounded h-100 hover:shadow-lg p-2  shadow-xl shadow-amber-200"
//                 onClick={() => {
//                   handleResturantClick(restaurant._id);
//                 }}
//               >
//                 <div className="bg-amber-300 rounded-xl p-2 my-2">
//                   {restaurant.restaurantName}
//                 </div>
//                 <div className="flex gap-2">
//                   {restaurant.cuisine
//                     .split(", ")
//                     .slice(0, 2)
//                     .map((cusine, idx) => (
//                       <span
//                         key={idx}
//                         className="py-1 px-2 bg-amber-200 rounded-2xl capitalize"
//                       >
//                         {cusine.toLowerCase()}
//                       </span>
//                     ))}
//                 </div>
//                 <div className="">
//                   <img
//                     className="p-3 fit-cover mx-auto h-75 w-full max-w-75 rounded-2xl"
//                     src={restaurant?.photo?.url}
//                     alt="Restaurant Photo"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderNow;


// import React from "react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import api from "../config/Api";
// import Loading from "../components/Loading";
// import { useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const OrderNow = () => {
//   const [loading, setLoading] = useState(false);
//   const [restaurant, setRestaurant] = useState();

//   const fetctAllRestaurants = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/public/allRestaurants");
//       setRestaurant(res.data.data);
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetctAllRestaurants();
//   }, []);

//   const handleRestaurantClick = () => {
//     console.log("Restaurant Clicked");
//   };

//   if (loading) {
//     return (
//       <div className="h-[80vh]">
//         <Loading />
//       </div>
//     );
//   }
//   return (
//     <>
//       <div className="grid grid-cols-4 gap-4 mt-4 mx-10">
//         {restaurant &&
//           restaurant.map((EachRestaurant, idx) => (
//             <div
//               className="h-100 border border-gray-100 rounded-xl p-2 group cursor-pointer hover:scale-103 hover:shadow-xl hover:border-(--color-secondary) duration-100"
//               key={idx}
//               onClick={handleRestaurantClick}
//             >
//               <img
//                 src={EachRestaurant.photo.url}
//                 alt=""
//                 className="w-full h-[50%] object-cover rounded-t-xl"
//               />
//               <div className="text-2xl font-semibold text-(--color-secondary)">
//                 {EachRestaurant.restaurantName}
//               </div>
//               <div>{EachRestaurant.cuisine}</div>
//               <div>{EachRestaurant.address}</div>
//               <div>{EachRestaurant.city}</div>
//               <div>{EachRestaurant.pin}</div>
//               <div>{EachRestaurant.mobileNumber}</div>
//               <div className="flex float-end items-center text-(--color-secondary) gap-2 group-hover:border-b-2 w-fit">
//                 Explore Menu <FaArrowRight />
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default OrderNow;