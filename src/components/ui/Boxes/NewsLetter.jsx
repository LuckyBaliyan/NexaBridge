import React, { useState } from 'react'
import { toast } from 'react-toastify';

const NewsLetter = ({color='bg-gray-100',text='Subscribe'}) => {
    const [value,setValue] = useState('');
    const onsubmitHandler = (e)=>{
        e.preventDefault();
        setValue('');
        toast.success('request sent');
    }

  return (
    <div className='text-center'>
        <form action="" onSubmit={onsubmitHandler} className={`w-full flex sm:w-1/2 items-center gap-3 mx-auto my-6 ${color}  pl-3`}>
            <input type="email" placeholder='Enter your email' className='
            w-[75%] md:w-full sm:flex-1 outline-none' required value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='bg-[var(--Accent)] text-white text-xs px-10 py-4 uppercase cursor-pointer'>{text}</button>
        </form>
    </div>
  )
}

export default NewsLetter;