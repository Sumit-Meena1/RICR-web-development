import React, { useState } from "react";
import AddMenuItemModal from "./modals/AddMenuItemModal";

const RestaurantMenu = () => {
  const [isAddMenuModalOpen, setIsAddMenuModalOpen] =useState(false);

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between shadow rounded-xl p-4">
          <p className="text-2xl font-bold">Menu Managment </p>
          <button
            onClick={() => setIsAddMenuModalOpen(true)}
            className="rounded p-3 bg-amber-600 text-white shadow hover:bg-amber-300"
          >
            ➕ Add Items
          </button>
        </div>
      </div>

      {isAddMenuModalOpen && (
        <AddMenuItemModal onClose={() => setIsAddMenuModalOpen(false)} />
      )}
    </>
  );
};

export default RestaurantMenu;
