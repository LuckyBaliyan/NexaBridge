import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../context/AuthProvider';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../../utils/data';
import Button from '../Buttons/Mainbtn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { FaHandshake } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdNotificationsNone, MdChatBubbleOutline } from "react-icons/md";


const Nav = () => {
  const {role, logout, currentUser} = useAuth();
  const [opened,setOpened] = useState(false);
  const tl = useRef(null);
  const location  = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
    tl.current = gsap.timeline({ paused: true,reversed:true});

    tl.current
      .to(".mobile-links", {
        x: 0,
        ease: "power2.inOut",
        duration: 0.8,
    })

    return ()=> tl.current.kill();
  }, []);

  useEffect(()=>{
    if(opened){ 
        tl.current.play();
    }
    else{
        tl.current.reverse();
    }
  },[opened])

  return (
    <div>
        <nav>
            <div className='flex items-center justify-center gap-6'>
            <NavLink to='/'>
               <div className="content-wrapper relative flex items-center gap-1 md:gap-4 p-2">
                    <div className="logo-wrapper h-10 w-10 scale-90 md:scale-100 md:w-14 md:h-14 overflow-hidden  rounded-full">
                    <img src="/images/logof.jpg" alt="" />
                    </div>
                    <FaHandshake className='text-xl md:text-4xl absolute left-[40%] z-30 text-[var(--Accent)] opacity-100'/>
                    <div className="logo-wrapper h-10 w-10 scale-90  md:w-14 md:h-14
                    rounded-full overflow-hidden flex justify-center items-center">
                    <img src="/images/mainlogof.webp" alt="" />
                    </div>
               </div>
            </NavLink>
            <div className='md:ml-2 translate-x-[-20%] md:translate-x-0 flex flex-col '>
                <p className='text-xs p-1  lg:text-xl uppercase  leading-[1]  text-[var(--Highlight)] 
                md:p-2 font-[inter-black]  font-black
                rounded-full'>Punjab Government</p>
                <p className=' text-xs p-1 md:text-sm  leading-[0.1] font-extrabold text-gray-700 rounded md:p-2 uppercase'>
                    Nexa Bridge
                </p>
            </div>
            </div>
            <div className='links'>
            <NavLink to='/' className={({isActive})=>`text-[var(--Text)] ${isActive?'border-b-2 border-[var(--Accent)]':''}`} >
              <p>Home</p>
            </NavLink>
            {
                role &&
                navLinks[role].map(link=>(
                    <NavLink className={({isActive})=>`text-[var(--Text)] ${isActive?'border-b-2 border-[var(--Accent)]':''}`} 
                    key={link.to} to={`${link.to}`}>
                        <p>{link.label}</p>
                    </NavLink>
                ))
            }
            {
                ['About','Contact'].map((link,i)=>(
                    <NavLink className={({isActive})=>`text-[var(--Text)] ${isActive?'border-b-2 border-[var(--Accent)]':''}`}  
                    to={`/${link}`} key={i}>
                        <p>{link}</p>
                    </NavLink>
                ))
            }
            </div>
            <div className='mobile-links !bg-white'>
                <NavLink to='/'
                >
                    <p onClick={()=>setOpened(!opened)}>Home</p>
               </NavLink>
               {
                role &&
                navLinks[role].map(link=>(
                    <NavLink to={link.to} key={link.to}>
                        <p onClick={()=>setOpened(!opened)}>
                          {link.label} 
                        </p>
                    </NavLink>
                ))
            }
            {
               ['About','Contact'].map((link,i)=>(
                    <Link to={`/${link}`} key={i}>
                        <p onClick={()=>setOpened(!opened)}>{link}</p>
                    </Link>
                ))
            }
             {role?(
               <p onClick={logout}>Logout</p>
            ):(
                <>
                <Link to='/login' state={{currentState:'Login',from:location}}>
                    <p>Login</p>
                </Link>
                <Link to='/login' state={{currentState:'SignUp',from:location}}>
                   <p>SignUp</p>
                </Link>
                </>
            )}
            </div>
            {/* If logged in so user Profile btn*/}
            {currentUser && (
                <>
                <div className='flex gap-2 translate-x-[-50%] md:ml-auto md:translate-x-[100%] lg:translate-x-0 lg:ml-0'>
                <MdNotificationsNone  className='text-2xl md:text-3xl text-[var(--TextNav)] cursor-pointer'/>
                <MdChatBubbleOutline  className='text-2xl hidden md:block md:text-3xl text-[var(--TextNav)] cursor-pointer'/>
                </div>
                <div onClick={()=>navigate('/dashboard')} className='w-6 md:w-10 p-1 border-3 border-[var(--Text)] 
                cursor-pointer aspect-square overflow-hidden md:ml-auto translate-x-[-30%] md:translate-x-[-50%] lg:translate-x-[0%] 
                lg:absolute right-5 rounded-full'>
                    <img src={currentUser.img || '/images/user.png'} alt="" />
                </div>
                </>
            )}
            {/** Later add a profile pic on clicking we get to profile page */}
            <div className='scale-80 hidden -ml-8 sm:-ml-2 md:-ml-0 lg:flex md:gap-4 translate-x-[50%] sm:translate-x-[60%] lg:translate-x-0 lg:scale-100'>
            {!role &&(
                <>
                <Link to='/login' state={{currentState:'Login',from:location}}>
                    <Button text='login' className='ml-2 !rounded-full !font-black !text-black !shadow-none !border-0 
                    !bg-gray-200 btnSec'/>
                </Link>
                <Link to='/login' state={{currentState:'SignUp',from:location}}>
                   <Button text='SignUp' className='bg-[var(--Accent)] text-[#fff] hidden md:block' />
                </Link>
                </>
            )}
            </div>
            <div onClick={()=>setOpened(!opened)} className='lg:hidden bg-[var(--Accent)] mr-2 flex items-center justify-center w-10
            aspect-square p-2 rounded-full z-[60]'>
                <RxHamburgerMenu  className={`text-[#fff] absolute  text-sm transition-all ease-in-out duration-500
                    ${opened?'opacity-0':'opacity-100'}`}/>
                <RxCross2 className={`text-2xl text-[#fff]  transition-all ease-in-out duration-350 
                    ${opened?'opacity-100':'opacity-0'}`}
                />
            </div>
        </nav>
    </div>
  )
}

export default Nav;