// import React from "react";

// const ProductComparisonTable = ({ products }) => {
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td></td>
//           {for(let i=0;i<products.length;i++)
//             <td>{products[i].product_name}</td>
//         }
//         </tr>
//         <tr>
//           <td></td>
//           {for(let i=0;i<products.length;i++)
//             <td>
//             <img src={products[i].display_image} />
//           </td>
//           }

//         </tr>
//         <tr>
//           <td>Frontend</td>
//            {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.frontend}</td>
//           }
//         </tr>
//         <tr>
//           <td>Backend</td>
//            {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.backend}</td>
//           }
//         </tr>
//         <tr>
//           <td>Cloud Providers</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.cloud_providers}</td>
//           }
//         </tr>
//         <tr>
//           <td>Cloud Services</td>
//            {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.cloud_Services}</td>
//           }
//         </tr>
//         <tr>
//           <td>Type</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.type}</td>
//           }
//         </tr>
//         <tr>
//           <td>Admin</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.admin}</td>
//           }
//         </tr>
//         <tr>
//           <td>Tracking Dashboards</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.tracking_dashboards}</td>
//           }
//         </tr>
//         <tr>
//           <td>Navigation Dashboards</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.navigation_dahboards}</td>
//           }
//         </tr>
//         <tr>
//           <td>Cloud Data Store</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.is_cloud_data_store}</td>
//           }
//         </tr>
//         <tr>
//           <td>Databases</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.databases}</td>
//           }
//         </tr>
//         <tr>
//           <td>Architecture</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.architecture}</td>
//           }
//         </tr>
//         <tr>
//           <td>License</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.license}</td>
//           }
//         </tr>
//         <tr>
//           <td>Maintenance Lifetime</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.maintainance_lifetime}</td>
//           }
//         </tr>
//         <tr>
//           <td>Maintenance in Months</td>
//           {for(let i=0;i<products.length;i++)
//           <td>{products[i].compare.maintainence_in_months}</td>
//           }
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default ProductComparisonTable;

import React from "react";

const ProductComparisonTable = ({ products }) => {
  console.log(products);
  return (
    <div
    // style={{
    //   position: "fixed",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   backgroundColor: "white",
    //   borderRadius: "10px",
    //   padding: "20px",
    //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    // }}
    >
      <h1>Comparison Table</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
            {products.map((product, index) => (
              <td>1 {product.product_name}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// export default ProductComparisonTable;
export default React.memo(ProductComparisonTable);
