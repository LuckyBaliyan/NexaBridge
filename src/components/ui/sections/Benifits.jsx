import React from 'react'
import { showCards } from '../../../utils/data'
import ShowCard from '../Cards/ShowCard'

const Benifits = () => {
  return (
    <>
    <div className='w-full p-4 text-center flex flex-row space-x-4 items-center justify-center'>
        <h2>Key Benifits</h2>
        <img src="/images/star.png" alt="" className='w-10 mb-2 md:w-20 aspect-square object-cover' />
    </div>
    <div className='w-full text-center'>
        <p>NexaBridge provides a suite of tools designed to enhance alumni relations <br />
            and support their ongoing success.
        </p>
    </div>
    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 lg:space-y-0 items-center 
    px-6 space-y-6 py-8 lg:px-16 perspective-distant">
        {showCards.map(card=>(
           <ShowCard key={card.id}
           Icon={card.icon}
           heading={card.heading}
           para={card.para}
           />
        ))}
    </div>
    </>
  )
}

export default Benifits