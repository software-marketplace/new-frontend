import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'
import LoginSignup from '../../pages/login-signupmodal/loginSignup';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
         <div className="leftName">
            DEVHUSTLE
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div> 
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        
          <ul>
            <li>
             Apps
            </li>
            <li>
              FAQ
            </li>
            <li>
              About
            </li>
            <li>
             Contact
            </li>
            <li>
             <button className='button' onClick={() => setIsModalOpen(true)}>Login</button>
             {isModalOpen && <LoginSignup setIsModalOpen={setIsModalOpen}/>}
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar