import React from 'react'
import { featuresData } from '../../../utils/data'
import ShowCard from '../Cards/ShowCard'
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <>
    <div className='flex flex-col space-y-6'>
        <h2 className='text-center tracking-tight'>Why Choose <br /> <p className='
        tracking-tight font-[inter-black] text-[var(--Accent)] text-5xl'>Nexa Bridge</p></h2>
        <p className='text-center capitalize'>Discover the powerful features that makes Nexa Bridge the ultimate 
            platform for <br /> alumni netwroking
        </p>
    </div>
    <div className='block md:hidden pt-4'>
    <p className=' text-[#000] font-black text-center'>
        Scroll <FaArrowRight className='inline ml-2' />
    </p>
    </div>
    <div className='snap-x snap-mandatory overflow-x-auto space-x-6 px-6 flex md:flex-wrap justify-between  
    md:space-x-0 md:px-16 py-6 md:overflow-x-hidden'>
        {
            featuresData.map(card=>(
                <ShowCard
                  key={card.id}
                  Icon={card.icon}
                  heading={card.heading}
                  para={card.para}
                  diff={true}
                  color={'#7660cc'}
                 />
            ))
        }
    </div>
    </>
  )
}

export default Features