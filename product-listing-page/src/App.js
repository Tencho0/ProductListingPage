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
import data from './data.json'
import './App.css';

function App() {
  const [products, setProducts] = useState(data.products);
  const [activeCategory, setActiveCategory] = useState('Bags');
  const [currentCount, setCurrentCount] = useState(3);
  const [totalCount, setTotalCount] = useState(data.products.length);

  const colors = data.products.map((product) => product.color);

  const [selectedColors, setSelectedColors] = useState([]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [sortOption, setSortOption] = useState('alphabetical-a-z');

  const handleColorChange = (color) => {
    const isSelected = selectedColors.includes(color);

    let updatedColors;
    if (isSelected) {
      updatedColors = selectedColors.filter((c) => c !== color);
    } else {
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
    const newCount = currentCount + 3;
    const updatedCount = newCount <= totalCount ? newCount : totalCount;

    setCurrentCount(updatedCount);
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
        products={products.slice(0, currentCount)}
        filteredColors={selectedColors}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortOption={sortOption}
      />
      {currentCount < totalCount && <LoadMore onLoadMore={handleLoadMore} />}
      {/* <LoadMore onLoadMore={handleLoadMore} isAllLoaded={currentCount >= totalCount} /> */}
      <Footer />
    </div>
  );
}

export default App;
