import React from 'react';
import { Form } from 'react-bootstrap';
import './Filtering.css';

const Filtering = ({ colors, selectedColors, handleColorChange, minPrice, maxPrice, handlePriceChange }) => {
  return (
    <div className="filtering">
      <h3>Filter by:</h3>
      <Form>
        {/* Color Filtering */}
        <Form.Group controlId="colorFilter">
          <Form.Label>Color:</Form.Label>
          {colors.map((color) => (
            <Form.Check
              key={color}
              type="checkbox"
              id={color}
              label={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
          ))}
        </Form.Group>

        {/* Price Filtering */}
        <Form.Group controlId="priceFilter">
          <Form.Label>Price Range:</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => handlePriceChange('min', e.target.value)}
            />
            <span className="mx-2">to</span>
            <Form.Control
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => handlePriceChange('max', e.target.value)}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filtering;
