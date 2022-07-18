import React from 'react'

export default function Filter() {
  return (
    <>
    <h4>Sort By:</h4>
       <h8>Select Brand :</h8>
         <select style={{width:"200px",height:"20px", borderRadius:"10px"}}>
            <option  disabled selected>
             select
            </option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Oppo</option>
            <option>Vivo</option>
            <option>real-me</option>
            <option>Poco</option>
         </select>


         <h8>Price :</h8>
         <select style={{width:"200px",height:"20px", borderRadius:"10px"}}>
            <option  disabled selected>
             select
            </option>
            <option>Between 0 to 1000</option>
            <option>Between 1000 to 5000</option>
            <option>Between 5000 to 10000</option>
            <option>Above 10000</option>
            
         </select>
         <br/>
         <h8>Category :</h8>
         <select style={{width:"200px",height:"20px", borderRadius:"10px"}}>
            <option  disabled selected>
             select
            </option>
            <option>smartphones</option>
            <option>laptops</option>
            <option>fragrances</option>
            <option>skincare</option>
            <option>groceries</option>
            <option>home-decoration</option>
         </select>
         
    </>
  )
}