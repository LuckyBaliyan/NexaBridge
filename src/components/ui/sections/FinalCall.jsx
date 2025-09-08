import React from 'react'
import Mainbtn from '../Buttons/Mainbtn'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider'

const FinalCall = () => {
    const {role} = useAuth();

  return (
    <div className='absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 
    flex flex-col items-center gap-4'>
        <h2 className='text-center'>Ready to <span>Connect ?</span></h2>
        <p className='text-center capitalize font-bold'>SignUp Today and Start building your future</p>
       {
        role ? (
        <Link to='/' state={{currentState:'SignUP'}}>
          <Mainbtn text={'Explore our Community'} className='bg-[var(--Accent)] text-white'/>
        </Link>
        )
        :
        (<Link to='/login'>
          <Mainbtn text={'Join our Community'} className='bg-[var(--Accent)] text-white'/>
        </Link>
        )
       }
    </div>
  )
}

export default FinalCall