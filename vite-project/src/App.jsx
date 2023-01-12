import { fetchMe } from "./api/auth";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routines } from "./Components/Routines";
import { Activities } from "./Components/Activities";
import { GetMyRoutines } from "./Components/MyRoutines";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'



function App() {
  const [token, setToken] = useState(localStorage.getItem("token") );
  const [user, setUser] = useState({});


useEffect(() => {
  // console.log("This is the token", token)
  const getMe = async () => {
    const data = await fetchMe(token);
    setUser(data);
  };
  if (token) {
    getMe();
  }
}, [token]);

// console.log("This is the user", user);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setToken={setToken}/>} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/routines" element={<Routines setToken={setToken}/>} />
          <Route path="/myroutines" element={<GetMyRoutines />} />
          <Route path="/activities" element={<Activities setToken={setToken}/>} />
       </Routes>
    </div>
  )
}

export default App
