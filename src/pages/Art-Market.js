import React, { useState } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import BidCardMain from '../components/ArtBidCard/BidCardMain';
import MarketFilterMenu from '../components/SideFilterMenu/MarketFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';

import im1 from '../assets/After Marylin.png';
import im2 from '../assets/Frog.png';
import im3 from '../assets/Landscapes-13.png';
import im4 from '../assets/Landscapes-11.png';

import BidFooter from '../components/BidPageFooter/BidFooter';


const sortOptions = ['recommended', 'newest', 'oldest'];

const ArtMarket = () => {

  const artworks = [
    {
      image: im1,
      title: 'After Marylin',
      artist: 'Noura Al-Mutairi',
      initialLikes: 25700,
      initialViews: 50000,
    },
    {
      image: im4,
      title: 'Landscapes (XI)',
      artist: 'Ahmed Al-Turki',
      initialLikes: 19500,
      initialViews: 37000,
    },
    {
      image: im2,
      title: 'Frog',
      artist: 'Hanan Al-Ahmadi',
      initialLikes: 17400,
      initialViews: 30000,
    },
    {
      image: im3,
      title: 'Landscapes (VIII)',
      artist: 'Ahmed Al-Turki',
      initialLikes: 15400,
      initialViews: 25000,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow">
        {/* Sidebar filter menu on the left */}
        <aside className="w-1/5 p-4">
          <MarketFilterMenu />
        </aside>
  
        {/* Main content area in the middle */}
        <main className="flex-grow p-8">
          {/* Search bar, toggle, and dropdown */}
          <div className="mb-4">
            <SearchBar />
          </div>
          <div className="flex justify-between items-center mb-4">
            <CardViewToggle />
            <SortDropdown options={sortOptions} />
          </div>
  
          {/* Filtered Cards */}
          <div className="mb-52">
            <FilteredCards />
          </div>
  
          {/* Cards Section (Artworks rendering here) */}
          <div className="grid grid-cols-4 gap-2 mt-8">
            {artworks.map((artwork, index) => (
              <BidCardMain key={index} project={artwork} />
            ))}
          </div>

          {/* Footer */}
          <footer className="bg-gray-200 mt-auto">
            <BidFooter />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ArtMarket;
