import React from 'react'
import Story from '../Cards/Story'
import NewsLetter from '../Boxes/NewsLetter';

const Sucess = () => {
  return (
    <div className='py-12 px-4'>
    <div>
        <h2 className='text-center'>
           From Campus to Career
        </h2>
    </div>
    <div className="marquee">
        <Story />
    </div>
    <div>
        <h5 className='text-center'>Tell yours</h5>
    </div>
    <NewsLetter text={'submit'}/>
    </div>
  )
}

export default Sucess;