import React from 'react';
import './Testimonial.scss'

const Testimonial = ({ ts }) => {
    const {reviewUserProfession, reviewUserName, review} = ts;
    return (
        <div style={{backgroundColor: '#253D4A', color:'#fff'}} class="card testimonial-card mx-3 h-100 border-0 shadow">
            <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">{reviewUserName}</h5>
                <h6 style={{color: '#71B100'}} class="card-subtitle mb-2">{reviewUserProfession}</h6>
                <p class="card-text">{review}</p>
            </div>
        </div>
    );
};

export default Testimonial;