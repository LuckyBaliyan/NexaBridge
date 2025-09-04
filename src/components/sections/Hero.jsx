import React,{useEffect,useRef} from 'react'


const Hero = () => {

  return (
    <div className='relative w-full h-screen bg-[#000]'>
      <div className="overlay">
      <h1>INTER</h1>
      <p>Nunito</p>
      </div>
      <video src="/videos/video.mp4" muted loop autoPlay></video>
    </div>
  )
}

export default Hero;