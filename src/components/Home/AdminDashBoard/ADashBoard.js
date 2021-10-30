import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import AddService from '../AddService';
import MyBooking from '../MyBooking/MyBooking';

const ADashBoard = () => {
    const [control, setControl] = useState("allBooking");

    return (
        <div>
            <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("allBooking")}>Manage all Booking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("allVolunteers")}>All services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("allEvents")}>Add new service</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="col text-center  text-center">
                {control === "allBooking" && <AddService></AddService>}
                {control === "allEvents" && <MyBooking></MyBooking>}
                {/* {control === "addEvents" && <AddEvents></AddEvents>} */}
            </div>
        </div >
    );
};

export default ADashBoard;