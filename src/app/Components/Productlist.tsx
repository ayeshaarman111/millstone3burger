import React from "react";

const Products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "fixing",
    price: "800.00",
    imageUrl: "/pic10.jpg", // Corrected image path
    bgcolor: "bg-amber-500" // Background color
  },
  {
    id: 2,
    title: "Jambo Burger",
    category: "fixing",
    price: "1500.00",
    imageUrl: "/pic3.jpg", // Corrected image path
    bgcolor: "bg-teal-500" // Background color
  },
  {
    id: 3, // Fixed duplicate id issue
    title: "Kids Favorite",
    category: "delight",
    price: "900.00",
    imageUrl: "/pic4.jpg", // Corrected image path
    bgcolor: "bg-amber-500" // Background color
  },
];

export default function Productlist() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center gap-6 mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col relative max-w-xs w-full ${product.bgcolor}  rounded-lg shadow-lg overflow-hidden transform transition-transform group hover:scale-105`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-6 px-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="absolute w-32 h-32 bottom-0 left-0 -mb-20 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="w-32 h-32 object-cover rounded-lg"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-gray-900 px-6 pb-6 mt-4">
            <span className="block opacity-75 text-sm">{product.category}</span>

            <div className="flex justify-between items-center mt-2">
              <span className="block font-semibold text-lg">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-1 leading-none">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
