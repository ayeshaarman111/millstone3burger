'use client';  // Add this line to make this a Client Component

import React from 'react';

type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
  const Offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "5PM TO 7PM Discount On All Our Deals"
    },
    {
      title: "Family Meal",
      description: "5PM TO 7PM Discount On All Our Deals"
    },
    {
      title: "Mid Night",
      description: "12AM TO 4AM Discount On All Our Deals"
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto text-center '>
      <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Offers.map((offer, index) => (
        <button key={index}
        onClick={() => handleOfferClick(offer.description)}
        className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition'>
          <h3 className='text-2xl font-semibold text-red-700'>
          {offer.title}

          </h3>
          <p className='text-slate-700 mt-3'>{offer.description}</p>


        </button>

      ))}
      </div>
      </div>
    </section>
  );
} 

export default SpecialOffers
