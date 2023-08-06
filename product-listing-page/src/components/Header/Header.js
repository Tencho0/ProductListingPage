import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoImage from '../../Assests/logoImage.jpg';
import './Header.css';

const Header = ({ activeCategory, setActiveCategory, categories }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            alt="Logo for my online shopping store"
            className="logo-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            {categories.map((category) => (
              <Nav.Link
                key={category}
                active={activeCategory === category.toLowerCase()}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
