import React, { useState } from "react";
import SideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransection from "../../components/userDashboard/UserTransection";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { GiHamburgerMenu } from "react-icons/gi";

const UserDashBoards = () => {
  const [active, setActive] = useState("overview");
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        {collapse && (
          <div
            className={`bg-(--color-background) w-1/7 
          `}
          >
            <SideBar
              active={active}
              setActive={setActive}
              collapse={collapse}
              setCollapse={setCollapse}
            />
          </div>
        )}
        <div
          className={`border border-amber-700 ${
            collapse ? "w-6/7 p-4  duration-300" : "w-full  "
          } `}
        >
          {!collapse && (
            <button onClick={() => setCollapse(true)} className="p-3 text-xl items-center">
              <GiHamburgerMenu />
            </button>
          )}
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
