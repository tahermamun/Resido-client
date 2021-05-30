import React from 'react';
import './Amenities.scss'
import { FaWifi } from 'react-icons/fa';
const Amenities = () => {
    return (
        <section className="Amenities" id="Amenities">
            <div className="container py-4">
                <div className="AmenitiesInfo w-75 mx-auto text-center">
                    <h3>Resido Favorite Amenities</h3>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce commodo imperdiet dolor, vel mollis quam tempor sit amet. Maecenas tincidunt sit amet lectus id bibendum. Aenean dictum ullamcorper ante, ornare faucibus nunc ultrices eu. Ut a sem id felis semper sagittis a sit amet enim. Vivamus sit amet lacus urna malesuada posuere vit.
                    </p>
                </div>
                <div className="AmenitiesTools d-flex mx-auto w-75">
                    <div className="ToolBox text-center px-5">
                        <FaWifi className="fs-2" />
                        <p>Fast Wifi</p>
                    </div>
                    <div className="ToolBox text-center px-5">
                        <FaWifi className="fs-2" />
                        <p>Fast Wifi</p>
                    </div>
                    <div className="ToolBox text-center px-5">
                        <FaWifi className="fs-2" />
                        <p>Fast Wifi</p>
                    </div>
                    <div className="ToolBox text-center px-5">
                        <FaWifi className="fs-2" />
                        <p>Fast Wifi</p>
                    </div>
                    <div className="ToolBox text-center px-5">
                        <FaWifi className="fs-2" />
                        <p>Fast Wifi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;