import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-10">
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
      <footer className='flex flex-col space-y-10 justify-center'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium'>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Home</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>About</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Delivery</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Contact</a>
        </nav>
  
        <div className='flex justify-center space-x-5 transition-transform duration-300 ease-in-out transform hover:scale-105'>
          <a href="https://facebook.com" target='_blank' rel='nofollow noopenner' aria-label="Facebook" className='text-2xl'>
            <FaFacebook  />
          </a>
  
          <a href="https://Instagram.com" target='_blank' rel='nofollow noopenner' aria-label="Instagram" className='text-2xl'>
            <GrInstagram  />
          </a>
  
          <a href="https://Linkedin.com" target='_blank' rel='nofollow noopenner' aria-label="LinkedIn" className='text-2xl'>
            <FaLinkedin />
          </a>
  
          <a href="https://whatsapp.com" target='_blank' rel='nofollow noopenner' aria-label="WhatsApp" className='text-2xl'>
            <FaWhatsappSquare  />
          </a>
        </div>
  
        <p className='text-center hover:text-cyan-600 text-amber-400 font-medium mb-8'>
          2024 Ayesha Arman All Rights Reserved
        </p>
      </footer>
    </div>
  </div>
  
  
  )
}

export default Footer
