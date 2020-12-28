import React from 'react';
import notFound from '../../images/not-found_v1.png';
import './NoResults.css';

function NotFound() {
  return (
    <div className="results__background">
      <img src={notFound} alt="frown" className="results__missing-image" />
      <h3 className="results__missing-title">Nothing Found</h3>
      <p className="results__missing-text">
        Sorry, but nothing matched
        {' '}
        <br />
        {' '}
        your search terms.
      </p>
    </div>
  );
}
export default NotFound;
