import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container fs-5">
                <Link class="navbar-brand fw-bold" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/">About</Link>
                        <Link class="nav-link" to="/">Service</Link>
                        <Link class="nav-link" to="/">Concern</Link>
                        <Link class="nav-link" to="/">Event</Link>
                        <Link class="nav-link" to="/">Contact</Link>
                        <Link class="nav-link" to="/">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;