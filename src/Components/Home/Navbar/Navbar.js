import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import logo from '../../../img/residoLogo.png'
const Navbar = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-darkLight">
            <div class="container fs-5">
                <Link class="navbar-brand" to="/">
                    <img src={logo} className="w-100" alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/">Apartments</Link>
                        <Link class="nav-link" to="/">Contact</Link>
                        <Link class="nav-link" to="/dashboard/dashboardProfile">Dashboard</Link>
                        <Link class="loginButton" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;