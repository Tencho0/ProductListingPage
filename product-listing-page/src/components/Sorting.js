import React from 'react';

const Sorting = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    onSortChange(selectedOption); // Call the onSortChange prop with the selected option
  };

  return (
    <div className="sorting">
      <label>Sort By:</label>
      <select onChange={handleSortChange}>
        <option value="">Select an option</option>
        <option value="alphabetical-az">Alphabetical A-Z</option>
        <option value="alphabetical-za">Alphabetical Z-A</option>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
