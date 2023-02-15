import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import styles from "./ProductListing.module.css";
import cat from '../../assets/cat.webp'
import Posts from '../../components/posts/posts'

export default function ProductListing() {
  return (
  <>
   <div className={styles.pageSection}>
  <Navbar2 className={styles.nav}/>
 
  <div className={styles.Container}>
   <div className={styles.left}>
    <span className={styles.span1}>LOREM IPSUM</span><br />
   <span className={styles.span2}>Make our ideas come <br/>to life!</span>
   <span className={styles.span3}>Lorem ipsum dolor sit amet consectetur<br />
     adipisicing elit. Reprehenderit nemo dolore<br/>
    quibusdam quas aspernatur, quis nulla, error eligendi amet exercitationem facere nobis,<br/>
     aut aliquid ipsam omnis cum minus? Repellendus laboriosam corrupti velit?</span>
   </div>
   <div className={styles.right}><img src={cat} /></div>
  </div>
  <div className={styles.productLister}>
  EXPLORE
  </div>
  <div>
    <Posts />
  </div>
  </div>
  
  </>
  )
}
