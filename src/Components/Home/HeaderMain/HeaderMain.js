import React from 'react';
import './HeaderMain.scss';
import { CgArrowLongDown } from 'react-icons/cg';

const HeaderMain = () => {
    return (
        <div className='HeaderMain'>
            <div className='container '>
                <div className="headerBox  text-light text-center">
                    <p className='find'>Find the Best</p>
                    <h2 className='text-uppercase headerMainTitle fs-2'>Modern Apartment In <br/> A New Residential Complex</h2>
                    <button>Learn More</button>
                    <a href="#Discover" className="d-block HeaderLink">Explore<br /> <CgArrowLongDown className='mt-2 fs-3' /></a>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;