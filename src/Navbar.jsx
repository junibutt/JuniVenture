import React from 'react'
import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <header className='pl-2 pt-5 text-white'>
    <nav className='text-white flex items-center justify-between gap-10'>
      <a className='font-bold text-lg pl-2 md:text-3xl lg:text-3xl' href=''>JuniVenture</a>

      <div className='flex items-center font-bold gap-5 pr-9   lg:gap-14 md:text-xl lg:text-2xl '>
      <h1 className='whitespace-nowrap cursor-pointer'>This Week's Deals</h1>
      <button className='bg-transparent border-2 border-transparent cursor-pointer'>LogIn</button>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
