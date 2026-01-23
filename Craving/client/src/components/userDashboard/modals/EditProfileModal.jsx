import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import api from "../../../config/Api";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    mobileNumber: user.mobileNumber,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    toast.success("Changes Done");
    user.fullName = formData.fullName;
    user.mobileNumber = formData.mobileNumber;
    setUser.fullName = formData.fullName;
    setUser.mobileNumber = formData.mobileNumber;
    try {
      const res = await api.put("/user/update", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("cravingUser", JSON.stringify(res.data.data));
    } catch (error) {}
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <form action="">
          <div className="bg-blue-400 w-5xl max-h-[85vh] overflow-y-auto rounded-xl py-5 shadow-2xl shadow-amber-500">
            <div>
              <div className="flex justify-between mx-20">
                <p className=" py-3 ps-93 font-bold"> ✏️ Edit Details</p>
                <button className="" onClick={() => onClose()}>
                  ❌
                </button>
              </div>
              <div className="mb-10 flex justify-center">
                <div className="space-y-4 flex gap-10">
                  <input
                    type="text"
                    name="fullName"
                    placeholder=""
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-max h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed "
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder=""
                    onChange={handleChange}
                    disabled
                    className="w-max h-fit px-4 py-3 border-2 cursor-not-allowed border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />

                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    placeholder=""
                    onChange={handleChange}
                    className="w-max h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button
                className="flex justify-center bg-gray-400 border-b border-white text-center text-xl rounded-xl py-1 px-3 hover:bg-green-600 text-white"
                onClick={() => onClose()}
              >
                Cancel
              </button>
              <button
                className="flex justify-center bg-blue-800 border-b text-center text-xl rounded-xl py-1 px-3 hover:bg-green-600 text-white"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfileModal;
