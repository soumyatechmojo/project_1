import React from 'react'
import Records from '../product.json'

export default function Products() {
return(
    <>
    {Records.products.map(records=>{
        return(
            <div className='img_div'>
               <img  src={records.thumbnail} alt={records.title}/> {records.title} <br/>
                                                                   Price: ${records.price} <br/>
                                                                   Discount: {records.discountPercentage} <br/>
                                                                   Rating : {records.rating}
             </div>
        )
    })}
    </>
)
}