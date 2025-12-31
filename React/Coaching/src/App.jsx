import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Header from './components/Header'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"


function App() {


  return (
    <>
      <BrowserRouter>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
