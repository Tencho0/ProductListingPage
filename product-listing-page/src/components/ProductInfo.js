import React from 'react';
import './ProductInfo.css'; 

const ProductInfo = ({ category, description }) => {
  return (
    <div className="product-info">
      <h2>{category}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductInfo;
