import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      <Row>
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <p className="product-price">
                  {product.discountedPrice ? (
                    <span className="discounted-price">${product.discountedPrice}</span>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </p>
                <div className="product-rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
                <Button variant="primary" onClick={() => alert('Product added to cart')}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
