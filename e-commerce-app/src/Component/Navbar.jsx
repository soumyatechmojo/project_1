import React from 'react'

const show = {
    color:"black", padding:"10px 20px", display:"flex", justifyContent:"space-between"
}

const Navbar = () => {
  return (
    <div style={{height:"60px",backgroundColor:"lightgray"}}>
       <div style={show}>
         <h3>Home</h3>
         <input type="text" style= {{ height:"20px",border:'bold', borderRadius:"10px"}} placeholder="Search"/>
       </div>
    </div>
  )
}

export default Navbar