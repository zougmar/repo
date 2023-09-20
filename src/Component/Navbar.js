import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (

            <nav id="main_nav" className="navbar navbar-expand-lg fs-5 navbar-light bg-white shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand h1" to="/Arborescence">
                        <i className='bx bx-buildings fs-4 bx-sm text-dark'></i>
                        <span className="text-dark h2">Family</span> <span className="text-primary h2">Tree</span>
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                        <div className="flex-fill mx-xl-4 mb-2">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                                <li className="nav-item">
                                    <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/HeadHistoire">History</Link>
                                </li>   
                                <li className="nav-item">
                                    <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/Arborescence">Family Tree</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/Liste">List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/Galerie">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/HeadContact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar align-self-center search-box d-flex">
                            <button class="btn-search" ><i class='bx bx-search-alt bx-sm text-primary fas fa-search '></i></button>
                            <input type="text" class="input-search" placeholder="Type to Search..." />
                        </div>

                        <div class="navbar align-self-center btn btn-danger d-flex pdl">
                            <Link class="nav-link" to="/login">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;
