import React from 'react'

const ShowCard = ({Icon,heading,para,diff=false}) => {
  return (
    <div className={`relative ${diff?'featureCard':'showCard'}`}>
        <img src="/images/pin.png" alt="" className='absolute pin -top-5 -left-1 w-12 h-12 object-cover opacity-0
        transition' />
        <div className='flex items-center justify-center w-12 rounded-full
        aspect-square p-2 bg-[#fff]'><Icon className='text-2xl text-black' /></div>
        <h5>{heading}</h5>
        <p>{para}</p>
    </div>
  )
}

export default ShowCard