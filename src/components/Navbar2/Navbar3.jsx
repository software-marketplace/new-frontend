import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import '../../components/Navbar/navbar.css'
import LoginSignup from '../../pages/login-signupmodal/loginSignup';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    <nav className="navbar">
      <div className="container1 positionabsolute">
     
         {/* <div className="leftName1">
            DevHustle
        </div> */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div> 
      
         <div className={`nav-elements positionfixer ${showNavbar && 'active'}`}>  
          <ul>
            <li>
             Products
            </li>
            <li>
              FAQ
            </li >
            <li className='Login' onClick={() => setIsModalOpen(true)}>
              Login
            </li>
            {/* <li>
             <Link to="/developer"><button className='button1'>For Developers</button></Link>
            </li> */}
          </ul>
        </div>
        </div>
      {isModalOpen && <LoginSignup setIsModalOpen={setIsModalOpen} className="pos"/>}
      </nav>
      
      </>
    
  )
}

export default Navbar