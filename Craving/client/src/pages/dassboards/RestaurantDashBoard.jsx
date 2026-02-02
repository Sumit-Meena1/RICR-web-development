import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RestaurantOverview from "../../components/restauratDashboard/RestaurantOverview";
import RestaurantProfile from "../../components/restauratDashboard/RestaurantProfile";
import RestaurantOrders from "../../components/restauratDashboard/RestaurantOrders";
import RestaurantTransections from "../../components/restauratDashboard/RestaurantTransections";
import RestaurantSideBar from "../../components/restauratDashboard/RestaurantSideBar";
import RestaurantHelpDesk from "../../components/restauratDashboard/RestaurantHelpDesk";
import RestaurantMenu from "../../components/restauratDashboard/RestaurantMenu";

const RestaurantDashBoard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "manager") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">⊗</div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${isCollapsed ? "w-2/60" : "w-12/60"}`}
        >
          <RestaurantSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <RestaurantOverview />}
          {active === "profile" && <RestaurantProfile />}
          {active === "menu" && <RestaurantMenu/>}
          {active === "orders" && <RestaurantOrders/>}
          {active === "transactions" && <RestaurantTransections/>}
          {active === "helpdesk" && <RestaurantHelpDesk/>}
        </div>
      </div>
    </>
  );
};

export default RestaurantDashBoard;
