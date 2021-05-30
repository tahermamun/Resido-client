import React from 'react';
import avatar from '../../../Image/Deshboard/avatar.png'
import './Navbar.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faClock } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';

const Navbar = ({ sidebarOpen, openSidebar }) => {
    let { panel } = useParams()
    return (
        <div className='dashboard-navbar'>


            <div className='dashboard-navbar-left'>

                <div className='dashboard-nav-icon' onClick={() => openSidebar()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <h2>


                    {
                        panel === 'dashboardProfile' ? 'Dashboard' :
                        panel === 'addRentHouse' ? 'Add Rent House' :
                        panel === 'manageRentHouse' ? 'Manage Rent House' :
                        panel === 'addReview' ? 'Add Review' : ""
                    }





                </h2>
            </div>

            <div className="dashboard-navbar-right">
                <a href="#">
                    <img width='40' src={avatar} alt="" />
                </a>
            </div>

        </div>
    );
};

export default Navbar;