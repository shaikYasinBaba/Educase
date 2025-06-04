import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/index"
import Login from "./components/login/index"; // we'll build next
import Register from "./components/rigister/index"; // we'll build next 
import Home from "./components/home/index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
