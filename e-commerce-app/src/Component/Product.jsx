import React from 'react'
import Records from '../product.json'
import { useNavigate } from 'react-router-dom';



export default function Products() {
    const navigate = useNavigate()

    
return(
    <>
    {Records.products.map(records=>{
        return(
            <div key={records.id} className='img_div'>
                
               <img onClick={()=>{navigate(`/productDetails/${records.id}`)}} src={records.thumbnail} alt={records.title}/> 
               {records.title} 
              
               <br/>
                    Price: ${records.price} <br/>
                    Discount: {records.discountPercentage} <br/>
                    Rating : {records.rating}
                                                                  
                                                        
             </div>
        )
    })}
    </>
)
}