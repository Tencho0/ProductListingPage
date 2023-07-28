import React from 'react';

const Header = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>
      <nav className="nav">
        <button
          className={`nav-btn ${selectedCategory === 'bags' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('bags')}
        >
          Bags
        </button>
        <button
          className={`nav-btn ${selectedCategory === 'shoes' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('shoes')}
        >
          Shoes
        </button>
      </nav>
    </header>
  );
};

export default Header;
