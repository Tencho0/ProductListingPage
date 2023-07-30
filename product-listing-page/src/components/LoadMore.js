import React from 'react';
import './LoadMore.css'; 
import { Button } from 'react-bootstrap';

const LoadMore = ({ onLoadMore, isAllLoaded }) => {
  return (
    <div className="load-more">
      {!isAllLoaded ? (
        <Button variant="primary" onClick={onLoadMore}>
          Load More
        </Button>
      ) : (
        <p>No more products to load.</p>
      )}
    </div>
  );
};

export default LoadMore;
