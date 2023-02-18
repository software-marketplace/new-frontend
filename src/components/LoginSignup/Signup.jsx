import React from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Signup({setLoginClose,setIsModalOpen}) {
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
          <p> <label>Name<span>*</span></label> <input type="text" placeholder="Username" required /> </p>
          <p> <label>Email address<span>*</span></label> <input type="text" placeholder="Email Address" required /> </p>
          <p> <label>Password<span>*</span></label> <input type="password" placeholder="Password" required /> </p>
          <p> <label>Phone Number<span>*</span></label> <input type="Number" placeholder="91+........." required /> </p>
         
            <p> <input type="submit" defaultValue="Sign In" /> </p>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
