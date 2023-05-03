
 // this is the route page after onclick of For developer page in Navbar2

import React,{useEffect,Component, useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import styles from './DeveloperDashboard.module.css'
import ListAltIcon from '@mui/icons-material/ListAlt';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import FlareIcon from '@mui/icons-material/Flare';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import user from '../../assets/user.png'
import BottomModal from '../../components/misleneous/Modal';
import Navbar3 from '../../components/Navbar2/Navbar3'
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  setQuickButtons
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import Navbar from '../../components/Navbar2/Navbar3';
import ChatWidget from '../../components/chat/ChatWidget';
export default function DeveloperDashbord() {
  const [openChat, setOpenChat] = useState(true);
  return (
    <>
    <div  >
    <div>
      <Navbar />
    </div>
      
          <div className={[styles.left]}>
            {/* <h2 className={styles.LeftSideContent}><span className={styles.a}><FlareIcon /></span>Devhustle</h2> */}
            <h4 className={styles.SideContent}>PROJECT</h4>
            <span className={styles.SideContent}><span > <AddIcon /></span> Upload Projects</span>
            <h4 className={styles.SideContent}>OFFERS</h4>
            <span className={styles.SideContent}><span > <DynamicFormIcon /></span>Create Coupon Code</span>
            <span className={styles.SideContent}> <span > <ListAltIcon /></span>View Existing Coupon</span>
            <span className={styles.SideContent}><button className={styles.ContactButton}>Chat with customer</button></span>
        
            {<ChatWidget devUsername={"priyanka@gmail.com"} username={"developer"} />}
          </div>
          <div className={styles.right}>
          </div>
          
      </div>
   
{/* </div> */}

    </>
  )
}
