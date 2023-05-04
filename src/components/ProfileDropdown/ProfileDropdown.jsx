import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileDropdown.css";

function ProfileDropdown({ setIsLogin }) {

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("name");
        localStorage.removeItem("username");
        localStorage.removeItem("avatar_url");
        localStorage.removeItem("email");
        setIsLogin(false);
    }

    return (
        <div className="user-container">
            <h1 className="username">{localStorage.getItem("name")}</h1>
            <Avatar src={localStorage.getItem("avatar_url")} />
            <button className="button1 logout" onClick={logout}>Log Out</button>
        </div>
    );
}

export default ProfileDropdown;
