import React from 'react';
import Amenities from '../Amenities/Amenities';
import Discover from '../Discover/Discover';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import './Home.scss'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Discover/>
            <Testimonials/>
            <Amenities/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default Home;