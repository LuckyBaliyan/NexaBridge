import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../../utils/data';
import Button from '../Buttons/Mainbtn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';


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
            <div>
            <NavLink to='/'>
                <h4>Nexa</h4>
            </NavLink>
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
                        <p className='mask-para text-white opacity-0'>
                          {link.label} 
                        </p>
                    </NavLink>
                ))
            }
            </div>
            {/** Later add a profile pic on clicking we get to profile page */}
            <div className='scale-80 translate-x-[50%] sm:translate-x-[60%] md:translate-x-0 md:scale-100'>
            {role?(
                <Button text='logout' onClick={logout}/>
            ):(
                <Link to='/login'>
                    <Button text='login'/>
                </Link>
            )}
            </div>
            <div onClick={()=>setOpened(!opened)} className='md:hidden bg-[var(--BackgroundPrimary)] flex items-center justify-center w-10
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