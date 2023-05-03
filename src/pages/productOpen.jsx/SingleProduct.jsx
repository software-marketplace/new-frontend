import React, { useState } from "react";
import "./SingleProduct.scss";
import cat from "../../assets/cat.webp";
import Navbar2 from "../../components/Navbar/Navbar";
import ModalImage from "react-modal-image";

import ImageSection from "../../components/misleneous/imagesDisplay";
import ChatWidget from "../../components/chat/ChatWidget";

import { LightBox } from "react-lightbox-pack"; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";
import { useParams } from "react-router-dom";
import data from "../../devhustle.json";
import { useEffect } from "react";
import Review from "../../components/post/Review";
import Navbar from "../../components/Navbar/Navbar";
import { baseUrl } from "../../config";

// export default function SingleProduct({openChat, setOpenChat, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, openLogin, setOpenLogin}) {
export default function SingleProduct() {
  let params = useParams();
  console.log("params=", params.slug);
  console.log("data = ", data[Number(params.slug)]);
  // const [product, setProduct] = useState({});
  const [product, setProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  // const [imgIndex, setImgIndex] = useState(0);
  const [openChat, setOpenChat] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);
  let highlights = [];
  useEffect(() => {
    fetch(`${baseUrl}/product/${params.slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res2) => {
        // product = res2;
        setProduct(res2);
        console.log("product = ", product);

        let highlights = [];

        if (product.compare.frontend.length > 0)
          highlights.push(
            "Frontend technologies: " + product.compare.frontend.join(",")
          );
        if (product.compare.backend.length > 0)
          highlights.push(
            "Backend technologies: " + product.compare.backend.join(",")
          );
        if (product.compare.cloud_providers.length > 0)
          highlights.push(
            "Cloud Providers: " + product.compare.cloud_providers.join(",")
          );
        if (product.compare.cloud_Services.length > 0)
          highlights.push(
            "Cloud Services: " + product.compare.cloud_Services.join(",")
          );
        if (product.compare.type)
          highlights.push("Type: " + product.compare.type);
        if (product.compare.admin.toLowerCase() === "yes")
          highlights.push("Admin module available");
        if (product.compare.tracking_dashboards.toLowerCase() === "yes")
          highlights.push("Tracking Dashboards available");
        if (product.compare.navigation_dashboards.toLowerCase() === "yes")
          highlights.push("Login dashboards available");
        if (product.compare.is_cloud_data_store.toLowerCase() === "yes")
          highlights.push("Data stored in cloud");
        if (product.compare.databases.length > 0)
          highlights.push(
            "Databases used: " + product.compare.databases.join(",")
          );
        if (product.compare.architecture.length > 0)
          highlights.push(
            "Architecture used: " + product.compare.architecture.join(",")
          );
        if (product.compare.license.length > 0)
          highlights.push(
            "Licenses available: " + product.compare.license.join(",")
          );
        if (product.compare.maintainance_lifetime.toLowerCase() === "yes")
          highlights.push("Lifetime Maintanence available");
        if (product.compare.maintainance_in_months.toLowerCase() !== "na")
          highlights.push(
            "Maintanence period of " +
              product.compare.maintainance_in_months +
              " months"
          );
      });
  }, [params.slug]);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <>
      <Navbar />
      {/* <Navbar openChat={openChat} setOpenChat={setOpenChat} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} openLogin={openLogin} setOpenLogin={setOpenLogin} /> */}

      <div className="yes">
        <div className="big">
          <article className="recipe bigBox">
            <div className="imageHolder">
              {product.images.slice(0, 2).map((item, index) => (
                <>
                  <div className="pizza-box productImage" key={item.id}>
                    <img
                      src={item}
                      className="img"
                      onClick={() => {
                        lightBoxHandler(true, index);
                      }}
                      alt=""
                    />
                  </div>
                  {/* <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={data}
                    imageWidth="60vw"
                    imageHeight="70vh"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                  /> */}
                </>
              ))}
              {/* <ImageSection lightBoxHandler={lightBoxHandler} /> */}
            </div>

            <div className="recipe-content">
              <h1 className="recipe-title">
                <a href="#">{product.product_name}</a>
              </h1>
              <p className="recipe-metadata">
                <span className="recipe-rating">★★★★</span>
                <span className="recipe-votes">{product.reviews.length}</span>
              </p>
              <h1 className="recipe-pricetag">{"Rs." + product.Price}</h1>
              <button className="recipe-save" type="button" onClick={() => {}}>
                Contact Developer
              </button>
              <p className="recipe-desc">{product.description}</p>
              <h2 className="subHeader">Highlights</h2>
              <ul className="listedItem">
                {highlights.map((item, index) => (
                  <li>{item}</li>
                ))}
                {/* <li>Admin Dashbard</li>
                <li>Highly Cursomizable</li>
                <li>Highly Cursomizable</li>
                <li>Easy revenue tracking</li>
                <li>Admin dashboard</li>
                <li>Highly Cursomizable</li> */}
              </ul>

              <div className="detailSection">
                <h2 className="subHeader">Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  rerum hic ratione numquam quos praesentium dolor a consequatur
                  nisi ipsam voluptatem, magnam tempore, aliquid cupiditate
                  dolorum impedit unde velit omnis suscipit blanditiis? Nemo
                  suscipit qui animi? Neque ipsum consequatur deserunt earum
                  iure inventore nam magni, tenetur vel, necessitatibus
                  veritatis ullam odit aliquam? Repellendus, at! Dolorem libero
                  odio quos tenetur temporibus minus commodi, omnis error?
                </p>
              </div>
              <div className="review">
                {product.reviews.map(
                  (item, index) => (
                    <Review
                      rating={item.rating}
                      review={item.review}
                      id={item.id}
                      user={item.user}
                    />
                  )
                  // <Review item={item}/>
                )}
                {/* {product.reviews} */}
              </div>
            </div>
          </article>
        </div>
        <div className="small">
          <article className=" side">
            <div className="pizza-box side1"></div>
            <div className="recipe-content1">
              <p className="recipe-tags">
                <span className="recipe-tag">Flutter developer</span>
                <span className="recipe-tag">Mern Expert</span>
              </p>
              <h1 className="recipe-title">
                <a href="#">Developer Name</a>
              </h1>
              <p className="recipe-metadata">
                {/* <span className="recipe-rating">★★★★<span>☆</span></span> */}
                {/* <span className="recipe-votes">(12 votes)</span> */}
              </p>
              <p className="recipe-desc">
                Here we can tell about the developer
              </p>
              <button className="recipe-save" type="button">
                Contact Developer
              </button>
            </div>
          </article>
        </div>
      </div>
      {openChat && (
        <ChatWidget username={"priyanka@gmail.com"} devUsername={""} />
      )}
    </>
  );
}
