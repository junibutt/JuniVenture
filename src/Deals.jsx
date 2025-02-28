import React from 'react';
import bali from './assets/bali.jpg'; 
import london from './assets/london.jpg';
import paris from './assets/paris.jpg';
import turkey from './assets/turkey.jpg';
import deals from './deals.json'; 

function DealsComponent() {
  const [dealsdata, setDealsData] = React.useState(deals);

  return (
    <div className="mt-20">
      <h1 className="font-bold text-3xl text-center mb-8">Recent Deals</h1>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:flex-row lg:gap-2 lg:justify-center md:px-2">
        {dealsdata.map((deal, index) => (
          <div 
            key={index} 
            className="max-w-sm w-full mx-auto shadow-lg rounded-lg md:w-1/2 lg:w-1/5 lg:mx-2 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                className="w-full h-48 object-cover"
                src={
                  deal.title === "Bali" ? bali :
                  deal.title === "London" ? london :
                  deal.title === "Paris" ? paris :
                  deal.title === "Turkey" ? turkey :
                  bali 
                }
                alt={deal.title}
              />
              
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                20% OFF
              </div>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-xl text-left mb-2">{deal.title}</h1> 
              <div className="flex justify-between font-medium text-lg mt-2">
                <p className="text-gray-700">Only {deal.daysLeft} days left</p>
                <p className="text-gray-900">${deal.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsComponent;
