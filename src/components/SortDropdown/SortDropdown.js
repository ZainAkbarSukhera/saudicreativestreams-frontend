import React from 'react';

const SortDropdown = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div>
      <label className="absolute top-0 right-0 flex items-center mr-48 mt-28 text-sm text-yankees-blue font-montserrat-medium">Sort</label>
       <div className="absolute top-0 right-0 flex items-center mr-16 mt-32">
      <select
        className="px-4 py-2 border-black rounded-md text-yankees-blue focus:outline-none focus:ring-2 focus:gray-800 focus:border-transparent"
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    </div>
   
  );
};

export default SortDropdown;
