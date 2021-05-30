import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
// import apartment from '../../../img/Rectangle 394.png';
import './ApartmentDetails.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ApartmentDetails = () => {
    const [apartment, setApartment] = useState({}) 
    const { rentHouseId } = useParams()
    const rentHouses = useSelector(state => state.rentHouse.rentHouses)
    const house = rentHouses.filter(hs => hs._id === rentHouseId )
    
    useEffect(()=> setApartment(...house), [house])
    console.log(apartment)
    return (
        <section className="ApartmentDetails">
            <Header />
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <div className="imageBox">
                            <img className="w-100" src={apartment.imageURL} alt="" />
                        </div>
                        <div className="apartmentInfo">
                            <div className='d-flex justify-content-between mt-3 py-1'>
                                <h3 className='apartmentTitle'>{apartment.houseTitle}</h3>
                                <p className="d-inline-block price">${apartment.price}</p>
                            </div>
                            <p className='description'>
                                3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                            </p>
                        </div>
                        <div className="priceInfo">
                            <h3>Price Details-</h3>
                            <p>Rent/Month: $550 (negotiable)
                            Service Charge : 8,000/= Tk per month, subject to change
                            Security Deposit : 3 month’s rent
                            Flat Release Policy : 3 months earlier notice required</p>
                        </div>
                        <div className="propertyInfo">
                            <h3>Property Details-</h3>
                            <p>
                                Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                                Flat Size : 3000 Sq Feet.
                                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                                Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card p-3" style={{ background: '#F4F4F4' }}>
                            <form className='pt-3'>
                                <div className="mb-3">
                                    <input placeholder="Full Name" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input placeholder="Phone NO" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input placeholder="Email Address" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea placeholder="Massage" cols="30" rows="5" className='form-control'></textarea>
                                </div>
                                <button type='button' className='cardButton'>Request Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentDetails;