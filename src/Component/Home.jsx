import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
     <div className="mainhome h-[86.2vh] bg-black w-full flex justify-center items-center">
        <div className="contain flex flex-col items-center">
            <h1 className='text-[50px] font-bold'>Check Our Products</h1>
            <Link to="/Product"><button id='btn1' className='w-[150px] h-[40px] border-[2px] border-black font-bold rounded-lg'>Products</button></Link>
        </div>
        </div> 
    </>
  )
}

export default Home
