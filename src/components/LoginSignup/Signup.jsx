import React from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Signup({setLoginClose,setIsModalOpen}) {
  return (
    <div className='Container1'>
        <div className='contentContainer'> 
      <span className='headerSection'>SignUp/</span><span onClick={() => setLoginClose(true)} className='shiftSection'>Login</span>
      <CloseIcon className='closeIcon'  onClick={() =>setIsModalOpen(false)}  />
      <div className='inputSection'>
          <input placeholder='Name' className='input'></input>
          <input placeholder='Email' className='input'></input>
          <input placeholder='Password' className='input'></input>
          <input placeholder='Phone Number' className='input'></input>
         
      </div>
      <div className='bottomSection'>
        <button>Signup</button><br/>
     
      </div>
      </div>
    </div>
  )
}
