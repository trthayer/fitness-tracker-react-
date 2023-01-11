import { fetchMe } from "./api/auth";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routines } from "./Components/Routines";
import { Activities } from "./Components/Activities";
import { getMyRoutines } from "./Components/MyRoutines";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'



function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});


useEffect(() => {
  const getMe = async () => {
    const data = await fetchMe(token);
    setUser(data);
    console.log("This is the user", user);
  };
  if (token) {
    getMe();
  }
}, [token]);


  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/myroutines" element={<getMyRoutines />} />
          <Route path="/activities" element={<Activities />} />
       </Routes>
    </div>
  )
}

export default App
