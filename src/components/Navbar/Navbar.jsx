// For now This navbar has been used in the whole website page
// login and signup modal is imported from LoginSignup page and then imported from components part from Login/Signup page

import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams } from "react-router-dom";

import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import "../../components/Navbar/navbar.css";
import LoginSignup from "../../pages/login-signupmodal/loginSignup";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <div className="leftName1">DevHustle</div>
                    </Link>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <MenuIcon />
                    </div>

                    <div className={`nav-elements  ${showNavbar && "active"}`}>
<<<<<<< Updated upstream
                        {localStorage.getItem("access_token") ? (
                            <ProfileDropdown />
                        ) : (
                            <ul>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>FAQ</li>
                                <li onClick={() => setIsModalOpen(true)}>Login</li>
                                <li>
                                    <a href="https://github.com/login/oauth/authorize?client_id=Iv1.aff67714bc9e4d05">
                                        <button className="button1">For Developers</button>
                                    </a>
                                </li>
                            </ul>
                        )}
=======
                        <ul>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>FAQ</li>
                            {localStorage.getItem("access_token") ? (
                                <ProfileDropdown />) : (
                                <>
                                    <li onClick={() => setIsModalOpen(true)}>Login</li>
                                    <li>
                                        <a href="https://github.com/login/oauth/authorize?client_id=Iv1.aff67714bc9e4d05">
                                            <button className="button1">For Developers</button>
                                        </a>
                                    </li>
                                </>)}
                        </ul>
>>>>>>> Stashed changes
                    </div>
                </div>
                {isModalOpen && (
                    <LoginSignup setIsModalOpen={setIsModalOpen} className="pos" />
                )}
            </nav>
        </>
    );
};

export default Navbar;
