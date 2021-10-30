import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myEvents/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, [user.email]);

    console.log(events);
    console.log(events);
    return (
        <div>
            <h1>My evtns : {events.length}</h1>
        </div>
    );
};

export default MyBooking;