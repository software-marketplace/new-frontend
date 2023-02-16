import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import styles from './DeveloperDashboard.module.css'
import ListAltIcon from '@mui/icons-material/ListAlt';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import FlareIcon from '@mui/icons-material/Flare';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import user from '../../assets/user.png'
import BottomModal from '../../components/smallModal/Modal';

export default function DeveloperDashbord() {
  return (
    <>
<div className={styles.pageHolder}> 
    <div className={styles.row}>
        <div className={styles.left}>
            <h2 className={styles.Icon1}><span className={styles.a}><FlareIcon /></span>Devhustle</h2>
            <h4>PROJECTS</h4>
            <span className={styles.Icon}><span > <AddIcon /></span> Upload Projects</span>
            <h4>OFFERS</h4>
            <div className={styles.bottomSection}>
              <span className={styles.Icon}><span > <DynamicFormIcon /></span>Create Coupon Code</span>
              <span className={styles.Icon}> <span > <ListAltIcon /></span>View Existing Coupon</span>
            </div>
            </div>

        <div className={styles.right}>
            <span><img src={user} alt="/"/></span>
            </div>
    </div>
    <BottomModal />
</div>

    </>
  )
}
