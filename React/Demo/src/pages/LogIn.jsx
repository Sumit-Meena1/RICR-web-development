import React, { useState } from "react";
const LogIn = () => {

    const [logIn , setLogIn] = useState(
        {
            name:"",
            email:"",
            password:"",
        }

    )

    const handleChange  =(e)=>
       {}


  return (
    <>
      <div className="text-center border border-black">
        <form action="">
          <div>
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={LogIn.name}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default LogIn;
