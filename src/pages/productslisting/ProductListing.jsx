//This section is used as a homepage in this section posts has been imported and then it is imported from post section to render all the
//product card
import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar/Navbar";
import styles from "./ProductListing.module.css";

import cat from "../../assets/cat.webp";
import Posts from "../../components/posts/posts";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import FaqSection from "../Faqsection/FaqSection";
import Footer from "../../components/footer/Footer";
import { useSearchParams } from "react-router-dom";
import { baseUrl } from "../../config";

export default function ProductListing() {
  const [called, setCalled] = useState(false);
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const currentCode = searchParams.get("code");
    const token = localStorage.getItem("access_token");
    if (currentCode && !called && !token) {
      setCalled(true);
      fetch(`${baseUrl}/auth/github`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          code: currentCode,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data["access_token"]) {
            localStorage.setItem("access_token", data["access_token"]);
            fetch(`https://api.github.com/user`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                Authorization: `token ${data["access_token"]}`,
              },
            })
<<<<<<< HEAD
              .then((res) => {
=======
/*              .then((res) => {
>>>>>>> 37b22d8dedaf3d15d035cf80413771de08c472b0
                return res.json();
              })
              .then((data) => {
                localStorage.setItem("name", data["name"]);
                localStorage.setItem("username", data["login"]);
                localStorage.setItem("avatar_url", data["avatar_url"]);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
<<<<<<< HEAD
  }, [called]);
=======
  }, [called]); */
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    if (data["access_token"]) {
                        localStorage.setItem("access_token", data["access_token"]);
                        fetch(`https://api.github.com/user`, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                Authorization: `token ${data["access_token"]}`
                            },
                        }).then((res) => {
                            return res.json();
                        }).then((data) => {
                            localStorage.setItem("name", data["name"]);
                            localStorage.setItem("username", data["login"]);
                            localStorage.setItem("email", data["email"]);
                            localStorage.setItem("avatar_url", data["avatar_url"]);
                            window.location.href = "/";
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [called])
>>>>>>> 37b22d8dedaf3d15d035cf80413771de08c472b0

  return (
    <>
      <div className={styles.pageSection}>
        <Navbar2 className={styles.nav} />
        {/* <div className={styles.Container}>
          <div className={styles.left}>
            <span className={styles.span1}>LOREM IPSUM</span>
            <br />
            <span className={styles.span2}>
              Make our ideas come <br />
              to life!
            </span>
            <span className={styles.span3}>
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Reprehenderit nemo dolore
              <br />
              quibusdam quas aspernatur, quis nulla, error eligendi amet
              exercitationem facere nobis,
              <br />
              aut aliquid ipsam omnis cum minus? Repellendus laboriosam corrupti
              velit?
            </span>
          </div>
          <div className={styles.right}>
            <img src={cat} />
          </div>
        </div> */}
        {/* hero starts */}
        {/* <div className={styles.hero}>
          <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
            <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
              <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900   dark:text-white font-extrabold f-f-l">
                Build, review and ship with ease
              </h1>
              <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                <h2 className=" dark:text-white">
                  The next big thing starts here. Start building with Prodify
                  and be the first to market with a product that is ready to
                  take on the competition and delight your customers
                </h2>
              </div>
              <div className="lg:flex">
                <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-white text-green-600 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 rounded-lg">
                  Start building now
                </button>
                <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-white text-green-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 rounded-lg">
                  Try it out
                </button>
              </div>
            </div>
            <img
              className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
              alt="sample page"
              role="img"
            />
            <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4 bg-white text-green font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 rounded-lg">
              Start building now
            </button>
            <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4 bg-white text-green font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 rounded-lg">
              Try it out
            </button>
          </div>
        </div> */}
        {/* <section className={styles.hero}>
          <div>
            <h1> Build, review and ship with ease</h1>
            <p>
              The next big thing starts here. Start building with Prodify and be
              the first to market with a product that is ready to take on the
              competition and delight your customers
            </p>
            <a className={styles.cta} href="">
              CONTACTEZ-MOI
            </a>
          </div>
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
            alt=""
          />
        </section> */}
        <section className={styles.hero}>
          <div className={styles.row}>
            <div className={styles.leftColumn}>
              <h2 className={styles.leftHeading}>
                Responsive Two Column Layout
              </h2>
              <p className={styles.leftParagraph}>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <button className={styles.btn}>Get Started</button>
              <button className={styles.btn}>Live Demo</button>
            </div>
            <div className={styles.rightColumn}>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>

        {/* hero ends */}
        <h2 className={styles.productLister}>OUR BEST SELLERS</h2>

        <div>
          <Posts />
        </div>
      </div>
    </>
  );
}
