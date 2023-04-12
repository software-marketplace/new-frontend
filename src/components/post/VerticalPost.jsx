import React from "react";
import styles from "./verticalPost.module.css";
import { Link } from "react-router-dom";

const VerticalPost = ({
  image,
  name,
  description,
  builtBy,
  techStack,
  price,
  rating,
}) => {
  return (
    <div className={styles.post}>
      <img src={image} alt="" />
      <div className={styles.content}>
        <h2>{name}</h2>
        <span className={styles.builtBy}>by {builtBy}</span>
      </div>
      <div className={styles.right}>
        <h3 className={styles.price}>&#x20B9;{price}</h3>
        <div className={styles.rating}>
          {[...Array(Math.ceil(rating))].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#ffc800"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          ))}
          ({rating})
        </div>
        <Link>
          <button className={styles.btn}>Contact Developer</button>
        </Link>
        <span className={styles.btnSec}>
          <Link>Add to compare</Link>
        </span>
      </div>
    </div>
  );
};

export default VerticalPost;
