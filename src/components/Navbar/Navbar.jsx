// For now This navbar has been used in the whole website page
// login and signup modal is imported from LoginSignup page and then imported from components part from Login/Signup page

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import "../../components/Navbar/navbar.css";
import LoginSignup from "../../pages/login-signupmodal/loginSignup";
import { Link } from "react-router-dom";

// const Navbar = ({openChat, setOpenChat, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, openLogin, setOpenLogin}) => {
  const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [openChat, setOpenChat] = useState(false);
  // const [users, setUsers] = useState([{email:"priyanka.makhija05@gmail.com",password:"Abc@123!"}]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [openLogin, setOpenLogin] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleContactDeveloper = () => {
    console.log("cuser = ",currentUser);
   if(currentUser==null)
   {
       setOpenLogin(true);
   }
   else
   {
       setOpenChat(true);
   }

}
  const openChatWindow = () => {

  }
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
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>FAQ</li>
              <li onClick={() => setIsModalOpen(true)}>Login</li>
              <li>
                <Link to="/developer">
                  <button className="button1">For Developers</button>
                </Link>
              </li>
              { isLoggedIn && (
                <li>
                  <button className="" onClick={openChatWindow}>For Developers</button>
              </li>
              )}
            </ul>
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
