import React from 'react'

const Testimonals = () => {
  return (
    <section className="container mx-auto py-10 px-4 bg-gradient-to-r from-black to-gray-800">
    <h2 className="text-3xl font-bold text-center text-white mb-6">
      What Our Customers Say
    </h2>
  
    {/* Customer Feedback Container */}
    <div className="flex flex-wrap justify-center gap-8">
  
      {/* Customer 1 */}
      <div className="bg-amber-500 p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <img
            src="jhon.jpg" // Replace with actual customer image
            alt="Customer 1"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Food Lover</p>
          </div>
        </div>
        <p className="text-gray-800 text-base">
          The burger was absolutely amazing The combination of fresh ingredients and the juicy patty made it the best burger Ive ever had. Highly recommended
        </p>
      </div>
  
      {/* Customer 2 */}
      <div className="bg-teal-500 p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <img
            src="sara.png" // Replace with actual customer image
            alt="Customer 2"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Sarah Lee</h3>
            <p className="text-sm text-gray-500">Burger Enthusiast</p>
          </div>
        </div>
        <p className="text-gray-800 text-base">
          A true masterpiece! The flavors were perfectly balanced and the burger was cooked to perfection. Cant wait to order again
        </p>
      </div>
  
      {/* Customer 3 */}
      <div className="bg-amber-500 p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <img
            src="alex.jpg" // Replace with actual customer image
            alt="Customer 3"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Alex Smith</h3>
            <p className="text-sm text-gray-500">Burger Critic</p>
          </div>
        </div>
        <p className="text-gray-800 text-base">
          I cant get enough of this burger The combination of flavors the texture and the freshness really make it stand out from the rest. Definitely a go to spot for burger lovers
        </p>
      </div>
  
    </div>
  </section>
  
  )
}

export default Testimonals
