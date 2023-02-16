import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './homepage.css'
import cat from '../../assets/cat.webp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Homepage() {
 

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='homepageSection'>
      <div className='left'>
        <span>Welcome To Our</span><br/>
        <span className='boldSection'>Hello Shop World</span><br/>
        <p>Hello shop is the buying and selling of goods and service or the transmitting <br/>
          of funds or data, over an electronic network, primarily the internet.</p>
          <button>SHOP NOW</button>
          <button>Contact Us</button>
        </div>
      <div className='right'><img src={cat} alt="/"></img></div>
    </div>
    <div className='bottomSection'>
      {/* <div className='hoverRegion'>       */}
        <div>Scroll Down</div>
      <div><KeyboardArrowDownIcon  className='icon' /></div>
      {/* </div> */}
    </div>
    </>
  )
}
