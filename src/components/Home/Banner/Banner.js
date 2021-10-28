import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/GQTyXqr/doctor-nurses-special-equipment-edited.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h1>Providing best Medicale care</h1>
                        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LvyNb0x/3641634-edited.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h1>Providing best Medicale care</h1>
                        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/yhRZk52/Young-handsome-physician-in-a-medical-robe-with-stethoscope.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h1>Providing best Medicale care</h1>
                        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;