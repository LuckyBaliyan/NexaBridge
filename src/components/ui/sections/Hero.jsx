import React,{useEffect,useRef} from 'react'
import Button from '../Buttons/Mainbtn';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";
import { useAuth } from '../../../context/AuthProvider';

const Hero = () => {

  const {role} = useAuth();

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
            <img src="/images/hero2.webp" alt="" className='rounded'/>
            </div>
           <div className='flex gap-2 px-0 flex-wrap items-center justify-center'>
              {role ? (
              // if already loged in then navigate to the dashboard
              <Link to='/dashboard'>
                <button className='button bg-[var(--Accent)]
                  text-white !py-3 !px-9 !rounded-full cursor-pointer flex items-center justify-between gap-2'>
                  Explore Platform <FaLocationArrow className='text-lg'/>
                </button>
              </Link>
            ) : (
              // Not Logged In → Show Get Started and navigate to login with state signUp
              <Link to='/login' state={{ currentState: 'SignUp' }}>
                <button className='button bg-[var(--Accent)]
                  text-white !py-3 !px-9 !rounded-full cursor-pointer flex items-center justify-between gap-2'>
                  Get Started <FaLocationArrow className='text-lg'/>
                </button>
              </Link>
            )}
            <Button text='Request A Demo' className="ml-0 border btnSec"/>
           </div>
          </div>
          <div className="img-wrapper hidden md:relative lg:block pr-20">
            <img src="/images/hero2.webp" alt="" className='rounded-md'/>
          </div>
        </div>
    </div>
  )
}

export default Hero;