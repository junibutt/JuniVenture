import React from 'react'
import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <header className='p-7 text-white'>
    <nav className='text-white   flex items-center justify-between gap-10'>
      <a className='font-bold text-3xl sm:text-xl' href=''>JuniVenture</a>

      <div className='flex items-center font-bold text-xl gap-5 sm:gap-5  lg:gap-14 '>
      <h1 className='whitespace-nowrap cursor-pointer'>This Week's Deals</h1>
      <button className='bg-transparent border-2 border-transparent cursor-pointer'>LogIn</button>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
