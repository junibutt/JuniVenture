import React from 'react';
import { FaPaypal, FaCcVisa  } from 'react-icons/fa';
import { FaCcAmazonPay } from "react-icons/fa6";


function Footer() {
  return (
    <div>
      <hr className="border-t-2 border-gray-300 font-bold" />
      <div className="bg-white py-4">
        <div className="text-sm text-gray-500 text-center md:text-lg lg:text-lg">
          <span className="px-2 cursor-pointer">Home</span> | 
          <span className="px-2 cursor-pointer">This Week Deals</span> | 
          <span className="px-2 cursor-pointer">LogIn</span> | 
          <span className="px-2 cursor-pointer">Term Of Use</span> | 
          <span className="px-2 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 px-5 py-5 font-bold " />
      <p className='text-center text-gray-500 text-sm md:text-lg lg:text-lg'>
        Juni Venture - Travel the World is a travel-focused platform designed to inspire and assist people in exploring new destinations around the globe. With a user-friendly interface, the website offers curated travel experiences, exclusive deals, and helpful resources for globetrotters. Whether you’re looking for the best travel packages, tips, or guides, Juni Venture provides everything you need to plan the perfect trip
      </p>
      <div className="flex justify-between items-center text-gray-500 mt-5 p-2 md:p-3 lg:p-5">
        <div className="text-lg md:text-xl lg:text-2xl">
          <strong>Juni</strong>Venture
        </div>

        <div className="text-sm text-center md:text-lg lg:text-xl">
          <p>©2025 JuniVenture. All rights reserved.</p>
        </div>

        <div className="flex space-x-2 text-gray-500 md:text-lg lg:text-xl">
          <FaPaypal size={24} />
          <FaCcVisa size={24} />
          <FaCcAmazonPay size={24} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
