import React from "react";
import Navbar2 from "../../components/Navbar/Navbar";
import styles from "./productspage.module.css";
import HorizontalPost from "../../components/post/HorizontalPost";
import Data from "../../devhustle.json";

const ProductsPage = () => {
  return (
    <>
      <Navbar2 />
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.main}>
          {Data.map((product, i) => (
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
    </>
  );
};

export default ProductsPage;
