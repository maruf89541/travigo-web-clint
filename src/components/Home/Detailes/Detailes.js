import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Detailes = () => {
    const { serviceId } = useParams()
    const [alServiceDetails, setEmployeesDetails] = useState([]);

    const [singleServiceDetailes, setSingleEmployee] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-reef-26997.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                reset();
            })
        reset();
    }

    //  data load howa
    useEffect(() => {
        fetch("https://thawing-reef-26997.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setEmployeesDetails(data));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundEmployee = alServiceDetails.find(
            (employee) => employee._id === serviceId
        );
        setSingleEmployee(foundEmployee);
    }, [alServiceDetails]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-5"><img className="img-fluid" src={singleServiceDetailes?.img} alt=""></img></div>
                <div className="col-lg-6 p-5 ">
                    <div className="add-service">
                        <h1>Add your service</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <textarea {...register("description")} placeholder="description" />
                            <input type="number" {...register("price")} placeholder="Price" />
                            <input {...register("email")} placeholder="email" />
                            <input {...register("img")} placeholder="image-uri" />
                            <input type="submit" />
                        </form>
                    </div>
                    <button className="btn btn-dark px-3 me-3">Get service   <i class="fas fa-angle-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Detailes;