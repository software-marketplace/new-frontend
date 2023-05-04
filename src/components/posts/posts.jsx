import React, { useState, useEffect } from "react";
import "./posts.css";
// import Data from "../../devhustle.json";
import VerticalPost from "../post/VerticalPost";
import { baseUrl } from "../../config";

export default function Posts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res2) => {
                setData(res2);
                // Data = res2;
            });
    }, []);
    const top_posts = data.slice(0, 9);
    //console.log(top_posts);
    return (
        <div className="cardlisting">
            {top_posts.map((product, i) => (
                <VerticalPost
                    _id={product._id}
                    key={i}
                    image={product.display_image}
                    name={product.product_name}
                    description={product.product_description}
                    builtBy={product.built_by}
                    price={product.Price}
                    rating={product.rating}
                    techStack={[
                        ...product.compare.frontend,
                        ...product.compare.backend,
                        ...(product.cloud_providers ? product.cloud_providers : []),
                    ]}
                />
            ))}
        </div>
    );
}
