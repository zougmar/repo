import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/custom.css';
import '../assets/css/templatemo.css';


import Navbar from './Navbar';
import Footer from './Footer';





class Galerie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
  
    return (
      <div> 
       <Navbar/>
       
        <div className='container'>
            <section className="why-us banner-bg  bg-light">
                <div className="container">
                   <div className="row">
                      <div className="banner-img col-lg-4">
                        <img src="/fronetnd/public/images/Images-cuate.svg" className="rounded img-fluid" alt="" />
                      </div>
                      <div className="banner-content col-lg-7">
                        <div className="d-flex flex-column justify-content-end h-100">
                          <h2 className="h2 pb-3">Gallery</h2>
                            <p className="text-muted pb-5 light-300">
                                Discover your family gallery, a treasure trove of cherished memories and moments frozen in time. From heartwarming gatherings to joyous celebrations. 
                            </p>
                        </div>
                       </div>
                    </div>
                </div>
            </section>

            <div className='container py-5'>
              <div className="row">
                  <h2 className="h2 text-center col-12 py-5 semi-bold-600 typo-space-line-center ">All photos</h2>
              </div>
         
            </div>
        </div>

        <Footer />
     </div>
    );
  }
}

export default Galerie;
