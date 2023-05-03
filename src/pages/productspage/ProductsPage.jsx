import React, { useRef, useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar/Navbar";
import styles from "./productspage.module.css";
import HorizontalPost from "../../components/post/HorizontalPost";
import PaginatedItems from "../../components/paginate/Paginate";
// import Data from "../../devhustle.json";
import { baseUrl } from "../../config";
import ProductComparisonTable from "../../components/compare/ProductComparisonTable";
import { Link } from "react-router-dom";

const ProductsPage = ({
  // selectedProducts,
  // setSelectedProducts,
  getSelectedProductCount,
  handleProductRemove,
  handleProductSelect,
  isProductSelected,
}) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({ from: "", to: "" });
  const [rating, setRating] = useState(0);
  const fromPrice = useRef();
  const toPrice = useRef();
  // const [selectedProducts, setSelectedProducts] = useState([]);

  let Data;
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
        Data = res2;
      });
  }, []);

  const search = () => {
    fetch(`${baseUrl}/products?search=${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res2) => {
        setData(res2);
      });
  };

  const handleRatingChange = (numberAsString) => {
    setRating(parseInt(numberAsString));
    fetchFilteredData();
  };

  const fetchFilteredData = () => {
    fetch(
      `${baseUrl}/products?filter_min_rating=${rating}&filter_categories=${category}&filter_price=${price.to}-${price.from}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res2) => {
        setData(res2);
      });
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

  // const handleProductSelect = (product) => {
  //   console.log("in HPS");
  //   if (selectedProducts.length >= 3) return false;
  //   const newSelectedProducts = [...selectedProducts, product];
  //   setSelectedProducts(newSelectedProducts);
  //   return true;
  // };

  // const handleProductRemove = (product) => {
  //   const newSelectedProducts = selectedProducts.filter(
  //     (p) => p.id !== product.id
  //   );
  //   setSelectedProducts(newSelectedProducts);
  // };

  // const isProductSelected = (product) => {
  //   return selectedProducts.some((p) => p.id === product.id);
  // };
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
          {getSelectedProductCount() > 0 && (
            <Link
              to="/product-comparison-table"
              target="_blank"
              style={{ color: "black" }}
            >
              Open Product Comparison Table
            </Link>
          )}

          <PaginatedItems
            items={finalData}
            itemsPerPage={7}
            handleProductSelect={handleProductSelect}
            handleProductRemove={handleProductRemove}
            isProductSelected={isProductSelected}
          />
        </div>
      </div>
      {/* <ProductComparisonTable products={selectedProducts} /> */}
    </div>
  );
};

export default ProductsPage;
