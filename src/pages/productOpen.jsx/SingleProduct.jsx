import Review from "../../components/post/Review";
import Navbar from "../../components/Navbar/Navbar";

import React, { useState, useEffect } from "react";
import "./SingleProduct.scss";
import Navbar2 from "../../components/Navbar/Navbar";
import ModalImage from "react-modal-image";
import ImageSection from "../../components/misleneous/imagesDisplay";
import ChatWidget from "../../components/chat/ChatWidget";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../config";

export default function SingleProduct({ contactDeveloper }) {
    const [product, setProduct] = useState(null);
    const [highlights, setHighlights] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const [openChat, setOpenChat] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [sIndex, setSIndex] = useState(0);
    const params = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/products/${params.slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res2) => {
                setProduct(res2);
            })
            .catch((error) => console.log(error));
    }, [params.slug]);

    useEffect(() => {
        if (product) {
            let temp = [];
            if (product.compare.frontend.length > 0)
                temp.push(
                    "Frontend technologies: " + product.compare.frontend.join(",")
                );
            if (product.compare.backend.length > 0)
                temp.push("Backend technologies: " + product.compare.backend.join(","));
            if (product.compare.cloud_providers.length > 0)
                temp.push(
                    "Cloud Providers: " + product.compare.cloud_providers.join(",")
                );
            if (product.compare.cloud_Services.length > 0)
                temp.push(
                    "Cloud Services: " + product.compare.cloud_Services.join(",")
                );
            if (product.compare.type) temp.push("Type: " + product.compare.type);
            if (product.compare.admin.toLowerCase() === "yes")
                temp.push("Admin module available");
            if (product.compare.tracking_dashboards.toLowerCase() === "yes")
                temp.push("Tracking Dashboards available");
            if (product.compare.navigation_dahboards.toLowerCase() === "yes")
                temp.push("Login dashboards available");
            if (product.compare.is_cloud_data_store.toLowerCase() === "yes")
                temp.push("Data stored in cloud");
            if (product.compare.databases.length > 0)
                temp.push("Databases used: " + product.compare.databases.join(","));
            if (product.compare.architecture.length > 0)
                temp.push(
                    "Architecture used: " + product.compare.architecture.join(",")
                );
            if (product.compare.license.length > 0)
                temp.push("Licenses available: " + product.compare.license.join(","));
            if (product.compare.maintainance_lifetime.toLowerCase() === "yes")
                temp.push("Lifetime Maintanence available");
            if (product.compare.maintainence_in_months.toLowerCase() !== "na")
                temp.push(
                    "Maintanence period of " +
                    product.compare.maintainence_in_months +
                    " months"
                );
            setHighlights(temp);
        }
    }, [product]);

    const lightBoxHandler = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <>
            <Navbar />
            {!product && <p>Loading...</p>}
            {product && (
                <div className="yes">
                    <>
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
                                        </>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </>
                </div>
            )}
            <div className="recipe-content">
                <h1 className="recipe-title">
                    <a href="#">{product.product_name}</a>
                </h1>
                <p className="recipe-metadata">
                    <span className="recipe-rating">★★★★</span>
                    <span className="recipe-votes">
                        {product.reviews.length}
                    </span>
                </p>
                <h1 className="recipe-pricetag">{"Rs." + product.Price}</h1>
                <button
                    className="recipe-save"
                    type="button"
                    onClick={() => { }}
                >
                    Contact Developer
                </button>
                <p className="recipe-desc">{product.description}</p>
                <h2 className="subHeader">Highlights</h2>
                <ul className="listedItem">
                    {highlights.map((item, index) => (
                        <li>{item}</li>
                    ))}
                </ul>

                <div className="detailSection">
                    <h2 className="subHeader">Details</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rerum hic ratione numquam quos praesentium dolor a
                        consequatur nisi ipsam voluptatem, magnam tempore, aliquid
                        cupiditate dolorum impedit unde velit omnis suscipit
                        blanditiis? Nemo suscipit qui animi? Neque ipsum
                        consequatur deserunt earum iure inventore nam magni,
                        tenetur vel, necessitatibus veritatis ullam odit aliquam?
                        Repellendus, at! Dolorem libero odio quos tenetur
                        temporibus minus commodi, omnis error?
                    </p>
                </div>
                <div className="review">
                    {product.reviews.map(
                        (item, index) => (
                            <Review
                                rating={item.rating}
                                comment={item.comment}
                                id={item.id}
                                user={item.user}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
}
