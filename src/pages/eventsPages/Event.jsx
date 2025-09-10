import React from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Event = () => {
    const { eventId }  = useParams();
    const {events} = useAuth();

    console.log(events);

    return (
      <div>event</div>
    )
}

export default Event;
