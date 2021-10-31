import React, { useEffect, useState } from 'react';

import useAuth from '../../../Hook/useAuth';
import "./MyBooking.css"

const MyBooking = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://thawing-reef-26997.herokuapp.com/myEvents/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, [user.email], [control]);


    const handleDelete = (id) => {
        fetch(`https://thawing-reef-26997.herokuapp.com/myEvents/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                } else {
                    setControl(false);
                }
            });
        console.log(id);
    };

    console.log(myBooking);
    console.log(myBooking);
    return (
        <div>
            <h1>My evtns : {myBooking.length}</h1>
            {myBooking?.map((pd) => (
                <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'> <img src={pd.img} /> </div>
                        <div class="content">
                            <h2>{pd.city_name}</h2>
                            <p> Your trip date{pd.date}</p>
                            <p>Your tikit delivere to : {pd.addrese}</p>
                            <button onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2">Delete</button>
                        </div>
                    </div>
                </div>


            ))}

        </div >
    );
};

export default MyBooking;