import React from 'react'
import styles from './imagesDisplay.module.css'
import Cat from '../../assets/cat.webp'
import data from '../../pages/productOpen.jsx/data/data.json'

export default function imagesDisplay({lightBoxHandler} ) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.imageHolder}>
        <img src={Cat} alt="/"></img>
      </div>
      <div className={styles.imageHolder}>
        <img src={Cat} alt="/"></img>
      </div>
      {/* {data.map((item, index) => ( */}
        <h3 
        //  onClick={() => {
		// 			lightBoxHandler(true, index);
		// 			}}
                    >
                        Show More
                        </h3>
    {/* //   ))} */}
      
    </div>
  )
}
