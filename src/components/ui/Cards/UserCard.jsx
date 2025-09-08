import React from 'react'
import { Link } from 'react-router-dom'
import Mainbtn from '../Buttons/Mainbtn'

const UserCard = ({id,src,heading,para,btn}) => {
  return (
    <div className='card'>
        <div className="img-wrapper h-auto w-full overflow-hidden">
            <img src={`${src?src:'/images/user2.jpg'}`} alt="" className='w-full h-full object-cover' />
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
           <Link to={`/alumni/${id}`}>
             <Mainbtn text={btn} className='bg-gray-800 mb-2 text-white !rounded'/>
           </Link>
        </div>
    </div>
  )
}

export default UserCard