import React, { useState } from 'react';
import './ProductGrid.css';
import { Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const ProductGrid = ({ products, filteredColors, minPrice, maxPrice, sortOption, activeCategory }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for the success alert

  const filteredProducts = products.filter((product) => {
    const isColorMatch = filteredColors.length === 0 || filteredColors.includes(product.color);
    const isPriceMatch =
      (minPrice === '' || product.price >= +minPrice) && (maxPrice === '' || product.price <= +maxPrice);
    const isCategoryMatch = product.category === activeCategory;
    return isColorMatch && isPriceMatch && isCategoryMatch;
  });

  const sortProducts = (products) => {
    switch (sortOption) {
      case 'alphabetical-a-z':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'alphabetical-z-a':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-ascending':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-descending':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setShowSuccessAlert(true);
  };
  return (
    <div>
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Product added to cart
        </Alert>
      )}
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {sortedProducts.map((product) => (
            <Col key={product.id}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    {product.discountedPrice ? (
                      <>
                        <span className="discounted-price">${product.discountedPrice}</span>
                        <span className="original-price">${product.price}</span>
                      </>
                    ) : (
                      <span>${product.price}</span>
                    )}
                  </Card.Text>
                  <Card.Text className="ratings">{product.rating} stars</Card.Text>
                  <Button variant="primary" className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductGrid;