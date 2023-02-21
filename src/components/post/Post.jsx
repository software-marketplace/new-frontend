import React from 'react'
import './post.css'
import { Star} from "@mui/icons-material";
import Data from '../../devhustle.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function post() {
  return (
    <>
      {/* {Data.map ((product) =>(
 <div className="card" key={product.id} >
 <div className="card-header">
   <img src={product.images} alt="rover" />
 </div>
 <div className="card-body">
  
   <span>
    {product.product_name}
   </span>
   <p>
  {product.product_description} 
   </p>
   <div className='priceAndRatingSection'>
   <div className='stars'>
    {Array(product.rating).fill(<Star /> )}
   </div>
   <div>${product.Price}</div>
   </div>
   <div className='buttonDiv'> <button className='button'>View Details</button></div>
  
 </div>
</div>

      ))} */}

      {Data.map((product) =>
<div className="product-card" key={product.id}>
  <div className="product-tumb">
    <img src={product.images} alt="" />
  </div>
  <div className="product-details">
    {/* <span className="product-catagory">Women,bag</span> */}
    <h4><a href="">{product.product_name}</a></h4>
    <p>{product.product_description}</p>
    <div className='stars'>
    {Array(product.rating).fill(<Star /> )}
   </div>
    <div className="product-bottom-details">
      <div className="product-price"><small>$96.00</small>${product.Price}</div>
      <div className="product-links">
        <a href=""><FavoriteBorderIcon /></a>
        <a href=""><AddShoppingCartIcon/></a>
      </div>
    </div>
  </div>
</div>
       )}   
    </>
  )
}
