import React from 'react';
import notFound from '../../images/not-found_v1.png';

function ResultError() {
  return (
    <div className="results__background">
      <img src={notFound} alt="frown" className="results__missing-image" />
      <h3 className="results__missing-title">Something went wrong</h3>
      <p className="results__missing-text">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>
    </div>
  );
}
export default ResultError;
