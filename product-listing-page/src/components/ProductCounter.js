import React from 'react';

const ProductCounter = ({ displayedProducts, totalProducts }) => {
  return (
    <div className="product-counter">
      <p>
        {displayedProducts.length} out of {totalProducts} products
      </p>
    </div>
  );
};

export default ProductCounter;
