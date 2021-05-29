import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <section className='Footer ' id='Footer'>
            <div className="container pt-5">
                <div className='d-flex'>
                    <div className="row">
                        <div className="col-md-3 mb-3 text-center text-md-start">
                            <p className="p-0 m-0">H#340(4th Floor), Road #24</p>
                            <p className="p-0 m-0">New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                            <p className="p-0 m-0">Phone: 018XXXXXXXX</p>
                            <p className="p-0 m-0">E-mail: info@company.com</p>
                        </div>
                        <div className="col-md-3 mb-3 text-center text-md-start">
                            <h5>Company</h5>
                            <p>About</p>
                            <p>Site Map</p>
                            <p>Support Center</p>
                            <p>Terms Conditions</p>
                            <p>Submit Listing</p>
                        </div>
                        <div className="col-md-3 mb-3 text-center text-md-start">
                            <h5>Quick Links</h5>
                            <p>Quick Links</p>
                            <p>Rentals</p>
                            <p>Sales</p>
                            <p>Contact</p>
                            <p>Terms Conditions</p>
                            <p>Our blog</p>
                        </div>
                        <div className="col-md-3 mb-3 text-center text-md-start">
                            <h5>About us</h5>
                            <p>
                                We are the top real estate agency in Sydney, with agents available to answer any question 24/7.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;