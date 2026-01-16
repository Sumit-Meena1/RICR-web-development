import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
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
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      handleClearForm();
      navigate("/user-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Log-In</h1>
            <p className="text-lg text-gray-600">
              You are 1 step away to stop your Cavings
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="mb-10">
                <div className="space-y-4">
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
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 shadow-lg disabled:cursor-not-allowed"
                >
                  {isLoading ? "submitting" : "Log-In"}
                </button>
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 shadow-lg disabled:cursor-not-allowed"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            don't have an account?
            <Link
              to={"/register"}
              className="text-decoration-none text-blue-700 mx-3 hover:text-blue-900"
            >
              Sign-Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
