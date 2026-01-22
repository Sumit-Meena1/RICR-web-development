import React from "react";
import { useAuth } from "../../../context/AuthContext";





const EditProfileModal = ({ onClose }) => {
    const {user} = useAuth();
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto">
          <div>EditProfileModal
            <div></div>
          </div>
          <button onClick={() => onClose()}>X</button>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
