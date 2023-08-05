import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import ProductCounter from '../ProductCounter/ProductCounter';
import ProductGrid from '../ProductGrid/ProductGrid';
import Filtering from '../Filtering/Filtering';
import Sorting from '../Sorting/Sorting';
import ProductInfo from '../ProductInfo/ProductInfo';
import LoadMore from '../LoadMore/LoadMore';
import Footer from '../Footer/Footer';
import data from '../../data.json'
import './ProductShop.css';

function ProductShop() {
    const originalProducts = data.products;
    const [products, setProducts] = useState(originalProducts);
    const [activeCategory, setActiveCategory] = useState('Bags');
    const [currentCount, setCurrentCount] = useState(3);
    const [totalCount, setTotalCount] = useState(originalProducts.length);
    const [selectedColors, setSelectedColors] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState('alphabetical-a-z');

    const colors = [...new Set(data.products.map((product) => product.color))];
    const categories = [...new Set(data.products.map((product) => product.category))];

    useEffect(() => {
        // Filter products based on selected category and colors
        const filteredProducts = originalProducts.filter((product) => {
            const isCategoryMatch = activeCategory === product.category;
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isCategoryMatch && isColorMatch;
        });

        setProducts(filteredProducts);
        setTotalCount(filteredProducts.length);
        setCurrentCount(3);
    }, [selectedColors, activeCategory, originalProducts]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        const filteredProducts = data.products.filter(
            (product) => activeCategory === category && (selectedColors.length === 0 || selectedColors.includes(product.color))
        );
        setProducts(filteredProducts);
        setCurrentCount(3);
        setTotalCount(filteredProducts.length);
    };

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
                setActiveCategory={handleCategoryClick}
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
                activeCategory={activeCategory}
            />
            {currentCount < totalCount && <LoadMore onLoadMore={handleLoadMore} />}
            <Footer />
        </div>
    );
}

export default ProductShop;
