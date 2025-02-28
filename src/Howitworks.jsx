import React from 'react';
import adventures from './assets/adventures.webp';
import deals from './assets/deals.jpg';
import trips from './assets/trip1.jpg';
import howwork from './howworks.json';

function Howitworks() {
  return (
    <div className="mt-15 bg-gray-200 p-2">
      <h1 className="font-bold text-3xl text-center mb-8">How It Works</h1>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:flex-row lg:gap-2 lg:justify-center md:px-2">
        {howwork.map((item, index) => (
          <div 
            key={index} 
            className="max-w-sm w-full mx-auto shadow-lg rounded-lg md:w-1/2 lg:w-1/5 lg:mx-2 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                className="w-full h-[300px] object-cover"
                src={
                  item.title === "Handpicked Adventures" ? adventures :
                  item.title === "Exclusive Deals" ? deals :
                  item.title === "Trips That Match Your Request" ? trips :
                  adventures 
                }
                alt={item.title}
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-xl text-left mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Howitworks;
