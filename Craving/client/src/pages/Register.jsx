// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import api from "../config/Api";
// const Register = () => {
//   const [personal, setPersonal] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     cnfpassword: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setPersonal((prev) => ({
//         ...prev,
//         [name]: checked
//           ? [...prev[name], value]
//           : prev[name].filter((v) => v !== value),
//       }));
//     } else {
//       setPersonal((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleClearForm = () => {
//     setPersonal({
//       fullName: "",
//       email: "",
//       password: "",
//       cnfpassword: "",
//     });
//   };

//   const validate = () => {
//     let errors = {};

//     if (!/^[A-Za-z ]{3,}$/.test(personal.fullName)) {
//       errors.fullName = "Enter valid full name (min 3 letters)";
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personal.email)) {
//       errors.email = "Enter valid email address";
//     }

//     setError(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!validate()) {
//       setIsLoading(false);
//       toast.error("Fill the form correctly!");
//       return;
//     }

//     try {
//       const res = await toast.success("Registration Successful 🎉");
//       handleClearForm();
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <form
//         action=""
//         onSubmit={handleSubmit}
//         onReset={handleClearForm}
//         className=" max-w-4xl mx-auto px-5"
//       >
//         <div className="flex justify-center text-3xl  text-green-500 mb-5">
//           Student Registartion Form
//         </div>
//         <div className="border-2 rounded-2xl border-amber-400 p-5 bg-(--color-primary)">
//           <div>
//             <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
//               Personal Information
//             </span>
//             <div className=" flex justify-center">
//               <div className="">
//                 <div className="inline">
//                   <label htmlFor="fullName"></label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     id="fullName"
//                     value={personal.fullName}
//                     onChange={handleChange}
//                     placeholder="Enter your Name"
//                     className="text-white mx-5 border-2 rounded-2xl border-amber-500  py-3 px-3 my-2 focus:outline-none focus:border-orange-700"
//                     required
//                   />
//                 </div>
//                 {error.fullName && (
//                   <span className="text-red-600 text-xs">{error.fullName}</span>
//                 )}

//                 <div className="inline">
//                   <label htmlFor="email"></label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={personal.email}
//                     onChange={handleChange}
//                     placeholder="Enter your Email"
//                     className="text-white mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:outline-none focus:border-orange-700"
//                     required
//                   />
//                 </div>
//                 {error.email && (
//                   <span className="text-red-600 text-xs">{error.email}</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-2 rounded-2xl border-amber-400 my-5 py-5  bg-(--color-primary)">
//           <div>
//             <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
//               Confirmation
//             </span>
//             <div className=" flex justify-center">
//               <div className="inline-block">
//                 <label htmlFor="password"></label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={personal.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="text-white mx-5 border-2 rounded-2xl px-3 border-amber-500   py-3 my-2 focus:border-orange-700"
//                   required
//                 />
//               </div>
//               {error.qlf && (
//                 <span className="text-red-600 text-xs">{error.qlf}</span>
//               )}

//               <div className="inline-block">
//                 <label htmlFor="cnfpassword"></label>
//                 <input
//                   type="password"
//                   name="cnfpassword"
//                   id="cnfpassword"
//                   value={personal.phone}
//                   onChange={handleChange}
//                   placeholder="Confirm your password"
//                   className="text-white mx-5 border-2 rounded-2xl px-3 border-amber-500   py-3 my-2 focus:border-orange-700"
//                   required
//                 />
//               </div>
//               {error.grd && (
//                 <span className="text-red-600 text-xs">{error.grd}</span>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-5 justify-center border-amber-400 rounded-2xl my-5 py-5">
//           <button
//             type="submit"
//             className="w-30 h-10  border-2 border-black rounded-2xl bg-green-500 text-2xl"
//           >
//             Register
//           </button>
//           <button
//             type="reset"
//             className="w-30 h-10  border-2 border-black rounded-2xl bg-red-600 text-2xl"
//           >
//             Clear
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };
// export default Register;

import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Registration
            </h1>
            <p className="text-lg text-gray-600">
              You are 1 step away to stop your Cavings
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed "
                  />
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Create Password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isLoading?"submitting":"submit"}
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
