import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import EditProfileModal from './modals/EditProfileModal';

const UserProfile = () => {
  const {user} = useAuth();
  const [isEditProModalOpen , setIsEditProModalOpen] = useState(false);
  return (
    <>
      <div className='flex gap-10'>
        <div>
          <span>Name:</span> <span>{user.fullName}</span>
        </div>
        <div>
          <span>email:</span> <span>{user.email}</span>
        </div>
        <div>
          <span>Number:</span> <span>{user.mobileNumber}</span>
        </div>
        <button onClick={()=>setIsEditProModalOpen(true)} className='border px-5 py-2 bg-amber-400'>
          Edit Profile
        </button>
      </div>
      {isEditProModalOpen && <EditProfileModal onClose={()=>setIsEditProModalOpen(false)} /> }

      
   
    </>
  )
}

export default UserProfile