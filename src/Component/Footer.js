import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <footer className="bg-secondary">
                <div className="container">
                    <div className="row py-2 align-items-center">
                        <div className="col-lg-2 col-12">
                            <Link className="navbar-brand" to="/Arborescence">
                                <i className='bx bx-buildings fs-1 bx-sm text-light'></i>
                                <span className="text-light h2">Family</span> <span className="text-light h2 semi-bold-600">Tree</span>
                            </Link>
                        </div>

                        <div className="col-lg-10 col-12 text-center">
                            <div className="d-flex flex-column fs-4 align-items-center">
                                <Link className="h8 pb-lg-3  text-light light-350 mb-2" to="/HeadHistoire">History</Link>
                                <Link className="h8 pb-lg-3 text-light light-300 mb-2" to="/Arborescence">Family Tree</Link>
                                <Link className="h8 pb-lg-3 text-light light-300 mb-2" to="/Liste">List</Link>
                                <Link className="h8 pb-lg-3 text-light light-300 mb-2" to="/Galerie">Gallery</Link>
                                <Link className="h8 pb-lg-3 text-light light-300" to="/HeadContact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-primary py-2 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-light light-300">
                                    © Copyright 2023 Family Tree. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
