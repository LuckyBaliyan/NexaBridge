import React from 'react'
import EventBox from '../Boxes/EventBoxes';
import Mainbtn from '../Buttons/Mainbtn';

const Events = () => {
  return (
    <div className='px-4 py-6'>
       <div>
           <h2 className='text-center'>Latest <span>Updates</span></h2>
       </div>
       <div className='relative'>
        <EventBox />
        <Mainbtn text='View All' className='absolute right-0 bottom-0 mb-2 mr-4 border-2'/>
       </div>
       <div className='flex mt-4 flex-col gap-4 px-4'>
          <div className="img-wrapper relative w-full h-[80vh] overflow-hidden rounded">
            <img src="/images/d.jpg" alt="" />
            <div className='absolute top-0 right-0 w-36 aspect-square rounded-bl-4xl z-20 border-b-10 border-l-10 border-white'></div>
            <h2 className='absolute bottom-5 left-5 z-20 text-white mix-blend-difference'>Support Our Vision</h2>
          </div>
          <div className='w-[75%]'>
            <p className='text-black font-bold text-2xl leading-[0.9]'>
                Your contribution directly fuels the advancement of our collaborative projects, 
                fostering innovation and creating opportunities for students and alumni alike. 
                Every donation, regardless of size, plays a vital role in shaping the future of our 
                community and its impact on the world.
            </p>
          </div>
          <div>
            <Mainbtn text='contribute' className='bg-[var(--Accent)] text-white'/>
          </div>
       </div> 
    </div>
  )
}

export default Events;