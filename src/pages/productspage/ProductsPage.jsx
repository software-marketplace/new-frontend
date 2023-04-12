import React, { useRef, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar";
import styles from "./productspage.module.css";
import HorizontalPost from "../../components/post/HorizontalPost";
import Data from "../../devhustle.json";

const ProductsPage = () => {
  const [data, setData] = useState(Data);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({ from: "", to: "" });
  const [rating, setRating] = useState(0);
  const fromPrice = useRef();
  const toPrice = useRef();

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

  const handleRatingChange = (numberAsString) => {
    setRating(parseInt(numberAsString));
  };

  const tags = [];

  data.forEach((product) => {
    product.tags.forEach((tag) => (tags.includes(tag) ? null : tags.push(tag)));
  });

  // filter category
  let finalData =
    category === ""
      ? data
      : data.filter((product) => product.tags.includes(category));

  // filter price
  finalData =
    price.from === "" || price.to === ""
      ? finalData
      : finalData.filter(
          (prod) =>
            prod.Price <= parseInt(price.to) &&
            prod.Price >= parseInt(price.from)
        );

  // filter rating
  finalData = finalData.filter((prod) => prod.rating >= rating);

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
        <div className={styles.sidebar}>
          <h2>Filters</h2>
          <div className={styles.filter}>
            <h3>Categories</h3>
            <ul>
              <li
                onClick={() => {
                  setCategory("");
                }}
                className={styles.active}
              >
                All Categories
              </li>
              {tags.map((tag, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setCategory(tag);
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.filter}>
            <h3>Price</h3>
            <div className={styles.price}>
              <input type="number" min={0} ref={fromPrice} />
              <input type="number" min={0} ref={toPrice} />
              <button
                onClick={() => {
                  setPrice({
                    from: fromPrice.current.value,
                    to: toPrice.current.value,
                  });
                }}
              >
                Go
              </button>
            </div>
          </div>
          <div className={styles.filter}>
            <h3>Ratings</h3>
            <form>
              <input
                type="radio"
                value="0"
                id="0"
                name="0"
                checked={rating === 0}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <label htmlFor="0">All Ratings</label>
              <br />
              <input
                type="radio"
                value="1"
                id="1"
                name="1"
                checked={rating === 1}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <label htmlFor="1">1 and above</label>
              <br />
              <input
                type="radio"
                value="2"
                id="2"
                name="2"
                checked={rating === 2}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <label htmlFor="2">2 and above</label>
              <br />
              <input
                type="radio"
                value="3"
                id="3"
                name="3"
                checked={rating === 3}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <label htmlFor="3">3 and above</label>
              <br />
              <input
                type="radio"
                value="4"
                id="4"
                name="4"
                checked={rating === 4}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <label htmlFor="4">4 and above</label>
              <br />
            </form>
          </div>
        </div>
        <div className={styles.main}>
          {finalData.map((product, i) => (
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
