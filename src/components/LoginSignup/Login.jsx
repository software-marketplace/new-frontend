import React, {useState} from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Login({setLoginClose,setIsModalOpen, setUser}) {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("In handleLogin");
    setUser({username});
  }
  return (
<<<<<<< HEAD
    <form onSubmit={(event)=> event.preventDefault()}>
    <div className='Container'>
        <div className='contentContainer'> 
      <span className='headerSection'>Login/</span><span onClick={() => setLoginClose(false)} className='shiftSection'>SignUp</span>
      <CloseIcon className='closeIcon' onClick={() =>setIsModalOpen(false)} />
      <div className='inputSection'>
          <input placeholder='Username' className='input' onChange={(event) => setUsername(event.target.value)}></input>
          <input placeholder='Password' type="password" className='input' onChange={(event) => setPassword(event.target.value)}></input>
      </div>
      <div className='bottomSection'>
        <button type='submit' onSubmit={handleLogin}>LOGIN</button><br/>
=======
    <div className="wrapper login">
    <div className="container2">
      <div className="col-left">
        <div className="login-text">
          <h2>Welcome!</h2>
          <p>Create your account.<br />For Free!</p> <a href className="btn" onClick={() => setLoginClose(false)}>Sign Up</a>
          
        </div>
>>>>>>> 10d4814fcd03a43ebdb9c726757b5b5656b9355f
      </div>
      <CloseIcon className='closeIcon'  onClick={() =>setIsModalOpen(false)}  />
      <div className="col-right">
        <div className="login-form">
          <h2>Login</h2> 
          <form action>
            <p> <label>Username/Email address<span>*</span></label> <input type="text" placeholder="Username or Email" required /> </p>
            <p> <label>Password<span>*</span></label> <input type="password" placeholder="Password" required /> </p>
            <p> <input type="submit" defaultValue="Sign In" /> </p>
            <p> <a href>Forgot password?</a> </p>
          </form>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    </form>
=======
  </div>
>>>>>>> 10d4814fcd03a43ebdb9c726757b5b5656b9355f
  )
}
