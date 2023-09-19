import React, { Component } from 'react';
import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/custom.css';
import '../assets/css/templatemo.css';


import Contact from './Contact';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';


class HeadContact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (

      <div>
       <Navbar/>
        <div className='container'>
          <section className="container py-5">
            <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5 section-img ">
              <div className="col-lg-6">
                <h2 className=" container h2 py-5 typo-space-line">Contacts</h2>
                <p className="container text-muted light-200">
                  Welcome to the family contacts page. Here, you will find contact information for members of our family, including phone numbers, email addresses, and other useful details. Feel free to reach out to us if you need anything!
                </p>
              </div>
              <div className="contact-img col-lg-5 align-items-end col-md-4">
                {/* <img src="images/banner-img-01.svg" /> */}
              </div>
            </div>
          </section>


          <div class="row pt-5 ">
            <div class="col-lg-6 mx-auto my-4 ">
              <h2 class="h2 text-center semi-bold-600 pb-1">All Contacts</h2>
              <Search /><hr />
            </div>
          </div>

          <Contact />

        </div>

       <Footer />
      </div>
    );
  }
}


export default HeadContact;

