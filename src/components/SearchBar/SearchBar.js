import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholderValue }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search action here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="absolute top-0 right-0 flex items-center mr-96 mt-32">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholderValue}
          className="w-72 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-md border border-black bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2"
        >
          <FaSearch className="h-6 w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;