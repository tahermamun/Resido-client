import React from 'react';
import "./DashboardProfile.scss"
import pic from '../../../Image/Deshboard/avatar.png'
import Charts from '../Charts/Charts';

const DashboardProfile = () => {

    return (
        <div className='main__container'>
            <div className='main__title'>
                <img src={pic} alt="" />
                <div className="main__greeting">
                    <h1>Hello Resido</h1>
                    <p>Welcome to your Dashboard</p>
                </div>
            </div>
            <div className="main__cards">

                <div className='card'>
                    <i className='fa fa-user-o fa-2x text-lightblue'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Number of House</p>
                        <span className='font-bold text-title'>578</span>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-calender fa-2x text-lightblue'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Time of bedrooms</p>
                        <span className='font-bold text-title'>578</span>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-user fa-2x text-yellow'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Number of bathrooms</p>
                        <span className='font-bold text-title'>578</span>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-thumbs-up fa-2x text-green'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Number of customer</p>
                        <span className='font-bold text-title'>578</span>
                    </div>
                </div>
            </div>

            <div className="charts">
                <div className="charts_left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>sylhet, Bangladesh</p>
                        </div>
                        <i className='fa fa-usd'></i>
                    </div>
                    <Charts></Charts>
                </div>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>State Report</h1>
                            <p>Sylhet, Bangladesh</p>
                        </div>
                        <i className='fa fa-use'></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Sales</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card4">
                            <h1>Orders</h1>
                            <p>$75,300</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default DashboardProfile;