import React, { useState } from "react";
import SideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransection from "../../components/userDashboard/UserTransection";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashBoards = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-(--color-background) w-1/7">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-amber-700 w-6/7">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transection" && <UserTransection />}
          {active === "help" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashBoards;
