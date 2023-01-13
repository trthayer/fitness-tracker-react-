import React from "react";
import { useNavigate } from "react-router";

export const Logout = () => {
    let navigate = useNavigate();
    navigate('/');
    localStorage.removeItem(token);
    // setIsLoggedIn(false);
    };