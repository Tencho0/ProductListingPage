import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Header from './components/Header';
import ProductCounter from './components/ProductCounter';
import ProductGrid from './components/ProductGrid';
import Filtering from './components/Filtering';
import Sorting from './components/Sorting';
import ProductInfo from './components/ProductInfo';
import LoadMore from './components/LoadMore';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [sortType, setSortType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('bags');

  const handleFilterChange = (filterType, filterValue) => {
    const filteredData = data.filter((product) => {
      if (filterType === 'color') {
        return product.color === filterValue;
      }
      if (filterType === 'price') {
        return product.price <= parseInt(filterValue);
      }
      return true;
    });
    setFilteredProducts(filteredData);
  };

  // Function to handle sorting based on selected option
  const handleSortChange = (sortOption) => {
    setSortType(sortOption);
    // Implement sorting logic based on sortOption
    // Update the filteredProducts state accordingly
    // For example:
    const sortedData = [...filteredProducts];
    if (sortOption === 'alphabetical-az') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'alphabetical-za') {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'price-asc') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedData);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Update products based on the selected category
    if (category === 'bags') {
      let bagsOnly = data.filter(x=> x.category == "Bags");
      setProducts(bagsOnly);
    } else if (category === 'shoes') {
      let shoesOnly = data.filter(x=> x.category == "Shoes");
      setProducts(shoesOnly);
    }
  };

  return (
    <div className="App">
      <Header selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filtering onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-9">
            <ProductCounter
              totalProducts={products.length}
              displayedProducts={filteredProducts.length}
            />
            <Sorting onSortChange={handleSortChange} />
            <ProductGrid products={filteredProducts} />
            <LoadMore />
          </div>
        </div>
        <ProductInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
