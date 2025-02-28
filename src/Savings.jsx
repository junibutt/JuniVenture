import React from 'react';
import boat from './assets/boat.jpg';

function Savings() {
  return (
    <div
      className="w-full h-70 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${boat})` }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50"
      ></div>
      <h1 className='text-2xl relative z-10 text-center pt-8 text-white font-bold lg:pb-4'>Huge Saving Across 7 Continents</h1>

      <div className='container flex  pt-4 overflow-hidden'> {/* Use flex layout */}
        <div className='flex-shrink-0 w-1/3 flex flex-col items-center justify-center'> {/* Set width and prevent shrinking */}
          <h1 className='relative z-10 font-bold text-white pb-3 text-center whitespace-nowrap md:text-xl lg:text-2xl'>• Early Bird Deals</h1>
          <p className='relative z-10 text-white font-bold text-sm text-center md:text-xl lg:text-2xl'>Save big on your<br/> next adventure with<br/> early bird deals!</p>
        </div>
        <div className='flex-shrink-0 w-1/3 flex flex-col items-center justify-center '> {/* Set width and prevent shrinking */}
          <h1 className='relative z-10  font-bold text-white pb-3 text-center whitespace-nowrap md:text-xl lg:text-2xl'>• 2 For 1 Deals</h1>
          <p className='relative z-10 text-white text-sm font-bold text-center md:text-xl lg:text-2xl'>Exciting offer to <br/>save money on<br/> single deal!</p>
        </div>
        <div className='flex-shrink-0 w-1/3 flex flex-col items-center justify-center'> {/* Set width and prevent shrinking */}
          <h1 className='relative z-10  font-bold text-white pb-3 text-center whitespace-nowrap md:text-xl lg:text-2xl'>• Exclusive Deals</h1>
          <p className='relative z-10 text-white text-sm font-bold text-center md:text-xl lg:text-2xl'>Exciting offer to <br/>more money on<br/> single deal!</p>
        </div>
      </div>
    </div>
  );
}

export default Savings;