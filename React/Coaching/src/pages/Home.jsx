import React from "react";
const Home = () => {






    
  return (
    <>
      <div className="flex justify-center text-3xl text-green-500 mb-5">
        Registartion Form
      </div>
      <div className="border rounded-2xl border-amber-400">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4 py-5">
            Personal Information
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div>
                <div className="inline-block">
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    //   value={contactData.fullName}
                    //   onChange={handleChange}
                    placeholder="Enter your Name"
                    className="text-primary mx-5 border rounded-2xl border-amber-500  py-3 px-3 my-2"
                    required
                  />
                </div>

                <div className="inline-block">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    //   value={contactData.email}
                    //   onChange={handleChange}
                    placeholder="Enter your Email"
                    className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
                    required
                  />
                </div>
              </div>

              <div className="inline-block">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  //   value={contactData.phone}
                  //   onChange={handleChange}
                  placeholder="Enter your phone"
                  className="text-primary mx-5 border rounded-2xl px-3 border-amber-500   py-3 my-2"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="dob">Date Of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  //   value={contactData.city}
                  //   onChange={handleChange}
                  className="text-primary mx-5 border rounded-2xl border-amber-500 px-3 py-3 my-2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl border-amber-400 my-5 py-5">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
            Academic Details
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div className="inline-block">
                <label htmlFor="qlf">Qualification :</label>
                <select
                  name="qlf"
                  id="qlf"
                  className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
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
                <label htmlFor="grd">Grade:</label>
                <input
                  type="number"
                  name="grd"
                  id="grd"
                  //   value={contactData.email}
                  //   onChange={handleChange}
                  placeholder="Enter your Grade"
                  className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl border-amber-400 my-5 py-5">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
            Course Information
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div className="inline-block">
                <label htmlFor="crs">course :</label>

                <select
                  name="crs"
                  id="crs"
                  className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
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
                <label htmlFor="btch" className="mx-5">
                  Batch:
                </label>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="batch"
                    id="morning"
                    value="morning"
                    class="form-check-input"
                    required
                  />
                  <span class="ms-2 me-4">Morning</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="batch"
                    id="evening"
                    value="evening"
                    class="form-check-input"
                    required
                  />
                  <span class="ms-2 me-4">Evening</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="batch"
                    id="afternoon"
                    value="afternoon"
                    class="form-check-input"
                    required
                  />
                  <span class="ms-2 me-4">Afternoon</span>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    name="batch"
                    id="night"
                    value="night"
                    class="form-check-input"
                    required
                  />
                  <span class="ms-2 me-4">Night</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl border-amber-400 my-5 py-5">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
            Address
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div className="inline-block">
                <label htmlFor="adrs">Address:</label>
                <input
                  type="text"
                  name="adrs"
                  id="adrs"
                  //   value={contactData.fullName}
                  //   onChange={handleChange}
                  placeholder="Enter your Address"
                  className="text-primary mx-5 border rounded-2xl border-amber-500  py-3 px-3 my-2"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  //   value={contactData.fullName}
                  //   onChange={handleChange}
                  placeholder="Enter your City"
                  className="text-primary mx-5 border rounded-2xl border-amber-500  py-3 px-3 my-2"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="pin">Pin Code:</label>
                <input
                  type="number"
                  name="pin"
                  id="pin"
                  //   value={contactData.email}
                  //   onChange={handleChange}
                  placeholder="Enter your Pin Code"
                  className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl border-amber-400 my-5 py-5">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
            Guardian Details
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div className="inline-block">
                <label htmlFor="grdName">Guardian Full Name:</label>
                <input
                  type="text"
                  name="grdName"
                  id="grdName"
                  //   value={contactData.fullName}
                  //   onChange={handleChange}
                  placeholder="Enter Guardian Full Name"
                  className="text-primary mx-5 border rounded-2xl border-amber-500  py-3 px-3 my-2"
                  required
                />
              </div>

              <div className="inline-block">
                <label htmlFor="grdphone">Guarduin Phone:</label>
                <input
                  type="number"
                  name="grdphone"
                  id="grdphone"
                  //   value={contactData.phone}
                  //   onChange={handleChange}
                  placeholder="Enter Guardian phone"
                  className="text-primary mx-5 border rounded-2xl px-3 border-amber-500   py-3 my-2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl border-amber-400 my-5 py-5">
        <div>
          <span className="text-amber-500 border-b-amber-300 text-2xl flex justify-center my-4">
            Additional Information
          </span>
          <div className=" flex justify-center">
            <form className="">
              <div className="inline-block">
                <label htmlFor="hear">How Did You Hear About Us:</label>

                <select
                  name="hear"
                  id="hear"
                  className="text-primary mx-5 border rounded-2xl border-amber-500   px-3 py-3 my-2"
                  required
                >
                  <option value="">
                    ---How Did You Hear About Us--
                  </option>
                  <option value="Friends">Friends</option>
                  <option value="Social Media">Social Media</option>
                  <option value="News Paper">News Paper</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="inline-block">
                <label htmlFor="spcl">Special Requirment:</label>
                <input
                  type="text"
                  name="spcl"
                  id="spcl"
                  //   value={contactData.phone}
                  //   onChange={handleChange}
                  placeholder="Enter Any Special Requirment"
                  className="text-primary mx-5 border rounded-2xl px-3 border-amber-500   py-3 my-2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="flex gap-5 justify-center border-amber-400 rounded-2xl my-5 py-5">
        <button type="submit" className="w-30 h-10  border-2 border-black rounded-2xl bg-green-500 text-2xl">Submit</button>
        <button type="resrt" className="w-30 h-10  border-2 border-black rounded-2xl bg-red-600 text-2xl">Clear</button>

      </div>
    </>
  );
};
export default Home;



