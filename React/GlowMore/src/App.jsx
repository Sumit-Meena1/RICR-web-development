import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Head />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>



        
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
