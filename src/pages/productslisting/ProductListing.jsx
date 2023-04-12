//This section is used as a homepage in this section posts has been imported and then it is imported from post section to render all the 
//product card
import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar'
import styles from "./ProductListing.module.css";
import cat from '../../assets/cat.webp'
import Posts from '../../components/posts/posts'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import FaqSection from '../Faqsection/FaqSection';
import Footer from '../../components/footer/Footer';

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
 
  <h2  className={styles.productLister}>OUR BEST SELLERS</h2>

  <div >
    <Posts />
  </div>
  </div>
  {/* <Footer /> */}
     


     {/* .........This faq section was because i was working on faq section kindly ignore it.......... */}
  {/* <FaqSection /> */}
  </>
  )
}
