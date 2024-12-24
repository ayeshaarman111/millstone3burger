import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7  '>
      <div className='absolute inset-0 opacity-20'>
        <img src="/pic1.jpg" 
        alt="burger" 
        className='w-full
        h-full object-cover'  />

      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        
      <h1 className='text-white sm:text-5xl font-bold mb-4'>
      Discover Our Menu

      </h1>
      <p className='text-white text-lg text-center mb-6 max-w-xl '>
        Shop Now For Exclusive Discount
      </p>

      <button 
      type='button'
      className='bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300'>
        Exciting Deal Launch at 12PM
        
      </button>
      </div>
    </div>
  )
}

export default Banner
