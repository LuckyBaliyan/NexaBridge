import React, { useRef } from 'react'
import Hero from '../../components/ui/sections/Hero'
import Benifits from '../../components/ui/sections/Benifits'
import  Features  from '../../components/ui/sections/Features'
import Testimonials from '../../components/ui/sections/Testimonials'
import SlideUp from '../../animations/SlideUp'
import SlideDown from '../../animations/SlideDown'
import Sucess from '../../components/ui/sections/Sucess'
import Events from '../../components/ui/sections/Events'
import StatsCard from '../../components/ui/Cards/StatsCard'
import FinalCall from '../../components/ui/sections/FinalCall'
import Footer from '../../components/ui/footer/Footer'

const Home = () => {
  const slideRef = useRef(null);
  const downRef = useRef(null);
  const succRef = useRef(null);

  return (
    <>
    <section>
        <Hero/>
    </section>
    <SlideUp ref={slideRef}>
    <div>
       <section className='even rounded-t-4xl pt-16 mt-6 md:mt-0'>
           <Benifits />
       </section>
       <section className='even rounded-b-4xl'>
           <Features/>
           <StatsCard />
       </section>
    </div>
    </SlideUp>
    <SlideDown ref={downRef}>
      <section className='mt-2 relative'>
          <Testimonials />
      </section>
    </SlideDown>
    <SlideUp ref={succRef}>
     <section className='even rounded-t-4xl  mt-[35vh] md:mt-[5vh] lg:mt-[45vh]'>
        <Sucess />
        <Events />
    </section>
    </SlideUp>
    <div className='relative h-[50vh]'>
        <FinalCall />
    </div>
    </>
  )
}

export default Home;