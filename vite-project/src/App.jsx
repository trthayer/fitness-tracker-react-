import { useState } from 'react'
import { fetchMe } from "./api/auth";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import React, { useState, useEffect } from "react";
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
