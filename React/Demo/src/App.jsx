import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";
function App() {
  let a = 5;
  let b = 4;
  console.log(a + b);

  return (
    <>
     <BrowserRouter>
     <Header/>


     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>


     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
