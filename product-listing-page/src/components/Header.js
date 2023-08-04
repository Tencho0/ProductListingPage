import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = ({ activeCategory, setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              active={activeCategory === 'bags'}
              onClick={() => handleCategoryClick('Bags')}
            >
              Bags
            </Nav.Link>
            <Nav.Link
              href="/"
              active={activeCategory === 'shoes'}
              onClick={() => handleCategoryClick('Shoes')}
            >
              Shoes
            </Nav.Link>
            {/* Add more categories if needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
