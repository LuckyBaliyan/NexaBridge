import React from 'react'
import './Global.css'
import Home from './pages/comman/Home';
import { Route, Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './components/auth/Login';
import useLenis from './hooks/lenis/useLenis';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verification from './components/auth/Verification';
import Donations from './pages/comman/Donations';
import SucessAlumni from './pages/comman/SucessAlumni';
import SpecificAlumniStory from './pages/comman/SpecificAlumniStory';
import Loader from './animations/Loader';
import Events from './pages/eventsPages/Events';
import Event from './pages/eventsPages/Event';
import ManageEvent from './pages/eventsPages/ManageEvent';
import UserDashBoard from './pages/comman/UserDashBoard';
import Profile from './pages/comman/Profile';
import EditUserProfile from './pages/Profiles/EditUserProfile';
import Apportunities from './pages/comman/Apportunities';
import Apportunity from './pages/comman/Apportunity';
import About from './pages/comman/About';
import Contact from './pages/comman/Contact';
import AlumniDirectory from './pages/comman/AlumniDirectory';
import CreateApportunity from './pages/Wrappers/CreateApportunity';
import InitiateConnect from './pages/comman/InitiateConnect';

const App = () => {

  {/*Initailize Lenis for smooth scrolling Effect */}
  useLenis();

  return (
    <>
    <Loader />
    <Routes>
       <Route  element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/donations' element={<Donations />} />
            <Route path='/sucessAlumni' element={<SucessAlumni/>} />
            <Route path='/alumni/:alumniId' element={<SpecificAlumniStory/>} />
            <Route path='/events' element={<Events />} />
            <Route path='/events/:eventId' element={<Event/>} />
            <Route path='/events/manage' element={<ManageEvent/>} />
            <Route path="/events/manage/:eventId" element={<ManageEvent />} /> 
            <Route path='/dashboard' element={<UserDashBoard/>} />
            <Route path='/profile:email' element={<Profile/>} />
            <Route path='/editProfile' element={<EditUserProfile/>} />
            <Route path='/opportunities' element={<Apportunities/>} />
            <Route path='/opportunity' element={<Apportunity/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/alumniDirectory' element={<AlumniDirectory />} />
            <Route path='/createApportunity' element={<CreateApportunity />} />
            <Route path="/connect" element={<InitiateConnect />} />
       </Route>
       <Route>
           <Route path='/login' element={<Login/>} />
           <Route path='/verify' element={<Verification />} />
       </Route>
    </Routes>

      {/** Juggar for the notification configuration */}
      <div className='fixed top-12 right-6 w-[0%] bg-red-300 z-50 pointer-events-auto'>
        <ToastContainer
        position="top-right"
        autoClose={500}
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
