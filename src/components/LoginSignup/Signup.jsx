import React from 'react'
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
<<<<<<< HEAD
    <form onSubmit={(event) => event.preventDefault()}>
    <div className='Container1'>
        <div className='contentContainer'> 
      <span className='headerSection'>SignUp/</span><span onClick={() => setLoginClose(true)} className='shiftSection'>Login</span>
      <CloseIcon className='closeIcon'  onClick={() =>setIsModalOpen(false)}  />
      <div className='inputSection'>
          <input placeholder='Name' className='input'></input>
          <input placeholder='Username' className='input' onChange={(event) => setUsername(event.target.value)}></input>
          <input placeholder='Password' type="password" className='input' onChange={(event) => setPassword(event.target.value)}></input>
          <input placeholder='Phone Number' className='input'></input>
      </div>
      <div className='bottomSection'>
        <button type='submit' onClick={handleSignup}>Signup</button><br/>
     
      </div>
      </div>
    </div>
    </form>
=======
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
>>>>>>> 10d4814fcd03a43ebdb9c726757b5b5656b9355f
  )
}
