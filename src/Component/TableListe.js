import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';



class TableListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      allData: [
        {
          name: 'Full name1',
          info1: 'Senior1',
          info2: 'Senior1',
          info3: 'Senior1',
          info4: 'Senior1',
        },
        {
          name: 'Full name2',
          info1: 'Senior2',
          info2: 'Senior2',
          info3: 'Senior2',
          info4: 'Senior2',
        },
        {
          name: 'Full name3',
          info1: 'Senior3',
          info2: 'Senior3',
          info3: 'Senior3',
          info4: 'Senior3',
        },
        {
          name: 'Full name4',
          info1: 'Senior4',
          info2: 'Senior4',
          info3: 'Senior4',
          info4: 'Senior4',
        },
        {
          name: 'Full name5',
          info1: 'Senior5',
          info2: 'Senior5',
          info3: 'Senior5',
          info4: 'Senior5',
        },
        {
          name: 'Full name6',
          info1: 'Senior6',
          info2: 'Senior6',
          info3: 'Senior6',
          info4: 'Senior6',
        },
        {
          name: 'Full name7',
          info1: 'Senior7',
          info2: 'Senior7',
          info3: 'Senior7',
          info4: 'Senior7',
        },
        {
          name: 'Full name8',
          info1: 'Senior8',
          info2: 'Senior8',
          info3: 'Senior8',
          info4: 'Senior8',
        },
      ]
    };
  }




  handlePrev = () => {
    this.setState(prevState => ({
      index: prevState.index - 1 >= 0 ? prevState.index - 1 : prevState.index,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };





  render() {
    const { index, allData } = this.state;
    const rowsPerPage = 4;
    const startIndex = index * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;


    return (

      <section className='section-container-sm'>
        <div className="custom-block custom-block-topics-listing bg-white shadow-lg custom-bloc mb-5">
          <div className="custom-block-topics-listing-info d-flex">
            <table className="table align-middle bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Description</th>
                  <th>Partner</th>
                  <th>Children</th>
                </tr>
              </thead>
              <tbody>

                {allData.slice(startIndex, endIndex).map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="images/Profile.png" alt="" className="rounded-circle img-pr" />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.info1}</td>
                    <td>{item.info2}</td>
                    <td>{item.info3}</td>
                    <td>{item.info4}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="btn-toolbar justify-content-center pb-4" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary text-white" onClick={this.handlePrev} disabled={index === 0}>Previous</button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary text-white" onClick={this.handleNext} disabled={endIndex >= allData.length}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default TableListe;




