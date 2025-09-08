import React from 'react'
import { Link } from 'react-router-dom'
import Mainbtn from '../Buttons/Mainbtn'

const UserCard = ({src,heading,para,btn}) => {
  return (
    <div className='card'>
        <div className="img-wrapper h-auto w-full overflow-hidden">
            <img src={`${src?src:'/images/user.png'}`} alt="" className='w-full h-full object-cover' />
        </div>
        <div>
            <h5>
                {heading}
            </h5>
        </div>
        <div>
            <p>
                {para}
            </p>
        </div>
        <div>
           <Link to={`/alumni/${heading.replace(/\s+/g, '-').toLowerCase()}`}>
             <Mainbtn text={btn} className='bg-[#121212] mb-2 text-white !rounded'/>
           </Link>
        </div>
    </div>
  )
}

export default UserCard