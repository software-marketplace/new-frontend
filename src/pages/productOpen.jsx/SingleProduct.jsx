import React, { useState } from "react";
import "./SingleProduct.scss";
import cat from "../../assets/cat.webp";
import Navbar2 from "../../components/Navbar/Navbar";
import ModalImage from "react-modal-image";

import ImageSection from "../../components/misleneous/imagesDisplay";

import { LightBox } from "react-lightbox-pack"; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";
import data from "./data/data.json";

export default function SingleProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  // const [imgIndex, setImgIndex] = useState(0);

  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <>
      <Navbar2 />
      <div className="yes">
        <div className="big">
          <article className="recipe bigBox">
            <div className="imageHolder">
              {data.map((item, index) => (
                <>
                  <div className="pizza-box productImage" key={item.id}>
                    <img
                      src={item.image}
                      className="img"
                      onClick={() => {
                        lightBoxHandler(true, index);
                      }}
                      alt=""
                    />
                  </div>
                  <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={data}
                    imageWidth="60vw"
                    imageHeight="70vh"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                  />
                </>
              ))}
              <ImageSection lightBoxHandler={lightBoxHandler} />
            </div>

            <div className="recipe-content">
              <h1 className="recipe-title">
                <a href="#">Ecommerce Website</a>
              </h1>
              <p className="recipe-metadata">
                <span className="recipe-rating">★★★★</span>
                <span className="recipe-votes">12reviews</span>
              </p>
              <h1 className="recipe-pricetag">$15000</h1>
              <button className="recipe-save" type="button">
                Contact Developer
              </button>
              <p className="recipe-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio voluptates, explicabo reprehenderit porro error,
                numquam dolore iusto vero ipsa nisi quae iure inventore incidunt
                commodi cumque magnam non eligendi delectus quam reiciendis rem
                harum fuga! Nobis vel sequi nostrum facilis veniam itaque
                asperiores consequatur totam perspiciatis sapiente ducimus
                facere molestiae, reiciendis saepe, perferendis voluptate
                corrupti. Saepe nobis odit aspernatur minus quam esse soluta
                doloribus.
              </p>
              <h2 className="subHeader">Highlights</h2>
              <ul className="listedItem">
                <li>Admin Dashbard</li>
                <li>Highly Cursomizable</li>
                <li>Highly Cursomizable</li>
                <li>Easy revenue tracking</li>
                <li>Admin dashboard</li>
                <li>Highly Cursomizable</li>
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
            </div>
          </article>
        </div>
        <div className="small">
          <article className=" side">
            <div className="pizza-box side1">
              <img
                src={cat}
                // width={130} height={120}
                alt=""
              />
            </div>
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
    </>
  );
}
