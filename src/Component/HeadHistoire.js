import React, { Component } from 'react';

import Histoire from './Histoire';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';


import Navbar from './Navbar';
import Footer from './Footer';


class HeadHistoire extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
       <Navbar />
    
        <div className='container '>
          <section className="container banner-bg bg-light">
                <div className="container my-3">                             
                        <img src="/public/images/father-and-son.jpeg" className="rounded img-fluid" alt='' />
                </div>
                        <div className="banner-content col-lg-4">
                              <div className="container w-100 d-flex flex-column justify-content-end h-100">
                                  <h2 className="h2 pb-3">Family History</h2>
                                  <p className="text-muted pb-5 light-300">
                                    Delve into the rich tapestry of your family's history, a journey through generations filled with captivating stories, traditions, and milestones. Discover the roots that bind us together and the legacy that continues to shape your family's legacy.
                                  </p>
                              </div>
                        </div>
              </section>
                <Histoire />
            </div>
            <div className='container'>
          <Footer />
            </div>
      
      </>
    );
  }

}


export default HeadHistoire;



