// This section is exported to DeveloperDashboard section

import React from 'react'
import styles from '../../pages/develperDashboard/DeveloperDashboard.module.css'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.circle}></div>
      <div>
      <h2>Lorem Ipsum</h2>
      <h6>Lorem Ipsum</h6>
      </div>
      <span><SettingsRoundedIcon /></span>
      
    </div>
  )
}
