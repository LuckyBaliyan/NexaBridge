import React from 'react'
import useLenis from './hooks/lenis/useLenis'
import './Global.css'
import Hero from './components/sections/Hero';

const App = () => {
  {/*Initailize Lenis for smooth scrolling Effect */}
  useLenis();

  return (
    <main>
     <Hero />
    </main>
  )
}

export default App
