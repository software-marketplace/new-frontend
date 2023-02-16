import React, { useState } from 'react'
import Login from '../../components/LoginSignup/Login'
import Signup from '../../components/LoginSignup/Signup'
import './loginSignup.css'

export default function LoginSignup({setIsModalOpen}) {
    const [loginOpen,setLoginClose] = useState(true)

  return (
    <div className='blurbackground'>
       {loginOpen ? (<Login  setLoginClose={setLoginClose} setIsModalOpen={setIsModalOpen}/>):(<Signup setLoginClose={setLoginClose} setIsModalOpen={setIsModalOpen}/>)}
    </div>
  )
}

