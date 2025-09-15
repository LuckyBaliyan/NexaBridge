import React from "react";
import { useAuth } from "../../context/AuthProvider";
import Mainbtn from '../../components/ui/Buttons/Mainbtn'
import { useNavigate } from "react-router-dom";

const Greeting = () => {
  const { currentUser, role,logout,login } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-600">
        Please login to continue.
      </div>
    );
  }

  const HandleLogout=async()=>{
    navigate('/');
    await logout();
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen text-center">
        <div className={`"overflow-hidden w-20 aspect-square rounded-full p-1 border-4 ${role === 'alumni'?"border-[var(--Highlight)]":
            'border-[var(--Accent)]'}`}>
            <img src={currentUser.img || '/images/user.png'} alt="" />
        </div>
      <h1 className="text-3xl font-bold mb-4">
        👋 Hello, {currentUser?.name || "User"}!
      </h1>
      <p className="text-lg text-gray-600">
        You are logged in as <span className={`font-semibold 
        ${role === 'student'?"text-[var(--Accent)]":"text-[var(--Highlight)]"}`}>
            {role}
        </span>.
      </p>
      <Mainbtn text='Logout' className="text-white bg-[var(--Accent)] px-4 py-2 mt-2"
      onClick={HandleLogout} />
  <div className="flex flex-col lg:flex-row items-center lg:items-start mt-6 md:mt-12 justify-center gap-4 w-full">
  <div className="greetCards">
    <h5>Recent Activities</h5>
    <p className="text-green-500">Logged in as a {role}</p>
    <p>Sucessfully Enrolled in a Gamming Event.</p>
  </div>

  <div className="greetCards">
    <h5>Notifications</h5>
    <p className="text-green-500">Sumit patel accepted your connection request</p>
    <p className="text-[var(--Highlight)]">Sumit Patel rejected your connection request</p>
    <p className="text-red-400">Sumit Patel rejected your connection request</p>
  </div>

  <div className="greetCards">
    <h5>Profile Status</h5>
    <p>10% Complete</p>
    <Mainbtn
      text="complete"
      className="text-white py-2 px-4 bg-[var(--Accent)] rounded-lg shadow"
    />
  </div>
  </div>
  <div className="mt-12 hidden lg:block border-t-2 border-black py-2">
    {role === 'student'?(<h5>Connect to Experienced Alumni</h5>):(
     <h5>
        Grow Your Network With Severals Persons Like You
     </h5>
    )
    }
    <Mainbtn text="Connect with Alumnis" className="px-4 py-2 bg-[var(--Accent)] text-white mt-0" 
    onClick={()=>navigate('/alumniDirectory')}/>
  </div>
  </div>
  );
};

export default Greeting;
