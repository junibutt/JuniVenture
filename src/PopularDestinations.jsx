import React from 'react'
import austrailia from './assets/austrailia.jpg'
import pak from './assets/pak.jpg'
import bird from './assets/bird.jpg'
import strawberry from './assets/strawberry.jpg'
import swing from './assets/swing.jpg'

function PopularDestinations() {
  return (
    <div className='bg-gray-200 pb-10 lg:pb-22'>
      <h1 className=' p-2 font-bold text-center text-3xl pb-7 pt-10 lg:pb-0'>Popular Destinations</h1>
      <div className='container p-2  lg:p-20 md:mx-auto'>
      <div className='flex gap-2 pb-2'>
        <div className='w-[70%] relative'><img className='w-full h-[300px] rounded-3xl relative lg:h-[500px]' src={austrailia}></img>
        <div className='absolute top-13 left-3'>
              <span className='text-white text-xl font-bold font-sans lg:text-4xl'>Explore <br/>Australia</span>
            </div>
        </div>
        <div className='w-[30%] relative'><img className=' w-full h-[300px] rounded-3xl lg:h-[500px]' src={pak}></img>
        <div className='absolute top-13 left-3'>
              <span className='text-white text-xl font-bold font-sans lg:text-4xl'>Discover <br/>Pakistan</span>
            </div></div>
      </div>
      <div className='flex gap-2'>
        <div className='w-1/3 relative'><img className='w-full h-[220px] object-cover rounded-3xl lg:h-[300px]' src={bird}></img>
        <div className='absolute top-5 left-3'>
              <span className='text-white text-xl font-bold font-sans lg:text-4xl'>Uncover <br/>Peru</span>
            </div>
        </div>
        <div className='w-1/3 relative'><img className='w-full h-[220px] object-cover rounded-3xl lg:h-[300px]' src={strawberry}></img>
        <div className='absolute top-5 left-3'>
              <span className='text-white text-xl font-bold font-sans lg:text-4xl'>Paradise <br/>Bali</span>
            </div></div>
        <div className='w-1/3 relative'><img className='w-full h-[220px] object-cover rounded-3xl lg:h-[300px]' src={swing}></img>
        <div className='absolute top-5 left-3'>
              <span className='text-white text-xl font-bold font-sans lg:text-4xl'>Adventure <br/>HAWAII</span>
            </div></div>
      </div>
      </div>
    </div>
  )
}

export default PopularDestinations
