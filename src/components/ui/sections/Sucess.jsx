import React from 'react'
import Story from '../Cards/Story'
import NewsLetter from '../Boxes/NewsLetter';
import Mainbtn from '../Buttons/Mainbtn'

const Sucess = () => {
  return (
    <div className='py-12 px-4'>
    <div>
        <h2 className='text-center'>
           From Campus to <span>Career</span>
        </h2>
    </div>
    <div className="marquee">
        <Story />
    </div>
    <div className='flex mb-2'>
        <Mainbtn text='view All' className='capitalize border-2 ml-auto'/>
    </div>
    <div>
        <h5 className='text-center'>Tell yours</h5>
    </div>
    <NewsLetter text={'submit'}/>
    </div>
  )
}

export default Sucess;