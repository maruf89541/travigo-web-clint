import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <h1 className="text-center my-5">Why Travel with <span style={{ color: "#ff7c5b" }}>Travio</span></h1>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <div class="content"> <a href="">
                            <div class="content-overlay"></div> <img class="content-image" src="https://i.ibb.co/R7HD3dJ/feature-1.jpg" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">2000+ Our Worldwide Guide</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> Russia</p>
                            </div>
                        </a> </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="content"> <a href="">
                            <div class="content-overlay"></div> <img class="content-image" src="https://i.ibb.co/4Rs5SFq/feature-2.jpg" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">100% Trusted Tour Agency</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> Nepal</p>
                            </div>
                        </a> </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="content"> <a href="">
                            <div class="content-overlay"></div> <img class="content-image" src="https://i.ibb.co/tmJ0ST8/feature-3.jpg" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">12+ Years of Travel Experience</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> Hawaii</p>
                            </div>
                        </a> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;