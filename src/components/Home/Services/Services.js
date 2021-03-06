import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://thawing-reef-26997.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container" >
            <h1 className="text-center my-5">Our Most Popular<span style={{ color: "#ff7c5b" }} >Adventures</span></h1>
            <div className="row gy-3 " >
                {

                    services?.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div >
        </div>
    );


};

export default Services;