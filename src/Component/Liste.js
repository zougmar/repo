import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';

import TableListe from './TableListe';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';



class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div> <Navbar />
        <div className='container text-center'>
          <section className="bg1-light w-100">
                <div className="container">
                        <div className="row d-flex align-items-center py-5 center">
                                  <div className="col-lg-8 text-start ">
                                    <h1 className="h2 py-5 typo-space-line">List of family members</h1>
                                    <p className="light-300 ">
                                      Explore the profiles of your family members, each with their unique information, and essential details. Stay in touch with your loved ones and discover more about your diverse and close-knit family.
                                    </p>
                                  </div>
                                      
                        </div>
                </div>
          </section>



          <div class="row pt-5">
            <div class="col-lg-6 mx-auto my-4 ">
              <Search /><hr />
            </div>
          </div>
          <div className='container w-75'>
          <TableListe />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}



export default Liste;