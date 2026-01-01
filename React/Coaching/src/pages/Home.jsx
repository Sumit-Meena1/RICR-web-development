import React, { useState } from "react";
import toast from "react-hot-toast";
const Home = () => {
  const [personal, setPersonal] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qlf: "",
    grd: "",
    crs: "",
    btch: [],
    adrs: "",
    city: "",
    pin: "",
    grdName: "",
    grdphone: "",
    hear: "",
    spcl: "",
  });

  //   const handleChange = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     if (type === "checkbox") {
  //       let temp = personal.btch;
  //       if (checked) {
  //         temp.push(value);
  //         setPersonal((previousData) => ({ ...previousData, [name]: temp }));
  //       } else {
  //         temp = Object.values(temp); //Convert to Array
  //         temp = temp.filter((word) => word !== value); //Remove the Undersired Value
  //         setPersonal((previousData) => ({ ...previousData, [name]: temp }));
  //       }
  //     } else {
  //       setPersonal((previousData) => ({ ...previousData, [name]: value }));
  //     }
  //   };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setPersonal((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setPersonal((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClearForm = () => {
    setPersonal({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      qlf: "",
      grd: "",
      crs: "",
      btch: [],
      adrs: "",
      city: "",
      pin: "",
      grdName: "",
      grdphone: "",
      hear: "",
      spcl: "",
    });
  };

  const validate = () => {
    let errors = {};

    if (!/^[A-Za-z ]{3,}$/.test(personal.fullName)) {
      errors.fullName = "Enter valid full name (min 3 letters)";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personal.email)) {
      errors.email = "Enter valid email address";
    }

    if (!/^[6-9]\d{9}$/.test(personal.phone)) {
      errors.phone = "Enter valid 10-digit mobile number";
    }

    if (!personal.dob) {
      errors.dob = "Date of birth is required";
    }

    if (!personal.qlf) {
      errors.qlf = "Qualification is required";
    }

    if (!/^(100|[1-9]?\d)$/.test(personal.grd)) {
      errors.grd = "Grade must be between 0 and 100";
    }

    if (!personal.crs) {
      errors.crs = "Course selection is required";
    }

    if (personal.btch.length === 0) {
      errors.btch = "Select at least one batch";
    }

    if (personal.adrs.length < 5) {
      errors.adrs = "Address must be at least 5 characters";
    }

    if (!/^[A-Za-z ]{3,}$/.test(personal.city)) {
      errors.city = "City name should contain only letters";
    }

    if (!/^\d{6}$/.test(personal.pin)) {
      errors.pin = "Enter valid 6-digit pin code";
    }

    if (!/^[A-Za-z ]{3,}$/.test(personal.grdName)) {
      errors.grdName = "Enter valid guardian name";
    }

    if (!/^[6-9]\d{9}$/.test(personal.grdphone)) {
      errors.grdphone = "Enter valid guardian mobile number";
    }

    if (!personal.hear) {
      errors.hear = "This field is required";
    }

    if (personal.spcl.length < 3) {
      errors.spcl = "Minimum 3 characters required";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly!");
      return;
    }

    try {
      console.log(personal);
      toast.success("Registration Successful 🎉");
      handleClearForm();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        onReset={handleClearForm}
        className="bg-yellow-200 max-w-4xl mx-auto px-5"
      >
        <div className="flex justify-center text-3xl text-green-500 mb-5">
          Student Registartion Form
        </div>
        <div className="border-2 rounded-2xl border-amber-400 p-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Personal Information
            </span>
            <div className=" flex justify-center">
              <div className="">
                <div className="inline-block">
                  <label htmlFor="fullName"></label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={personal.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="text-primary mx-5 border-2 rounded-2xl border-amber-500  py-3 px-3 my-2 focus:outline-none focus:border-orange-700"
                    required
                  />
                </div>

                <div className="inline-block">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={personal.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:outline-none focus:border-orange-700"
                    required
                  />
                </div>
              </div>

              <div className="inline">
                <div className="inline-block">
                  <label htmlFor="phone"></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={personal.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    className="text-primary mx-5 border-2 rounded-2xl px-3 border-amber-500   py-3 my-2 focus:border-orange-700"
                    required
                  />
                </div>

                <div className="inline-block">
                  <label htmlFor="dob"></label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={personal.dob}
                    onChange={handleChange}
                    className="text-primary mx-5 border-2 rounded-2xl border-amber-500 px-3 py-3 my-2 focus:border-orange-700"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-amber-400 my-5 py-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Academic Details
            </span>
            <div className=" flex justify-center">
              <div className="inline-block">
                <label htmlFor="qlf"></label>
                <select
                  name="qlf"
                  id="qlf"
                  onChange={handleChange}
                  value={personal.qlf}
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:border-orange-700"
                  required
                >
                  <option value="">---Select Qualification---</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                  <option value="Passed Out">Passed Out</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="inline-block">
                <label htmlFor="grd"></label>
                <input
                  type="number"
                  name="grd"
                  id="grd"
                  value={personal.grd}
                  onChange={handleChange}
                  placeholder="Enter your Grade"
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:border-orange-700"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-amber-400 my-5 py-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Course Information
            </span>
            <div className=" flex justify-center">
              <div className="inline-block">
                <label htmlFor="crs"></label>

                <select
                  name="crs"
                  id="crs"
                  onChange={handleChange}
                  value={personal.crs}
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2focus:border-orange-700"
                  required
                >
                  <option value="">---Select Qualification---</option>
                  <option value="Data Science">Data Science</option>
                  <option value="DSA">DSA</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="inline-block">
                <label htmlFor="btch" className="mx-5"></label>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="btch"
                    id="morning"
                    value="morning"
                    class="form-check-input"
                    onChange={handleChange}
                    checked={Object.values(personal.btch).includes("morning")}
                  />
                  <span className="mx-3 text-0xl">Morning</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="btch"
                    id="evening"
                    value="evening"
                    class="form-check-input"
                    onChange={handleChange}
                    checked={Object.values(personal.btch).includes("evening")}
                  />
                  <span className="mx-3 text-0xl">Evening</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="btch"
                    id="afternoon"
                    value="afternoon"
                    class="form-check-input"
                    onChange={handleChange}
                    checked={Object.values(personal.btch).includes("afternoon")}
                  />
                  <span className="mx-3 text-0xl">Afternoon</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="btch"
                    id="night"
                    value="night"
                    class="form-check-input"
                    onChange={handleChange}
                    checked={Object.values(personal.btch).includes("night")}
                  />
                  <span className="mx-3 text-0xl">Night</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-amber-400 my-5 py-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Address
            </span>
            <div className=" flex justify-center">
              <div className="inline-block">
                <label htmlFor="adrs"></label>
                <input
                  type="text"
                  name="adrs"
                  id="adrs"
                  value={personal.adrs}
                  onChange={handleChange}
                  placeholder="Enter your Address"
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500  py-3 px-3 my-2 focus:border-orange-700"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="city"></label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={personal.city}
                  onChange={handleChange}
                  placeholder="Enter your City"
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500  py-3 px-3 my-2 focus:border-orange-700"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="pin"></label>
                <input
                  type="number"
                  name="pin"
                  id="pin"
                  value={personal.pin}
                  onChange={handleChange}
                  placeholder="Enter your Pin Code"
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:border-orange-700"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-amber-400 my-5 py-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Guardian Details
            </span>
            <div className=" flex justify-center">
              <div className="inline-block">
                <label htmlFor="grdName"></label>
                <input
                  type="text"
                  name="grdName"
                  id="grdName"
                  value={personal.grdName}
                  onChange={handleChange}
                  placeholder="Enter Guardian Full Name"
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500  py-3 px-3 my-2 focus:border-orange-700"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="grdphone"></label>
                <input
                  type="number"
                  name="grdphone"
                  id="grdphone"
                  value={personal.grdphone}
                  onChange={handleChange}
                  placeholder="Enter Guardian phone"
                  className="text-primary mx-5 border-2 rounded-2xl px-3 border-amber-500   py-3 my-2 focus:border-orange-700"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-amber-400 my-5 py-5 bg-amber-100">
          <div>
            <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
              Additional Information
            </span>
            <div className=" flex justify-center">
              <div className="inline-block">
                <label htmlFor="hear"></label>

                <select
                  name="hear"
                  id="hear"
                  onChange={handleChange}
                  value={personal.hear}
                  className="text-primary mx-5 border-2 rounded-2xl border-amber-500   px-3 py-3 my-2 focus:border-orange-700"
                  required
                >
                  <option value="" className="opacity-75">
                    ---How Did You Hear About Us--
                  </option>
                  <option value="Friends">Friends</option>
                  <option value="Social Media">Social Media</option>
                  <option value="News Paper">News Paper</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="inline-block">
                <label htmlFor="spcl"></label>
                <input
                  type="text"
                  name="spcl"
                  id="spcl"
                  value={personal.spcl}
                  onChange={handleChange}
                  placeholder="Enter Any Special Requirment"
                  className="text-primary mx-5 border-2 rounded-2xl px-3 border-amber-500   py-3 my-2"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-center border-amber-400 rounded-2xl my-5 py-5">
          <button
            type="submit"
            className="w-30 h-10  border-2 border-black rounded-2xl bg-green-500 text-2xl"
          >
            Submit
          </button>
          <button
            type="reset"
            className="w-30 h-10  border-2 border-black rounded-2xl bg-red-600 text-2xl"
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
};
export default Home;
