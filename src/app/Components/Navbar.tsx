import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1 '>
        <div className='p-5'>
        <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700'>

        <div className='flex justify-between items-center'>

        <div className='flex justify-items-center items-center gap-2'>

            <h1 className='w-6 h-6 text-yellow-400 hover:text-cyan-300'>
            <FaHamburger />


            </h1>
            <div style={{position:"relative"}}>
                <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block '
                placeholder="Search for your Burger" />
                <h1 className='w-5 h-5 text-black-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block '> <FaSearch /></h1>
               
                
            </div>


        </div>

        <div className='flex justify-center items-center gap-2'>
            <h1 className=' w-5 h-5 text-amber-400 hidden lg:block md:block'><FaBolt /></h1>
            <p className='text-sm text-white hidden lg:block md:block'>Order Now</p>
            <span className='text-amber-400'>15 minute</span>
        
       

        
            <h1 className=' w-8 h-8 rounded-full text-2xl relative hover:text-amber-400 text-sky-400'><FaShoppingCart /></h1>
        
        <img src="/pic1.jpg" alt=""  className='inline-block w-8 h-8 rounded-full ring-2 relative hover:text-amber-400'/>
        </div> 

        </div>
        
        </div>
        
        </div>
       
        
      </div>

 </div>
  )
}

export default Navbar
