import React from 'react';
import './ProductGrid.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductGrid = ({ products, filteredColors, minPrice, maxPrice, sortOption }) => {
  // Apply filters based on selected colors and price range
  const filteredProducts = products.filter((product) => {
    const isColorMatch = filteredColors.length === 0 || filteredColors.includes(product.color);
    const isPriceMatch =
      (minPrice === '' || product.price >= +minPrice) && (maxPrice === '' || product.price <= +maxPrice);
    return isColorMatch && isPriceMatch;
  });

  // Apply sorting based on the selected option
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

  return (
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
                <Card.Text className="ratings">{product.ratings} stars</Card.Text>
                <Button variant="primary" className="add-to-cart-button">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;