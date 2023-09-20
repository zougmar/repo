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
      <div>
       <Navbar />

        <div className='container '>
          <section className="why-us banner-bg bg-light">
            <div className="container my-4">
              <div className="row">
                <div className="banner-img col-lg-5">
                  <img src="images/work.svg" className="rounded img-fluid" alt="" />
                </div>
                <div className="banner-content col-lg-7">
                  <div className="d-flex flex-column justify-content-end h-100">
                    <h2 className="h2 pb-3">Family History</h2>
                    <p className="text-muted pb-5 light-300">
                      Delve into the rich tapestry of your family's history, a journey through generations filled with captivating stories, traditions, and milestones. Discover the roots that bind us together and the legacy that continues to shape your family's legacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Histoire />
        </div>
        
       <Footer />
      </div>
    );
  }

}


export default HeadHistoire;



