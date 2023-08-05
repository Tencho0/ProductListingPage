import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ProductCounter from './components/ProductCounter/ProductCounter';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Filtering from './components/Filtering/Filtering';
import Sorting from './components/Sorting/Sorting';
import ProductInfo from './components/ProductInfo/ProductInfo';
import LoadMore from './components/LoadMore/LoadMore';
import Footer from './components/Footer/Footer';
import data from './data.json'
import './App.css';

function App() {
  const [products, setProducts] = useState(data.products);
  const [activeCategory, setActiveCategory] = useState('Bags');
  const [currentCount, setCurrentCount] = useState(3);
  const [totalCount, setTotalCount] = useState(data.products.length);

  const colors = [...new Set(data.products.map((product) => product.color))];
  const categories = [...new Set(data.products.map((product) => product.category))];

  const [selectedColors, setSelectedColors] = useState([]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const filteredProducts = data.products.filter((product) => {
      if (selectedColors.length === 0) {
        return true;
      } else {
        return selectedColors.includes(product.color);
      }
    });

    setProducts(filteredProducts);
    setCurrentCount(3);
    setTotalCount(filteredProducts.length);
  }, [selectedColors]);

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
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
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
      <Footer />
    </div>
  );
}

export default App;
