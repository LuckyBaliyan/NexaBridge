import React,{useEffect,useRef} from 'react'
import Button from '../Buttons/Mainbtn';
import { Link } from 'react-router-dom';


const Hero = () => {

  return (
    <div className='relative w-full h-screen hero'>
        <div className="date-wrapper flex justify-between py-25">
          <div className="heading-wrapper pr-0 items-center lg:p-4 lg:items-start flex flex-col gap-12 md:gap-20 lg:gap-6">
            <h1 className='leading-[0.9] text-start tracking-tighter'>Welcome To <br /> Nexa Bridge</h1>
            <p className='text-sm px-2  text-center lg:text-start md:text-base w-[100%] lg:w-[50%] lg:pl-2 leading-[1]'>Connect with your alumni network like never before. 
              NexaBridge offers a comprehensive platform to foster engagement, 
              mentorship, and career opportunities for your institution's graduates.
            </p>
            <div className="img-wrapper w-[36vh] h-[24vh] self-center  lg:hidden block">
            <img src="/images/hero.webp" alt=""/>
            </div>
           <div className='flex gap-2 px-0'>
           <Link to='/login' state={{currentState:'SignUp'}}>
              <Button text='SignUp' className='bg-[var(--Accent)]
            text-white !py-3 !px-12 !rounded-full'/>
            </Link>
            <Button text='Request A Demo' className="ml-2 border border-gray-300 
            text-gray-700 py-3 px-6 rounded-md"/>
           </div>
          </div>
          <div className="img-wrapper hidden md:relative lg:block pr-20">
            <img src="/images/hero.webp" alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Hero;