import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function HeaderContent() {
  return (
    <div className='flex flex-col  text-center mt-47 text-white gap-3 lg:gap-5 items-center'>
      <div className='text-white text-xl lg:text-2xl'><strong className='font-extrabold'>UP TO 60% OFF</strong> ADVENTURE TRAVEL</div>
      <div className='font-bold lg:text-2xl'>JOIN OVER 40,000 MEMBERS</div>
      <div className='font-bold lg:text-2xl p-2'>Get exclussive excess to members only deals on amazing adventure holidays by e-mail. It's free </div>
      <div className="flex items-center justify-center  mx-auto bg-white rounded-3xl h-12 ">
        <MdOutlineEmail className="text-black ml-4" />
        <input
          className='text-black  w-[210px] px-2 rounded-3xl focus:outline-none sm:w-[210px] md:w-[300px] lg:w-[380px] '
          type='email'
          placeholder='Enter Your E-Mail Please!'
          
        />
        <button className='text-black w-35 bg-yellow-300 p-3 rounded-3xl text-[13px] mr-2 font-bold'>Subscribe</button>
      </div>
    </div>
  )
}

export default HeaderContent
