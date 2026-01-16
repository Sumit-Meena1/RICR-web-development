import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastBar, Toaster } from "react-hot-toast";
import UserDashBoards from "./pages/dassboards/UserDashBoards";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user-dashboard" element={<UserDashBoards/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
