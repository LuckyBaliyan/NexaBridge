import React from 'react'

const ShowCard = ({Icon,heading,para}) => {
  return (
    <div className='showCard relative'>
        <img src="/images/pin.png" alt="" className='absolute pin -top-5 -left-1 w-12 h-12 object-cover opacity-0
        transition' />
        <div className='flex items-center justify-center w-12 bg-white border-2 border-[var(--Accent)] rounded-full
        aspect-square p-2'><Icon className='text-2xl text-[var(--Accent)]' /></div>
        <h5>{heading}</h5>
        <p>{para}</p>
    </div>
  )
}

export default ShowCard