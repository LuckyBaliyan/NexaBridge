import React from 'react'
import './Global.css'
import Home from './pages/comman/Home';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './components/auth/Login';
import useLenis from './hooks/lenis/useLenis';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  {/*Initailize Lenis for smooth scrolling Effect */}
  useLenis();

  return (
    <>
    <Routes>
       <Route  element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
       </Route>
       <Route>
           <Route path='/login' element={<Login/>} />
       </Route>
    </Routes>
      {/** Juggar for the notification configuration */}
      <div className='fixed top-12 right-6 w-[0%] bg-red-300 z-50 pointer-events-auto'>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      </div>
    </>
  )
}

export default App;
