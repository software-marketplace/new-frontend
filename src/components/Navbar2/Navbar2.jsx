import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import '../../components/Navbar/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
         <div className="leftName1">
            DevHustle
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div> 
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
             Products
            </li>
            <li>
              FAQ
            </li>
            <li>
              Login
            </li>
            <li>
             <button className='button1'>For Developers</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar