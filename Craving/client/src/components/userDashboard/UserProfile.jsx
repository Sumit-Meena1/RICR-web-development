import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditProModalOpen, setIsEditProModalOpen] = useState(false);
  return (
    <>
      <div className="grid justify-center max-w my-7 bg-blue-500 py-5 rounded-2xl shadow-2xl shadow-amber-500">
        <div className="flex justify-between  mb-10 gap-60 ">
          <div className="">
            <span className="text-2xl border-b py-2 hover:text-white">
              {" "}
              👨‍💼 User Profile{" "}
            </span>
          </div>
          <div>
            <button
              onClick={() => setIsEditProModalOpen(true)}
              className="border-b-3 px-5 py-2 bg-amber-400 rounded-xl hover:bg-green-500 hover:text-white"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </div>
        <div className="grid gap-7 text-white">
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>Name:</span> <span>{user.fullName}</span>
          </div>
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>Email:</span> <span>{user.email}</span>
          </div>
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>Number:</span> <span>{user.mobileNumber}</span>
          </div>
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>Gender:</span> <span>{user.gender}</span>
          </div>
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>Address:</span> <span>{user.address}</span>
          </div>
          <div className="border-black border-b flex gap-7 px-4 py-4 text-xl">
            <span>City:</span> <span>{user.city}</span>
          </div>
        </div>
      </div>

      {isEditProModalOpen && (
        <EditProfileModal onClose={() => setIsEditProModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
