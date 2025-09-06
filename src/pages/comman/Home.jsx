import React from 'react'
import Hero from '../../components/ui/sections/Hero'
import Transition from '../../animations/pageTransitions/Transition'
import Benifits from '../../components/ui/sections/Benifits'

const Home = () => {
  return (
    <>
    <section>
        <Hero/>
    </section>
    <section>
        <Benifits />
    </section>
    </>
  )
}

export default Home;