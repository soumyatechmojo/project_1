import React from 'react'
import { useParams } from 'react-router-dom'
import Records from '../product.json'

export default function ProductDetails() {
    const id = useParams()
    const currProduct = Records.products.find(records=>records.id === parseInt(id.id))
    //console.log("This is ",id.id)
  return (
    <>
    
        
        <div className='img_div' key={currProduct.id}>
            <img src={currProduct.images[0]} alt="img"/>
            <img src={currProduct.images[1]} alt="img"/>
            <img src={currProduct.images[2]} alt="img"/>
           Title: {currProduct.title}
           <br/>
            Description: {currProduct.description}
            <br/>
            Price: {currProduct.price}
            <br/>
            Discount: {currProduct.discountPercentage}
            <br/>
            Rating: {currProduct.rating}
            <br/>
            Stock left: {currProduct.stock}
            <br/>
            Brand: {currProduct.brand}
            <br/>
            Category: {currProduct.category}
            
            
        
        </div>
        
    
    </>
  )
}