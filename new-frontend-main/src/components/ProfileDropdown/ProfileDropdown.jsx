import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileDropdown.css";

class ProfileDropdown extends React.Component {
    render() {
        return (
            <div className="user-container">
                <h1 className="username">{localStorage.getItem("name")}</h1>
                <Avatar src={localStorage.getItem("avatar_url")} />
            </div>
        );
    }
}

export default ProfileDropdown;
