import React from 'react'
import './SingleProduct.scss'
import cat from '../../assets/cat.webp'
import Navbar2 from '../../components/Navbar2/Navbar'

export default function SingleProduct() {
  return (
    <>
     <Navbar2/>
       <div className='yes'>
        <div className="big">
          <article className="recipe bigBox">
            <div className="pizza-box productImage">
              <img src={cat} 
              // width={1500} height={1600} 
              alt="" />
            </div>
            <div className="recipe-content">
              <p className="recipe-tags">
                {/* <span className="recipe-tag">Gluten Free</span> */}
                {/* <span className="recipe-tag">Main dish</span> */}
              </p>
              <h1 className="recipe-title"><a href="#">Ecommerce Website</a></h1>
              <p className="recipe-metadata">
                <span className="recipe-rating">★★★★<span>☆</span></span>
                <span className="recipe-votes">(12 votes)</span>
              </p>
              <p className="recipe-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptates, 
              explicabo reprehenderit porro error, numquam dolore iusto vero ipsa nisi quae iure inventore incidunt commodi cumque magnam non eligendi delectus quam reiciendis rem harum fuga! 
              Nobis vel sequi nostrum facilis veniam itaque asperiores consequatur totam perspiciatis sapiente ducimus facere molestiae, reiciendis saepe, perferendis voluptate corrupti. Saepe nobis odit 
              aspernatur minus quam esse soluta doloribus.</p>
              <h3>Highlights</h3>
              <ul className='listedItem'>
                <li>Admin Dashbard</li>
                <li>Highly Cursomizable</li>
                <li>Highly Cursomizable</li>
                <li>Easy revenue tracking</li>
                <li>Admin dashboard</li>
                <li>Highly Cursomizable</li>
              </ul>
              <button className="recipe-save" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" /></svg>
               Add to Cart
              </button>
              <div className='detailSection'>
              <h3>Details</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum hic ratione numquam quos praesentium dolor a consequatur nisi ipsam voluptatem, magnam tempore, aliquid cupiditate 
                dolorum impedit unde velit omnis suscipit blanditiis? Nemo suscipit qui animi? Neque ipsum consequatur deserunt earum iure inventore nam magni, tenetur vel, necessitatibus veritatis
                 ullam odit aliquam? Repellendus, at! Dolorem libero odio quos tenetur temporibus minus commodi, omnis error?</p>
              </div>
            </div>
          </article>
        </div>
        <div className="small">
          <article className="recipe side">
            <div className="pizza-box side1">
              <img src={cat} 
              // width={130} height={120} 
              alt="" />
            </div>
            <div className="recipe-content">
              <p className="recipe-tags">
                <span className="recipe-tag">Flutter developer</span>
                <span className="recipe-tag">Mern Expert</span>
              </p>
              <h1 className="recipe-title"><a href="#">Developer Name</a></h1>
              <p className="recipe-metadata">
                {/* <span className="recipe-rating">★★★★<span>☆</span></span> */}
                {/* <span className="recipe-votes">(12 votes)</span> */}
              </p>
              <p className="recipe-desc">Here we can tell about the developer</p>
              <button className="recipe-save" type="button">
                Contact Developer
              </button>
            </div>
          </article>
        </div>
        </div>
      
    </>
  )
}
