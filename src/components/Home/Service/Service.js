import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { id, img, name, short_d } = service;
    console.log(id);
    return (
        <div className="col-lg-4 px-3 hello mx-auto service ">
            <div className="p-3">
                <img src={img} className="img-fluid" alt=""></img>
            </div>
            <div className="">
                <h5 text-center>{name}</h5>
                <p>{short_d}</p>


                <Link to={`/detailes/${id}`}>
                    <button className="btn btn-dark">
                        See more
                    </button>
                </Link>
            </div>

        </div >



    );
};

export default Service;