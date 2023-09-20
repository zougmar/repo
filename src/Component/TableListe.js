import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';

import data from '/Users/ZOUGMAR/Desktop/les cours S5/repo/src/Component/data/data.json';
class TableListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      allData: []
    };
  }
  componentDidMount() {
    // Extract data for all persons from JSON file
    const { families } = data;
    const allData = [];

    // Helper function to recursively collect data for all persons
    const collectData = (family) => {
      const { First_Name, Last_Name, Age, Description, Partner, children } = family;

      allData.push({
        name: `${First_Name} ${Last_Name}`,
        info1: Age.toString(),
        info2: Description,
        info3: Partner,
      });

      if (children && children.length > 0) {
        children.forEach((child) => {
          collectData(child);
        });
      }
    };

    families.forEach((family) => {
      collectData(family);
    });

    this.setState({ allData });
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
                  <th>info</th>
                  <th>info</th>
                  <th>info</th>
                  <th>info</th>
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




