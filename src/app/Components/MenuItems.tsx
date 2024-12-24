import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  // Example product images array, you can add actual image URLs
  const productImages = [
    '/pic2.jpg', // Replace with actual product image URLs
    '/pic9.avif',
    '/pic11.jpg',
    '/pic15.jpg',
    '/pic13.webp',
    '/pic8.jpg',
    '/pic12.jpg',
    '/pic2.jpg',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {productImages.map((image, index) => (
        <div key={index} className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <img
            src={image}
            alt={`Product ${index + 1}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product {index + 1}</h3>
            <p className="text-gray-500">Sink your teeth into a  mouthwatering burger </p>
            <p className="text-lg font-bold text-yellow-500">$19.99</p>
            <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
            <FaShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardGrid;

