import React, { useState, useEffect } from "react";
import getStripe from "../../getStripe";
export default function DeveloperDashboard() {
    const [product,setProduct] = useState();
    const [url,setUrl] = useState();
    const [productPrice,setProductPrice] = useState();

    const handlePriceChange = (e) => {
        setProductPrice(Number(e.target.value));
    }

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    }
    const handleCheckout = async () => {

        // const stripe = await getStripe();
        // const price = await stripe.prices.create({
        // currency: 'inr',
        // unit_amount: productPrice,
        // product: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
        // });
        fetch(`http://localhost:3003/payment?productPrice=${productPrice}&product=${product}`).then((res)=>res.json()).then((res2)=>setUrl(res2.paymentLink));
        // const paymentLink = await stripe.paymentLinks.create({
        //     line_items: [
        //       {
        //         price: price,
        //         quantity: 1,
        //       },
        //     ],
        //   });
        // setUrl(paymentLink.url);
    }
    return (
        <>
        <div>
        Product: < input type="text" onChange={handleProductChange} required style={{border:'1px solid black'}}/>
           Price:  <input type="number" onChange={handlePriceChange} required style={{border:'1px solid black'}} />
            <button onClick={handleCheckout}>Get Payment Link</button>
            <p>{url}</p>
        </div>
        </>
    )
}