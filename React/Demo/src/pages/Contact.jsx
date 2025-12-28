import React, { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleClearForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("");
      setTimeout(() => {
        const data = {
          name,
          email,
          message,
        };
      }, 5000);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <div className="container justify-center align-middle text-center border bg-warning my-5 border-black rounded-4 w-50 py-5">
      <form onReset={handleClearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mx-3 my-2">
            Enter Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="text-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="mx-3 my-2">
            Enter Your Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your  Email"
            value={email}
            className="text-primary"
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
