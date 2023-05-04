// import React from "react";
// import styles from "./Review.module.css";
// import { Link } from "react-router-dom";

// const Review = ({ id, user, rating, review }) => {
//   return (
//     // <div className={styles.post}>
//     //   <img src={"avatar.png"} alt="" />
//     //   <div className={styles.content}>
//     //     <h2>{user}</h2>
//     //     {/* <span className={styles.builtBy}>by {builtBy}</span> */}
//     //     {/* <h3>Tech Stack</h3> */}
//     //     {/* <p>
//     //       {techStack.map((tech, i) => (
//     //         <span key={i}>{tech}</span>
//     //       ))}
//     //     </p> */}
//     //   </div>
//     //   {/* <div className={styles.right}>
//     //     <h3 className={styles.price}>&#x20B9;{price}</h3> */}
//     //     <div className={styles.rating}>
//     //       {[...Array(Math.ceil(rating))].map((_, i) => (
//     //         <svg
//     //           key={i}
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="20"
//     //           height="20"
//     //           viewBox="0 0 24 24"
//     //           fill="#ffc800"
//     //         >
//     //           <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
//     //         </svg>
//     //       ))}
//     //       ({rating})
//     //     </div>
//     //     <p>{review}</p>
//     //   {/* </div> */}
//     // </div>
//     <div>
//       <div className={"blog-card"}>
//         <div className={styles.meta}>
//           {/* <img className={styles.photo} src={"https://adittyadey.xyz/img/pp.jpg"}></img> */}
//           <i
//             class="fa fa-user-circle-o"
//             aria-hidden="true"
//             style={{ fontSize: "5em" }}
//           ></i>
//         </div>
//         <div className={styles.description}>
//           <h1>Great Product!!</h1>
//           {for(let i=1;i<Number(rating);i++) {
//           <span className={"fa fa-star checked"}></span>
//           }

//           {/* <span className={"fa fa-star checked"}></span>
//           <span className={"fa fa-star checked"}></span> */}
//            {for(let i=Number(rating);i<=5;i++) {
//           <span className={"fa fa-star"}></span>
//           }
//            }
//           // <span className={"fa fa-star"}></span>
//           // <span className={"fa fa-star"}></span>
//           <br />
//           <h2>Adittya Dey</h2>
//           <p>
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
//             dolorum architecto obcaecati enim dicta praesentium, quam nobis!
//             Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor
//             sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
//             obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam
//             facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet,
//             consectetur adipisicing elit. Ad eum dolorum architecto obcaecati
//             enim dicta praesentium, quam nobis! Neque ad aliquam facilis
//             numquam. Veritatis, sit.
//           </p>
//         </div>
//       </div>

//       <br />
//       <hr />
//       <br />
//     </div>
//   );
// };

// export default Review;

import React from "react";
import styles from "./Review.module.css";
import { Link } from "react-router-dom";

const Review = ({ id, user, rating, comment }) => {
  const fullStars = [...Array(Math.floor(rating))].map((_, i) => (
    <span key={i} className={"fa fa-star checked"}></span>
  ));

  const emptyStars = [...Array(5 - Math.floor(rating))].map((_, i) => (
    <span key={i} className={"fa fa-star"}></span>
  ));

  return (
    <div>
      <div className={"blog-card"}>
        <div className={styles.meta}>
          {/* <img className={styles.photo} src={"https://adittyadey.xyz/img/pp.jpg"}></img> */}
          <i
            class="fa fa-user-circle-o"
            aria-hidden="true"
            style={{ fontSize: "5em" }}
          ></i>
        </div>
        <div className={styles.description}>
          {/* <h1>Great Product!!</h1> */}
          {fullStars}
          {emptyStars}
          <br />
          <h2>{user}</h2>
          <p>{comment}</p>
        </div>
      </div>

      <br />
      <hr />
      <br />
    </div>
  );
};

export default Review;
