import React from 'react';

const SingleService = ({service}) => {
    const {title, description, icon} = service;
    return (
        <div className='col-md-4 mb-3'>
            <div className="content text-center">
                <div className='text-center mb-3'>
                    <img className='w-25' src={icon} alt=""/>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;