import React from 'react'
import './Global.css'
import Transition from './animations/pageTransitions/Transition';
import Home from './pages/comman/Home';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './components/auth/Login';
import useLenis from './hooks/lenis/useLenis';

const App = () => {


  {/*Initailize Lenis for smooth scrolling Effect */}
  useLenis();

  return (
    <Routes>
       <Route  element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
       </Route>
       <Route>
           <Route path='/login' element={<Login/>} />
       </Route>
    </Routes>
  )
}

export default Transition(App);
