import React from "react";
import "./posts.css";
import Data from "../../devhustle.json";
import VerticalPost from "../post/VerticalPost";
import { baseUrl } from "../../config";


export default function posts() {

  let top_posts=[];
  fetch(`${baseUrl}/products`, {
    method: "GET",
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
   top_posts = data.slice(0,9);
  console.log(top_posts);
    });
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
