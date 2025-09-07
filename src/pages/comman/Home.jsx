import React, { useRef } from 'react'
import Hero from '../../components/ui/sections/Hero'
import Benifits from '../../components/ui/sections/Benifits'
import  Features  from '../../components/ui/sections/Features'
import Testimonials from '../../components/ui/sections/Testimonials'
import SlideUp from '../../animations/SlideUp'
import SlideDown from '../../animations/SlideDown'
import Footer from '../../components/ui/footer/Footer'
import Sucess from '../../components/ui/sections/Sucess'

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
       <section className='even rounded-t-4xl pt-16 mt-4 md:mt-0'>
           <Benifits />
       </section>
       <section className='even rounded-b-4xl'>
           <Features/>
       </section>
    </div>
    </SlideUp>
    <SlideDown ref={downRef}>
      <section className='mt-2'>
          <Testimonials />
      </section>
    </SlideDown>
    <section>
        <Footer/>
    </section>
   <SlideUp ref={succRef}>
    <section className='even rounded-t-4xl -mt-[74vh] md:-mt-[54vh]'>
        <Sucess />
    </section>
   </SlideUp>
    </>
  )
}

export default Home;