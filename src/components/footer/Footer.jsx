import React from "react";
import "./Footer.css";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";

export default function Footer() {
  return (
    // <div class="pg-footer">
    //   <footer class="footer">
    //     <svg
    //       class="footer-wave-svg"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1200 100"
    //       preserveAspectRatio="none"
    //     >
    //       <path
    //         class="footer-wave-path"
    //         d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
    //       ></path>
    //     </svg>
    //     <div class="footer-content">
    //       <div class="footer-content-column">
    //         <div class="footer-logo">
    //           <a class="footer-logo-link" href="#">
    //             <span class="hidden-link-text">LOGO</span>
    //             <h1>LOGO</h1>
    //           </a>
    //         </div>
    //         <div class="footer-menu">
    //           <h2 class="footer-menu-name"> Get Started</h2>
    //           <ul id="menu-get-started" class="footer-menu-list">
    //             <li class="menu-item menu-item-type-post_type menu-item-object-product">
    //               <a href="#">Start</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-product">
    //               <a href="#">Documentation</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-product">
    //               <a href="#">Installation</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div class="footer-content-column">
    //         <div class="footer-menu">
    //           <h2 class="footer-menu-name"> Company</h2>
    //           <ul id="menu-company" class="footer-menu-list">
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Contact</a>
    //             </li>
    //             <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
    //               <a href="#">News</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Careers</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="footer-menu">
    //           <h2 class="footer-menu-name"> Legal</h2>
    //           <ul id="menu-legal" class="footer-menu-list">
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
    //               <a href="#">Privacy Notice</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Terms of Use</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div class="footer-content-column">
    //         <div class="footer-menu">
    //           <h2 class="footer-menu-name"> Quick Links</h2>
    //           <ul id="menu-quick-links" class="footer-menu-list">
    //             <li class="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">
    //                 Support Center
    //               </a>
    //             </li>
    //             <li class="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">
    //                 Service Status
    //               </a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Security</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Blog</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
    //               <a href="#">Customers</a>
    //             </li>
    //             <li class="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Reviews</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div class="footer-content-column">
    //         <div class="footer-call-to-action">
    //           <h2 class="footer-call-to-action-title"> Let's Chat</h2>
    //           <p class="footer-call-to-action-description">
    //             {" "}
    //             Have a support question?
    //           </p>
    //           <a
    //             class="footer-call-to-action-button button"
    //             href="#"
    //             target="_self"
    //           >
    //             {" "}
    //             Get in Touch{" "}
    //           </a>
    //         </div>
    //         <div class="footer-call-to-action">
    //           <h2 class="footer-call-to-action-title"> You Call Us</h2>
    //           <p class="footer-call-to-action-link-wrapper">
    //             {" "}
    //             <a
    //               class="footer-call-to-action-link"
    //               href="tel:0124-64XXXX"
    //               target="_self"
    //             >
    //               {" "}
    //               0124-64XXXX{" "}
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //       <div class="footer-social-links">
    //         {" "}
    //         <svg
    //           class="footer-social-amoeba-svg"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 236 54"
    //         >
    //           <path
    //             class="footer-social-amoeba-path"
    //             d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
    //           ></path>
    //         </svg>
    //         <a class="footer-social-link linkedin" href="#" target="_blank">
    //           <span class="hidden-link-text">Linkedin</span>
    //           <svg
    //             class="footer-social-icon-svg"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 30 30"
    //           >
    //             <path
    //               class="footer-social-icon-path"
    //               d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
    //             ></path>
    //           </svg>
    //         </a>
    //         <a class="footer-social-link twitter" href="#" target="_blank">
    //           <span class="hidden-link-text">Twitter</span>
    //           <svg
    //             class="footer-social-icon-svg"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 26 26"
    //           >
    //             <path
    //               class="footer-social-icon-path"
    //               d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "
    //             ></path>
    //           </svg>
    //         </a>
    //         <a class="footer-social-link youtube" href="#" target="_blank">
    //           <span class="hidden-link-text">Youtube</span>
    //           <svg
    //             class="footer-social-icon-svg"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 30 30"
    //           >
    //             <path
    //               class="footer-social-icon-path"
    //               d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
    //             ></path>
    //           </svg>
    //         </a>
    //         <a class="footer-social-link github" href="#" target="_blank">
    //           <span class="hidden-link-text">Github</span>
    //           <svg
    //             class="footer-social-icon-svg"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 32 32"
    //           >
    //             <path
    //               class="footer-social-icon-path"
    //               d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "
    //             ></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="footer-copyright">
    //       <div class="footer-copyright-wrapper">
    //         <p class="footer-copyright-text">
    //           <a class="footer-copyright-link" href="#" target="_self">
    //             {" "}
    //             ©2020. | Designed By: DevHustle. | All rights reserved.{" "}
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    //   <div className="pg-footer">
    //   <footer className="footer">
    //     <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
    //       <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    //     </svg>
    //     <div className="footer-content">
    //       <div className="footer-content-column">
    //         <div className="footer-logo">
    //             <span className="hidden-link-text">LOGO</span>
    //             <h1>DevHustle</h1>
    //         </div>
    //       </div>
    //       <div className='side-links'>
    //       <div className="footer-content-column">
    //         <div className="footer-menu">
    //           <h2 className="footer-menu-name"> Company</h2>
    //           <ul id="menu-company" className="footer-menu-list">
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Contact</a>
    //             </li>
    //             <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
    //               <a href="#">News</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Careers</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="footer-content-column">
    //         <div className="footer-menu">
    //           <h2 className="footer-menu-name"> Quick Links</h2>
    //           <ul id="menu-quick-links" className="footer-menu-list">
    //             <li className="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
    //             </li>
    //             <li className="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Security</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Blog</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
    //               <a href="#">Customers</a></li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Reviews</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="footer-content-column">
    //         <div className="footer-menu">
    //           <h2 className="footer-menu-name"> Quick Links</h2>
    //           <ul id="menu-quick-links" className="footer-menu-list">
    //             <li className="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
    //             </li>
    //             <li className="menu-item menu-item-type-custom menu-item-object-custom">
    //               <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Security</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Blog</a>
    //             </li>
    //             <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
    //               <a href="#">Customers</a></li>
    //             <li className="menu-item menu-item-type-post_type menu-item-object-page">
    //               <a href="#">Reviews</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="footer-content-column">
    //         <div className="footer-call-to-action">
    //          <button className='footer-call-to-action-button'>Register</button>

    //         </div>
    //         <div className="footer-call-to-action">
    //         <button className='footer-call-to-action-button Login-button'>Login</button>
    //         </div>
    //       </div>
    //       </div>

    //     </div>
    //     <div className="footer-copyright">
    //       <div className="footer-copyright-wrapper">
    //         <p className="footer-copyright-text">
    //           ©2020.| All rights reserved.
    //         </p>
    //         <div className='icons-right'>
    //           <span>Follow us</span>
    //         <span className='icons-holder'><img src={whatsapp} alt="/"/></span>
    //         <span className='icons-holder'><img src={facebook} alt="/"/></span>
    //         <span className='icons-holder'><img src={gmail} alt="/"/></span>
    //         {/* <span className='icons-holder'><img src={whatsapp} alt="/"/></span> */}
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <section class="bg-green-700 mt-10">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              About
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              Blog
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              Team
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              Pricing
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              Contact
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-white hover:text-white">
              Terms
            </a>
          </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <a href="#" class="text-white hover:text-white">
            <span class="sr-only">Facebook</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-white">
            <span class="sr-only">Instagram</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-white">
            <span class="sr-only">Twitter</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-white">
            <span class="sr-only">GitHub</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-white">
            <span class="sr-only">Dribbble</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 DevHustle, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
