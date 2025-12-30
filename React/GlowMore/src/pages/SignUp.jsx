import React, { useState } from "react";
const SignUp = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setSignUp({
      name: "",
      email: "",
      password: "",
      cnfpassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUp);
  };

  return (
    <>
      <div className="text-center flex justify-center border border-black my-5 py-5 bg-amber-200">
        <form onSubmit={handleSubmit} onReset={handleClearForm} className="w-75 border rounded-2xl py-5">
          <div className="my-3">
            <label htmlFor="name">Enter Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={signUp.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
              className="mx-5  border border-blue-900 rounded-2xl p-3 "
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={signUp.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="mx-5 border border-blue-900 rounded-2xl p-3  "
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Enter Your Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={signUp.password}
              placeholder="Enter Your password"
              onChange={handleChange}
              className="mx-5 border border-blue-900 rounded-2xl p-3  "
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="cnfpassword">Confirm Your Password:</label>
            <input
              type="password"
              name="cnfpassword"
              id="cnfpassword"
              value={signUp.cnfpassword}
              placeholder="Confirm Your password"
              onChange={handleChange}
              className="mx-5 border border-blue-900 rounded-2xl p-3  "
            />
          </div>

          <div className="flex justify-center gap-5 ">
            <button
              type="submit"
              className=" border border-blue-950 bg-blue-600 text-1xl text-white p-2 rounded-2xl"
            >
              SignUp
            </button>
            <button
              type="reset"
              className="border bg-red-700 text-1xl text-white p-2 rounded-2xl"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
