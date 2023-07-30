import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductCounter from './components/ProductCounter';
import ProductGrid from './components/ProductGrid';
import Filtering from './components/Filtering';
import Sorting from './components/Sorting';
import ProductInfo from './components/ProductInfo';
import LoadMore from './components/LoadMore';
import Footer from './components/Footer';
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data.products);
  const [activeCategory, setActiveCategory] = useState('Bags');
  const [currentCount, setCurrentCount] = useState(10);
  const [totalCount, setTotalCount] = useState(data.products.length);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./data.json');
  //       const data = await response.json();
  //       setProducts(data.products);
  //       setTotalCount(data.totalCount);
  //     } catch (error) {
  //       console.error('Error fetching data from data.json:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  const priceRange = { min: 10, max: 500 };

  const [selectedColors, setSelectedColors] = useState([]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [sortOption, setSortOption] = useState('alphabetical-a-z');

  const handleColorChange = (color) => {
    // Check if the color is already selected
    const isSelected = selectedColors.includes(color);

    // Create a new array with updated selected colors based on the user's action
    let updatedColors;
    if (isSelected) {
      // If the color is already selected, remove it from the selectedColors array
      updatedColors = selectedColors.filter((c) => c !== color);
    } else {
      // If the color is not selected, add it to the selectedColors array
      updatedColors = [...selectedColors, color];
    }

    setSelectedColors(updatedColors);
  };

  const handlePriceChange = (type, value) => {
    if (type === 'min') {
      setMinPrice(value);
    } else if (type === 'max') {
      setMaxPrice(value);
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleLoadMore = () => {
    // Implement logic to load more products here
    // For demonstration purposes, let's just increase the current count by 10
    setCurrentCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ProductCounter currentCount={currentCount} totalCount={totalCount} />
      <Filtering
        colors={colors}
        selectedColors={selectedColors}
        handleColorChange={handleColorChange}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handlePriceChange={handlePriceChange}
      />
      <Sorting sortOption={sortOption} handleSortChange={handleSortChange} />
      <ProductInfo category={activeCategory} description="Short description of the selected category." />
      <ProductGrid
        products={products}
        filteredColors={selectedColors}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortOption={sortOption}
      />
      <LoadMore onLoadMore={handleLoadMore} isAllLoaded={currentCount >= totalCount} />
      <Footer />
    </div>
  );
}

export default App;
