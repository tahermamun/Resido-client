import React from 'react';
import './Sidebar.scss'
import logo from '../../../Image/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faPlus, faTimes, faHome, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams } from 'react-router-dom';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {

    let { panel} = useParams()

    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='dashboard-sidebar'>
            <div className="dashboard-logo">
                <img src={logo} alt="" />
                <FontAwesomeIcon className='fa fa-times sidebar-icon' onClick={() => closeSidebar()} icon={faTimes} />
            </div>
            <div className="sidebar-menu">


                <NavLink to="/dashboard/dashboardProfile" className={panel==='dashboardProfile'? 'sidebar-active sidebar-link': 'sidebar-link'}>
                    <FontAwesomeIcon className='fa fa-times sidebar-link-icon' icon={faHome} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/dashboard/addRentHouse" className={panel==='addRentHouse'? 'sidebar-active sidebar-link': 'sidebar-link'}>
                    <FontAwesomeIcon className='fa fa-times sidebar-link-icon' icon={faPlus} />
                    <span>Add Rent House</span>
                </NavLink>
                <NavLink to="/dashboard/manageRentHouse" className={panel==='manageRentHouse'? 'sidebar-active sidebar-link': 'sidebar-link'}>
                    <FontAwesomeIcon className='fa fa-times sidebar-link-icon' icon={faSwatchbook} />
                    <span>Manage Houses</span>
                </NavLink>
                <NavLink to="/dashboard/addReview" className={panel==='addReview'? 'sidebar-active sidebar-link': 'sidebar-link'}>
                    <FontAwesomeIcon className='fa fa-times sidebar-link-icon' icon={faSwatchbook} />
                    <span>Add Review</span>
                </NavLink>




            </div>

        </div>
    );
};

export default Sidebar;