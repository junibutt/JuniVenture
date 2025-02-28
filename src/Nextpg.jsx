import React from 'react'
import banner from './assets/banner.jpg'
import bannerx from './assets/bannerxx.png'

function Nextpg() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex flex-col items-start justify-center h-full pl-2 lg:pl-5 relative">
        <h1 className="text-white text-3xl font-serif mb-2 font-extrabold">
          <strong className='lg:text-5xl'>SIGN UP & SAVE</strong>
        </h1>
        <h1 className="text-white text-xl font-sans font-bold lg:text-3xl">Your Source For</h1>
        <h1 className="text-white text-xl font-sans font-bold lg:text-3xl">The Top Deals</h1>
        <h1 className="text-white text-xl font-sans font-bold lg:text-3xl">From The World Best's</h1>
        <h1 className="text-white text-xl font-sans font-bold lg:text-3xl">ADVENTURE</h1>

        
        <div className="absolute top-37 right-4 transform -translate-x-1 ">
          <img className="w-100 rounded-3xl hidden  xl:block" src={bannerx} alt="Bannerx" />
        </div>
      </div>
    </div>
  )
}

export default Nextpg
