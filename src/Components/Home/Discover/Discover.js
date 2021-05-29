import React from 'react';
import './Discover.scss';
import fakeData from '../../../fakeData/fakeData.json'
import DiscoverApartment from '../DiscoverApartment/DiscoverApartment';
const Discover = () => {
    return (
        <section className='Discover' id='Discover'>
            <div className="container my-3">
                <div className="DiscoverHeader text-center">
                    <p>House Rent</p>
                    <h3>Discover the latest Rent <br /> available today</h3>
                </div>
                <div className="row py-5">
                    {
                        fakeData.map(apartment => <DiscoverApartment key={apartment.title} apartment={apartment} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Discover;