import React from 'react';

const Testimonial = ({ ts }) => {
    const {proffesion, name, review} = ts;
    return (
        <div class="card mx-3 h-100 border-0">
            <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{proffesion}</h6>
                <p class="card-text">{review}</p>
            </div>
        </div>
    );
};

export default Testimonial;