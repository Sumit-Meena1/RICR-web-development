import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Head/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      </Routes>
     <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
