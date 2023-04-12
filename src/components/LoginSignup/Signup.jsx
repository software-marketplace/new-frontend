import React, {useState} from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Signup({setLoginClose,setIsModalOpen, setUser}) {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    console.log("In handleSignup");
    setUser({username});
  }
  return (
    <div className="wrapper login">
    <div className="container2">
      <div className="col-left">
        <div className="login-text">
          <h2>Welcome!</h2>
          <p>Already have an account.<br />Please Login</p> <a href className="btn" onClick={() => setLoginClose(true)}>Login</a>
          
        </div>
      </div>
      <CloseIcon className='closeIcon'  onClick={() =>setIsModalOpen(false)}  />
      <div className="col-right">
        <div className="login-form">
          <h2>SignUp</h2> 
          <form action>
          <p> <input type="text" placeholder="Name*" required /> </p>
          <p> <input type="text" placeholder="Email Address*" required /> </p>
          <p> <input type="password" placeholder="Password*" required /> </p>
          <p> <input type="tel" placeholder="Mobile Number*" required /> </p>
         
            <p> <input type="submit" defaultValue="Sign In" /> </p>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
