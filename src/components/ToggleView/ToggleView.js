import React, { useState } from 'react';
import { MdOutlineGridView } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";

const CardViewToggle = () => {
  const [view, setView] = useState('grid');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="flex items-center gap-2 absolute top-0 right-0 mr-64 mt-32">
      <button
        className={`px-4 py-3 outline outline-1 outline-black rounded-md ${view === 'grid' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
        onClick={() => handleViewChange('grid')}
      >
        <MdOutlineGridView />
      </button>
      <button
        className={`px-4 py-3 outline outline-1  outline-black rounded-md ${view === 'list' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
        onClick={() => handleViewChange('list')}
      >
        <TfiViewListAlt />
      </button>
    </div>
  );
};

export default CardViewToggle;