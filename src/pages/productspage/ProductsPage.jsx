import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar";
import styles from "./productspage.module.css";
import HorizontalPost from "../../components/post/HorizontalPost";
import Data from "../../devhustle.json";

const ProductsPage = () => {
  const [data, setData] = useState(Data);
  const [searchQuery, setSearchQuery] = useState("");

  const search = () => {
    setData(
      Data.filter(
        (product) =>
          product.product_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.tags
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <Navbar2 />
      <div className={styles.search}>
        <input
          placeholder="Search ..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.main}>
          {data.map((product, i) => (
            <HorizontalPost
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
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
