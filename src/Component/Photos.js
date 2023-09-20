import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';



class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentPage: 0,
      photos: [
        { url: '/public/images/Gallery/Ethan.jpeg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Ethan' },
        { url: '/public/images/Gallery/Nina.png', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Nina' },
        { url: '/Users/ZOUGMAR/Desktop/les cours S5/repo/public/images/Gallery/Alica.jpeg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Alica' },
        { url: 'images/gallery/woman4.png', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Noah' },
        { url: 'images/gallery/enfant1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt. ', fullName: 'Emma' },
        { url: 'images/gallery/enfant2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Liam' },
        { url: 'images/gallery/man1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Karim' },
        { url: 'images/gallery/Davis.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Davis' },
        { url: 'images/gallery/man2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Ethan' },
        { url: 'images/gallery/woman3.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Nina' },
        { url: 'images/gallery/man2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Ethan' },
        { url: 'images/gallery/woman4.png', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Noah' },
        { url: 'images/gallery/enfant1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt. ', fullName: 'Emma' },
        { url: 'images/gallery/woman4.png', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Noah' },
        { url: 'images/gallery/man1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Karim' },
        { url: 'images/gallery/Davis.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Davis' },
        { url: 'images/gallery/enfant1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt. ', fullName: 'Emma' },
        { url: 'images/gallery/enfant2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Liam' },
        { url: 'images/gallery/man1.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Karim' },
        { url: 'images/gallery/Davis.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Davis' },
        { url: 'images/gallery/man2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Ethan' },
        { url: 'images/gallery/woman3.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Nina' },
        { url: 'images/gallery/man2.jpg', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Ethan' },
        { url: 'images/gallery/woman4.png', bio: 'Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt.', fullName: 'Noah' },

      ],
    };
  }









  /*PAGINATION*/
  handlePrev = () => {
    this.setState((prevState) => ({
      index: Math.max(prevState.index - 1, 0),
    }));
  };

  handleNext = () => {
    const { index, photos } = this.state;
    const rowsPerPage = 8;
    const totalPages = Math.ceil(photos.length / rowsPerPage);
    const nextIndex = index + 1;
  
    if (nextIndex < totalPages) {
      this.setState({
        index: nextIndex,
      });
    }
  };
  





  render() {
    const { index, photos } = this.state;
    const rowsPerPage = 8;
    const startIndex = index * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, photos.length);



    return (

      <div>
        <section className="container">
          <div className="row justify-content-center my-5">
            <div className="row projects gx-lg-5">

              {photos.slice(startIndex, endIndex).map((photo, idx) => (
                <div key={idx} href="work-single.html" className="col-sm-6 col-lg-3 text-decoration-none project marketing social business">
                  <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5 card-hover">
                    <img className="card-img-top img-sz" src={photo.url} title={photo.bio} alt={photo.fullName} />
                    <div className="card-body">
                      <h5 className="card-title light-300">
                        <strong>{photo.fullName}</strong>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>




        <div className="pagination_rounded">
          <ul>
            <li>
              <Link to="" onClick={this.handlePrev} disabled={index === 0} className="prev">
                <i className="fa fa-angle-left" aria-hidden="true"></i> Prev
              </Link>
            </li>
            {Array.from({ length: Math.ceil(photos.length / rowsPerPage) }).map((_, idx) => (
              <li key={idx}>
                <Link to="" onClick={() => this.setState({ index: idx })}>
                  {idx + 1}
                </Link>
              </li>
            ))}
            <li>
              <Link to="" onClick={this.handleNext} disabled={endIndex >= photos.length} className="next">
                Next <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>


      </div>
    );
  }
}

export default Photos;
