import React, { useEffect } from 'react';
import './Discover.scss';
import DiscoverApartment from '../DiscoverApartment/DiscoverApartment';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchManageRentHouse } from '../../../Redux';
const Discover = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchManageRentHouse()), [dispatch])
    const rentHouses = useSelector(state => state.rentHouse.rentHouses)
    return (
        <section className='Discover' id='Discover'>
            <div className="container my-3">
                <div className="DiscoverHeader text-center">
                    <p>House Rent</p>
                    <h3>Discover the latest Rent <br /> available today</h3>
                </div>
                <div className="row py-5">
                    {
                        rentHouses.map(apartment => <DiscoverApartment key={apartment._id} apartment={apartment} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Discover;