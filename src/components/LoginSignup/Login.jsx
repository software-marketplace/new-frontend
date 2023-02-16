import React from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Login({setLoginClose,setIsModalOpen}) {
  return (
    <div className='Container'>
        <div className='contentContainer'> 
      <span className='headerSection'>Login/</span><span onClick={() => setLoginClose(false)} className='shiftSection'>SignUp</span>
      <CloseIcon className='closeIcon' onClick={() =>setIsModalOpen(false)} />
      <div className='inputSection'>
          <input placeholder='Username' className='input'></input>
          <input placeholder='Password' className='input'></input>
      </div>
      <div className='bottomSection'>
        <button>LOGIN</button><br/>
      </div>
      </div>
    </div>
  )
}
