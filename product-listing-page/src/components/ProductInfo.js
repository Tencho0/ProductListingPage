import React from 'react';

const ProductInfo = ({ categoryName, shortDescription }) => {
  return (
    <div className="product-info">
      <h3>{categoryName}</h3>
      <p>{shortDescription}</p>
    </div>
  );
};

export default ProductInfo;
