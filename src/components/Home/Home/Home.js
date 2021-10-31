import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;