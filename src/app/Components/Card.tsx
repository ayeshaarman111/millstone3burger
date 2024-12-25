
import React from "react";

const floatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="md:w-1/2 md:pr-10">
      <h2 className="text-3xl font-bold mb-4 text-white">
        Delicious Burger
      </h2>
      <p className="text-white mb-4">
        Sink your teeth into a mouthwatering burger.
      </p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-500 duration-200">
        Order Now
      </button>
  
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
        Coming Soon: Our Burger Launched
      </h3>
  
      <ul>
        <li>
          <strong>Sink your teeth into a mouthwatering burger</strong> Topped with melted cheese, crisp lettuce, ripe tomatoes, and a dollop of creamy sauce. Each bite is a burst of savory goodness.
        </li>
        <br />
        <li>
          <strong>Whether you prefer a classic combination</strong> or like to indulge in unique toppings this burger promises an unforgettable taste experience. Its not just a meal; its a treat for your senses.
        </li>
        <br />
      </ul>
    </div>
  
    {/* Image Section */}
    <div className="md:w-1/2 mt-6 md:mt-0">
      <img
        src="pic16.jpg"
        alt="Delicious burger"
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
    </div>
  </section>
  
  );
};

export default floatingImageContentBlock;
