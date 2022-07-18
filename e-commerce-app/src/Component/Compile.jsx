import React from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import Products from './Product'
export default function Compile() {
  return (
    <>
      <Navbar/>
      <Filter/>
      <Products/>
    </>
  )
}