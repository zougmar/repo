import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';

class Histoire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          data: ' Lorem ipsum dolor sit amet. Est voluptas necessitatibus sit deleniti fugit est veniam tempore sit commodi temporibus sit consequatur nesciunt. Ut voluptas repudiandae est iure galisum et delectus mollitia et rerum inventore ut dolores repudiandae hic aliquam molestiae? Aut porro quibusdam in quas quis et facilis totam! Et debitis deleniti aut voluptates obcaecati nam dicta ipsa ab corrupti animi a harum omnis ut maiores repudiandae cum dolores reprehenderit. Et esse repellat et rerum ipsa ut enim facere eum animi totam hic voluptas numquam.'
        },
      ],
    };
  }

  render() {
    const { Data } = this.state;

    return (
      <div className="container py-5">
        <div className="row pt-4">
          <div className="worksingle-content col-lg-8 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-3 light-300 typo-space-line">Your Family History</h2>
            {Data.map((histoire, index) => (
              <p key={index} className="worksingle-footer py-3 text-muted light-300">
                {histoire.data}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Histoire;
