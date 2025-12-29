import React, { useState } from "react";
const LogIn = () => {
  const [logIn, setLogIn] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const{name , value} = e.target;
    setLogIn((prev)=> ({...prev, [name]:value}));
  };

  return (
    <>
      <div className="text-center border border-black my-5 py-5 bg-amber-200">
        <form action="">
          <div className="my-3">
            <label htmlFor="name">Enter Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={logIn.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
              className="mx-5 "
            />
          </div>
          <div className="my-3">
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={logIn.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="mx-5 "
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Enter Your Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={logIn.password}
              placeholder="Enter Your password"
              onChange={handleChange}
              className="mx-5 "
            />
          </div>

          <div className="flex justify-center gap-5 ">
            <button type="submit" className=" border border-blue-950 bg-blue-600 text-1xl text-white p-2 rounded-2xl">Submit</button>
            <button type="reset" className="border bg-red-700 text-1xl text-white p-2 rounded-2xl">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LogIn;
