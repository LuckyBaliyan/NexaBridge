import React from 'react'
import { storiesData } from '../../utils/data'
import UserCard from '../../components/ui/Cards/UserCard'

const SucessAlumni = () => {
  return (
    <div className='px-4 py-16 md:py-24 lg:py-36 w-full min-h-screen'>
        <h2 className='text-center lg:text-start'>All Stories</h2>
        <div className='grid-cols-auto gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 grid lg:gap-8 py-12'>
            {storiesData.map((card,index)=>(
                card.img && (
                <UserCard 
                key={index}
                src={card.img}
                heading={card.heading}
                para={card.story}
                btn={"View More"}
                />
                )
            ))}
        </div>
        <p className='text-end text-black font-bold border-b-2'>And More to accumplish.</p>
    </div>
  )
}

export default SucessAlumni