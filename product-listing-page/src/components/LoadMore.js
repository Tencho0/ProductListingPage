import React from 'react';
import { Button } from 'react-bootstrap';

const LoadMore = ({ onLoadMore }) => {
  return (
    <div className="load-more">
      <Button variant="primary" onClick={onLoadMore}>
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
