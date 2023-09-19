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
            <footer className="bg-secondary pt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4">
                <Link className="navbar-brand" to="/Arborescence">
                    <i className='bx bx-buildings bx-sm text-light'></i>
                    <span className="text-light h5">Family</span> <span className="text-light h5 semi-bold-600">Tree</span>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
                <div className="text-center">
                    <Link className="h8 text-light light-300" to="/HeadHistoire">History</Link>
                </div>
                <div className="text-center">
                    <Link className="h8 text-light light-300" to="/Arborescence">Family Tree</Link>
                </div>
                <div className="text-center">
                    <Link className="h8 text-light light-300" to="/Liste">List</Link>
                </div>
                <div className="text-center">
                    <Link className="h8 text-light light-300" to="/Galerie">Gallery</Link>
                </div>
                <div className="text-center">
                    <Link className="h8 text-light light-300" to="/HeadContact">Contact</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="w-100 bg-primary py-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 mx-auto my-3 text-center">
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



