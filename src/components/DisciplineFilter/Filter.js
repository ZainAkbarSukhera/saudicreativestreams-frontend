import React, { useState } from 'react';

const Filter = ({ filters, selectedFilter, onFilterSelect }) => {
  return (
    <div className="flex space-x-5 mb-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${
            selectedFilter === filter.name
              ? `bg-${filter.color} text-white`
              : `border-${filter.color} text-${filter.color}`
          }`}
          onClick={() => onFilterSelect(filter.name)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
