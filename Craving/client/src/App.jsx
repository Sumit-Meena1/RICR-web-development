import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastBar, Toaster } from "react-hot-toast";
import UserDashBoards from "./pages/dassboards/UserDashBoard";
import RiderDashBoard from "./pages/dassboards/RiderDashBoard";
import AdminDashBoard from "./pages/dassboards/AdminDashBoard";
import RestaurantDashBoard from "./pages/dassboards/RestaurantDashBoard";
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
          <Route path="/rider-dashboard" element={<RiderDashBoard/>}/>
          <Route path="/admin-dashboard" element={<AdminDashBoard/>}/>
          <Route path="/restaurant-dashboard" element={<RestaurantDashBoard/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
