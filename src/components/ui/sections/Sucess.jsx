import React from 'react'
import Story from '../Cards/Story'
import NewsLetter from '../Boxes/NewsLetter';
import Mainbtn from '../Buttons/Mainbtn'
import { Link } from 'react-router-dom';

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
    <div className='flex relative mb-2'>
       <Link to='/sucessAlumni'>
          <Mainbtn text='view All' className='capitalize absolute right-1/3 md:right-2 -bottom-2 border-2 ml-auto'/>
       </Link>
    </div>
    <div>
        <h5 className='text-center'>Tell yours</h5>
    </div>
    <NewsLetter text={'submit'}/>
    </div>
  )
}

export default Sucess;