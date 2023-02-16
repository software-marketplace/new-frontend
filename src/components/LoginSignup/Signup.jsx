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
  )
}
