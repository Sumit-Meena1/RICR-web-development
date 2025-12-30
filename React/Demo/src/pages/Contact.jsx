import React, { useState } from "react";
const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");







  const [isLoading, setIsLoading] = useState("");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
     console.log(prev);
  };


  //   const handleClearForm = () => {
  //   contact.name: "",
  //   contact.email: "",
  //   contact.message: "",
  // };
 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const res = await fetch("https://official-joke-api.appspot");

  //   } catch (error) {
  //     console.log(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  //   handleClearForm();
  // };

  return (
    <div className="container justify-center align-middle text-center border bg-warning my-5 border-black rounded-4 w-50 py-5">
      <form onReset={handleClearForm}>
        <div>
          <label htmlFor="name" className="mx-3 my-2">
            Enter Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={contact.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="text-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mx-3 my-2">
            Enter Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your  Email"
            value={contact.email}
            className="text-primary"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="mx-3 my-2">
            Message
          </label>
          <textarea
            name="message"
            className="text-primary"
            id="message"
            value={contact.message}
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="justify-center my-5 text-center align-middle">
          <button type="submit" className="btn btn-primary mx-5">
            {isLoading ? "Loading" : "Submit"}
          </button>
          <button type="reset" className="btn btn-danger">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
