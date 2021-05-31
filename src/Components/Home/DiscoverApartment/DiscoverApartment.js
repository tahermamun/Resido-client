import React from 'react';
import './DiscoverApartment.scss';
import { GoLocation } from 'react-icons/go';
import { useHistory } from 'react-router-dom';


const DiscoverApartment = ({apartment}) => {
    const {houseTitle, imageURL, location, bedrooms, bathrooms, price, _id} = apartment;
    let history = useHistory();
    const moveDetails = (id) => {
        history.push(`/apartmentDetails/${id}`)
    }
    return (
        <div className='col-md-4 DiscoverApartment mb-3'>
            <div className="card h-100 border-0 shadow">
                <div className='cardImage'>
                    <img className='w-100 h-100' src={imageURL} alt="" />
                </div>
                <div className='cardBody px-3'>
                    <h5 className="title fw-bold">{houseTitle}</h5>
                    <p className='text-muted p-0 m-0'><GoLocation/>{location}</p>
                    <hr className='h-line' />
                    <p className='text-muted d-inline-block'>{bedrooms} Bedrooms</p>
                    <p className='text-muted d-inline-block'> {bathrooms} Bathrooms</p>
                    <div className='cardFooter pb-3'>
                        <p className=''>${price}</p>
                        <button onClick={()=> moveDetails(_id)} className='cardButton'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverApartment;