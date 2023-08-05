import React from 'react';
import { Form } from 'react-bootstrap';

const Sorting = ({ sortOption, handleSortChange }) => {
  return (
    <div className="sorting">
      <Form.Group controlId="sortingDropdown">
        <Form.Label>Sort By:</Form.Label>
        <Form.Select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="alphabetical-a-z">Alphabetical A-Z</option>
          <option value="alphabetical-z-a">Alphabetical Z-A</option>
          <option value="price-ascending">Price (Low to High)</option>
          <option value="price-descending">Price (High to Low)</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default Sorting;
