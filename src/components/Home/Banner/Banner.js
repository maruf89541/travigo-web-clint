import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JkycNcn/new-york-banner-edited.jpg"
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
                        src="https://i.ibb.co/qyXLSD7/Sheikh-Zayed-Road-Dubai-United-Arab-Emirates-edited.jpg"
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
                        src=" https://i.ibb.co/tm4Y0cg/img-1536137761-110-7749-p-7-ECF7092-95-BD-FE18-6-D4107-E2-E42-D067-E-2544003-a-Wxvdm-Vr-ZWxse-Qo-Foc.jpg"
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