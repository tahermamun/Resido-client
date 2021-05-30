import React, { useRef, useState } from 'react';
import avatar from '../../../Image/Deshboard/avatar.png'
import './Navbar.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faClock } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { Button, Tooltip } from 'react-bootstrap';
import { Overlay } from 'react-bootstrap';





const Navbar = ({ sidebarOpen, openSidebar }) => {

    const [show, setShow] = useState(false);
    const target = useRef(null);

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
                    <img ref={target} onClick={() => setShow(!show)} width='40' src={avatar} alt="" />
                </a>
            </div>
            <Overlay variant="success" style={{ backgroundColor: 'red' }} target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Tooltip  {...props}>


                        <div style={{ color: 'black', background: '#fff', padding: '10px 5px', borderRadius: '5px' }}>
                            <h4>LogOut</h4>
                            <button className='btn btn-danger'>LogOut</button>
                        </div>

                    </Tooltip>
                )}
            </Overlay>

        </div>
    );
};

export default Navbar;