import React from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";  
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Info() {
  return (
    <div className="bg-gray-200 p-8">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 md:justify-center"> {/* Allow wrapping on small screens */}
        
        <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r border-gray-400 pb-4 sm:pb-0 sm:pr-8">
          <FaMapMarkerAlt className="text-orange-500" />
          <div>
            <h1 className="text-orange-500">FIND US</h1>
            <p className="text-gray-500">London UK</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r border-gray-400 pb-4 sm:pb-0 sm:pr-8">
          <IoCallSharp className="text-orange-500" />
          <div>
            <h1 className="text-orange-500">CALL US</h1>
            <p className="text-gray-500">+44 20 12345678</p>
          </div>
        </div>

        <div className="flex items-center space-x-4  sm:pb-0 sm:pr-8">
          <MdEmail className="text-orange-500" />
          <div>
            <h1 className="text-orange-500">EMAIL US</h1>
            <p className="text-gray-500">Junaid@gmail.com</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Info;
