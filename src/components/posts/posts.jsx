import React from "react";
import "./posts.css";
import Data from "../../devhustle.json";
import VerticalPost from "../post/VerticalPost";

export default function posts() {
  const top_posts = Data.slice(7);
  console.log(top_posts);
  return (
    <div className="cardlisting">
      {top_posts.map((product, i) => (
        <VerticalPost
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
