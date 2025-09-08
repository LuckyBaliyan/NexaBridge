import React from 'react'
import useLenis from '../hooks/lenis/useLenis'
import Nav from '../components/ui/header/Nav';
import Footer from '../components/ui/footer/Footer';
import { Outlet } from 'react-router-dom';
import SlideUp from '../animations/SlideUp';
import SlideDown from '../animations/SlideDown';


const MainLayout = () => {

  return (
    <>
      <Nav/>
          <main>
             <Outlet/>
          </main>
      <Footer />
    </>
  )
}

export default MainLayout;