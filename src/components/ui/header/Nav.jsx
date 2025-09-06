import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../../utils/data';
import Button from '../Buttons/Mainbtn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { MdShield } from "react-icons/md";


const Nav = () => {
  const {role, logout} = useAuth();
  const [opened,setOpened] = useState(false);
  const tl = useRef(null);

    useEffect(() => {
    tl.current = gsap.timeline({ paused: true,reversed:true});

    tl.current
      .to(".mobile-links", {
        x: 0,
        ease: "power2.inOut",
        duration: 0.8,
      })
      .to(".mask-para", {
        opacity:1,
        ease: "power2.inOut",
        duration: 0.6,
        stagger: 0.1, 
      }, "-=0.5");
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
               <div className="content-wrapper flex items-center gap-1 md:gap-4 p-2">
                    <div className="logo-wrapper border-2 border-[var(--Accent)] z-[20] h-8 w-8 scale-90 md:scale-100 md:w-12 md:h-12  rounded-full overflow-hidden flex justify-center items-center ">
                    <img src="/images/logo.svg" alt="" />
                    </div>
                    <div className="logo-wrapper absolute top-2 left-6 md:top-4 md:left-10 h-8 w-8 scale-90 md:scale-100 md:w-12 md:h-12  
                    rounded-full overflow-hidden flex justify-center items-center 
                    bg-gray-100 border-2">
                    <img src="/images/mainLogo.png" alt="" />
                    </div>
               </div>
            </NavLink>
            <div className='md:ml-6 flex flex-col gap-0'>
                <p className='text-[12px] md:text-sm leading-[0.75] font-bold text-black rounded p-1'>Punjab Govt Initaitive</p>
                <p className='text-[12px] md:text-sm leading-[0.75] font-extrabold text-black rounded p-1 uppercase'>Nexa Bridge</p>
            </div>
            </div>
            <div className='links'>
            {
                role &&
                navLinks[role].map(link=>(
                    <NavLink className={({isActive})=>`text-[var(--Text)] ${isActive?'text-white':''}`} key={link.to} to={`${link.to}`}>
                        <p>{link.label}</p>
                    </NavLink>
                ))
            }
            </div>
            <div className='mobile-links'>
                <NavLink to='/'
                >
                    <p className='mask-para opacity-0'>Home</p>
               </NavLink>
               {
                role &&
                navLinks[role].map(link=>(
                    <NavLink to={link.to} key={link.to}>
                        <p className='mask-para opacity-0'>
                          {link.label} 
                        </p>
                    </NavLink>
                ))
            }
            </div>
            {/** Later add a profile pic on clicking we get to profile page */}
            <div className='scale-80 -ml-10 md:-ml-0 md:flex md:gap-4 translate-x-[50%] sm:translate-x-[60%] md:translate-x-0 md:scale-100'>
            {role?(
                <Button text='logout' onClick={logout} className='bg-[var(--Accent)] text-white'/>
            ):(
                <>
                <Link to='/login' state={{currentState:'Login'}}>
                    <Button text='login' className='bg-gray-300 text-black'/>
                </Link>
                <Link to='/login' state={{currentState:'SignUp'}}>
                   <Button text='SignUp' className='bg-[var(--Accent)] text-[#fff] hidden md:block' />
                </Link>
                </>
            )}
            </div>
            <div onClick={()=>setOpened(!opened)} className='md:hidden bg-[var(--BackgroundPrimary)] flex items-center justify-center w-10 scale-80
            aspect-square p-2 rounded-full z-[60]'>
                <RxHamburgerMenu  className={`text-[var(--Accent)] absolute  text-sm transition-all ease-in-out duration-500
                    ${opened?'opacity-0':'opacity-100'}`}/>
                <RxCross2 className={`text-2xl text-[var(--Accent)]  transition-all ease-in-out duration-350 
                    ${opened?'opacity-100':'opacity-0'}`}
                />
            </div>
        </nav>
    </div>
  )
}

export default Nav;