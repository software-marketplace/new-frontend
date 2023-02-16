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
      </div>
      </div>
    </div>
    </form>
  )
}
