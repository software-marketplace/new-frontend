import React from 'react'
import './post.css'
import { Star} from "@mui/icons-material";
import Data from '../../devhustle.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export default function post() {
  return (
    <>
      {Data.map((product) =>

<Link to ="/product" className='he'> 
  <div className="product-card" key={product.id}>
  <div className="product-tumb">
    <img src={product.images} alt="" />
  </div>
  <div className="product-details">
    {/* <span className="product-catagory">Women,bag</span> */}
    <h4>{product.product_name}</h4>
    <p>{product.product_description}</p>
    <div className='stars'>
    {Array(product.rating).fill(<Star /> )}
   </div>
    <div className="product-bottom-details">
      <div className="product-price"><small>$96.00</small>${product.Price}</div>
      {/* <div className="product-links">
      <span> <FavoriteBorderIcon /></span>
      <span> <AddShoppingCartIcon/></span>
      </div> */}
      
    </div>
    <button>
        Add to cart
      </button>
  </div>
</div>
</Link> 
       )}   
    </>
  )
}
