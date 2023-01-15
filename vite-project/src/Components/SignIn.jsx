import React, { useState } from "react";
import { previousUser } from "../api/auth";

const SignIn = ({ setToken, setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
        return (
            <div>
            <form className="login-form"
                onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        console.log(password, username);
                        localStorage.setItem("username", username);
                        const token = await previousUser(username, password);
                        setToken(token);
                        localStorage.setItem("token",token);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                <label htmlFor="username">Previous User:</label>
                <input className="login-input"
                    value={username}
                    type="text"
                    placeholder="Previous User"
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label htmlFor="password">Password:</label>
                <input className="login-input"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                <button type="submit">Sign In</button>
            </form>
            </div>
        )
};

export default SignIn;