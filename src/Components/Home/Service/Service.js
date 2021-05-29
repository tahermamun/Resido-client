import React from 'react';
import './Service.scss';
import affordable from '../../../img/affordable.png'
import apartment from '../../../img/apartment.png'
import lessee from '../../../img/lessee.png'
import SingleService from '../SingleService/SingleService';

const Services = [
    {
        title: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties an hand as well as leading properties from experts.',
        icon: apartment
    },
    {
        title: 'Financing Made Easy',
        description: 'With a robust selection of popular properties an hand as well as leading properties from experts.',
        icon: affordable
    },
    {
        title: 'Trusted by Thousands',
        description: 'With a robust selection of popular properties an hand as well as leading properties from experts.',
        icon: lessee
    }
]

const Service = () => {
    return (
        <section className='Service' id='Service'>
            <div className="container">
                <div className="ServiceHeader mx-auto text-center w-50">
                    <p>Service</p>
                    <h3 className='fw-bold'>We're an agency tailored to all <br /> clients' needs that always delivers</h3>
                </div>
                <div className="row py-5">
                    {
                        Services.map(service => <SingleService key={service.title} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;