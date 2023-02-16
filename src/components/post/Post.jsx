import React from 'react'
import './post.css'
import { Star} from "@mui/icons-material";
import Data from '../../devhustle.json'

export default function post() {
  return (
    <>
      {Data.map ((product) =>(
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

      ))}
       
    </>
  )
}
