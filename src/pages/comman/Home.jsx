import React from 'react'
import Hero from '../../components/ui/sections/Hero'
import Transition from '../../animations/pageTransitions/Transition'

const Home = () => {
  return (
    <section>
        <Hero/>
    </section>
  )
}

export default Transition(Home);