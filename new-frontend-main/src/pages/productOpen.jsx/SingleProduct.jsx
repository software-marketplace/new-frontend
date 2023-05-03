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
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    // const [imgIndex, setImgIndex] = useState(0);
    const [openChat, setOpenChat] = useState(false);
    // const [product,setProduct] = useState(null)
    const [toggle, setToggle] = useState(false);
    const [sIndex, setSIndex] = useState(0);
    // const product = data[Number(params.slug)];
    // console.log("product = ", product);
    const product = {
        "_id": 0,
        "product_name": "Claap 2.0",
        "product_description": "Too many meetings? We can help with that \ud83d\udc47\n\n\ud83c\udfa5 Replace your next meeting with a short video and get feedback faster\n\n\u2728 Record the meetings you keep with AI notes and transcripts\n\n\ud83d\udcfa Scale your team\u2019s knowledge with a video workspace designed for your org",
        "images": [
            "https://ph-files.imgix.net/195f3792-9be8-4580-969b-f3001f528a38.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max",
            "https://ph-files.imgix.net/40e47c64-1751-4cf4-a702-e72ac83c2ce6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max",
            "https://ph-files.imgix.net/d1c239d7-5651-46e5-af1c-51d1fcc415d0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=368&h=220&fit=max",
            "https://ph-files.imgix.net/04eadc3c-6918-4ff3-a500-21f02071efa8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=368&h=220&fit=max",
            "https://ph-files.imgix.net/e74ce27a-a74e-402f-93b6-3669369d4978.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=368&h=220&fit=max",
            "https://ph-files.imgix.net/f293a242-6c96-496a-a1e9-02b334b1753f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=368&h=220&fit=max",
            "https://ph-files.imgix.net/85d008d5-7209-4b7c-8a0e-959e2fca5fda.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=368&h=220&fit=max"
        ],
        "display_image": "https://ph-files.imgix.net/195f3792-9be8-4580-969b-f3001f528a38.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max",
        "built_by": "Debra Kolar",
        "tags": [
            "Web App",
            "Productivity",
            "Meetings"
        ],
        "rating": 2,
        "reviews": [
            {
                "id": 1,
                "user": "Stuart Harding",
                "rating": 1,
                "comment": "This is a review"
            },
            {
                "id": 2,
                "user": "Annie Long",
                "rating": 3,
                "comment": "This is a review"
            }
        ],
        "Price": "Free Options",
        "compare":
            {
                "frontend": [
                    "React.js",
                    "Next.js"
                ],
                "backend": [
                    "Node.js",
                    "Express.js"
                ],
                "cloud_providers": [
                    "aws"
                ],
                "cloud_Services": [
                    "S3",
                    "Cognito",
                    "CloudFront"
                ],
                "type": "Web application",
                "admin": "No",
                "tracking_dashboards": "No",
                "navigation_dahboards": "Yes",
                "is_cloud_data_store": "Yes",
                "databases": [
                    "Mongodb"
                ],
                "architecture": [
                    "MVC"
                ],
                "license": [
                    "Single Use"
                ],
                "maintainance_lifetime": "Yes",
                "maintainence_in_months": "NA"
            }
    };   
    let highlights = [];
    
    if(product.compare.frontend.length>0)
    highlights.push("Frontend technologies: "+product.compare.frontend.join(","));
    if(product.compare.backend.length>0)
    highlights.push("Backend technologies: "+product.compare.backend.join(","));
    if(product.compare.cloud_providers.length>0)
    highlights.push("Cloud Providers: "+product.compare.cloud_providers.join(","));
    if(product.compare.cloud_Services.length>0)
    highlights.push("Cloud Services: "+product.compare.cloud_Services.join(","));
    if(product.compare.type)
    highlights.push("Type: "+product.compare.type);

    useEffect(() => {
       
        fetch(`${baseUrl}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res)=>res.json()).then((res2)=>{
         product = res2;
        });
       
    }, []);

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
                            <button className="recipe-save" type="button" onClick={() => { }}>
                                Contact Developer
                            </button>
                            <p className="recipe-desc">
                                {product.description}
                            </p>
                            <h2 className="subHeader">Tech Stack Highlights</h2>
                            <ul className="listedItem">
                               (if {product.frontend.length>0}) && <li></li>
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
                            <div>

                                {product.reviews.map((item, index) =>
                                    <Review rating={item.rating} review={item.review} id={item.id} user={item.user} />
                                    // <Review item={item}/>
                                )}
                                {/* {product.reviews} */}
                            </div>
                        </div>
                    </article>
                </div>
                <div className="small">
                    <article className=" side">
                        <div className="pizza-box side1">

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
            {openChat && <ChatWidget username={"priyanka@gmail.com"} devUsername={""} />}
        </>
    );
}
