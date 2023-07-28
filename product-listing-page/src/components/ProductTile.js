import React from 'react';

const ProductTile = ({ product }) => {
  return (
    <div className="product-tile">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        {product.discountedPrice ? (
          <span>
            <del>${product.price}</del> ${product.discountedPrice}
          </span>
        ) : (
          <span>${product.price}</span>
        )}
      </p>
      <div className="ratings">Ratings: {product.rating} stars</div>
      <button onClick={() => alert('Product added to cart')}>Add to Cart</button>
    </div>
  );
};

export default ProductTile;
