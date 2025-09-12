import React from 'react'
import { useAuth } from '../../context/AuthProvider';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {currentUser} = useAuth();
    const {email} = useParams();
    
  return (
    <div>Profile</div>
  )
}

export default Profile;