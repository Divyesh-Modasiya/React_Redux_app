import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className="main w-full h-[80px] bg-black flex">
        <div className="logo w-[20%] h-full text-white flex justify-center items-center">
            <Link to="/"><h1 className='text-[40px] font-bold'>Wall-Mart</h1></Link>
        </div>
        <div className="navlink w-[80%] h-full text-white text-[20px] flex justify-evenly items-center">
        <Link to="/Product">Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </div>
        </div> 
    </>
  )
}

export default Navbar
