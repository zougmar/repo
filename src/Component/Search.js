import React from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicon.min.css';
import '../assets/css/custom.css';
import '../assets/css/templatemo.css';


const Search = () => {
  return (

    <form action="#" method="get">
      <div className="input-group">
        <input type="text" className="form rounded-pill rounded-end" placeholder="   Search ..." />
        <button className="btn btn-secondary text-white btn-lg rounded-pill rounded-start px-lg-8" type="submit">Search</button>
      </div>
    </form>
  );
}

export default Search;