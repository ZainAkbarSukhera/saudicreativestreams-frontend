import React, { useState } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import BidCardMain from '../components/ArtBidCard/BidCardMain';
import MarketFilterMenu from '../components/SideFilterMenu/MarketFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';
import MarketProfile from '../components/MarketProfile/MarketProfile';

import im1 from '../assets/After Marylin.png';
import im2 from '../assets/Frog.png';
import im3 from '../assets/Landscapes-13.png';
import im4 from '../assets/Landscapes-11.png';

import image1 from '../assets/Aramco.png';
import image2 from '../assets/Neom.jpg';
import image3 from '../assets/Riyadh Expo 2030.png';
import image4 from '../assets/STC.jpg';
import BidFooter from '../components/BidPageFooter/BidFooter';


const sortOptions = ['recommended','newest','oldest'];


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
  

  // return (
  //   <div>
  //     <Navbar />
  //     {/* <FilterMenu />
  //     <SearchBar />
  //     <CardViewToggle />
  //     <SortDropdown options={sortOptions} />
  //     <FilteredCards projects={projects} /> */}
  //     {/* <div className="flex top-0 right-0  mt-64 ">
  //     <BidCardMain project={test} />
  //     </div> */}
  //     <div className='container'>
  //     <div className=" grid grid-cols-4 absolute space-x-2 top-0 right-0 mt-60 mr-8 ">
  //       {projects.map((project, index) => (
  //         <BidCardMain key={index} project={project} />
  //       ))}
  //     </div>
  //     </div>
      
  //     <BidFooter />
  //   </div>
    
  //   <div className="h-screen flex flex-col">  {/*  Wrap everything in a flex container with column layout for vertical stacking  */}
  //   <Navbar />
  //   <div className="flex flex-col overflow-y-auto"> {/* Another flex container for FilterMenu, SearchBar, SortDropdown and FilteredCards */}
  //     <FilterMenu />
  //     <div className="flex items-center mb-4"> {/* Add margin-bottom for spacing  */}
  //       <SearchBar />
  //       <SortDropdown options={sortOptions} className="ml-4" /> {/* Add margin-left for spacing */}
  //     </div>
  //     <FilteredCards />
  //   </div>
  //   <div className="flex flex-wrap justify-between p-8"> {/* Flex container for BidCardMain with wrap and justify-between for grid layout */}
  //     {projects.map((project, index) => (
  //       <BidCardMain key={index} project={project} className="w-1/4" /> 
  //     ))}
  //   </div>
  // </div>
  
  return (
    <div className="min-h-screen flex flex-col" class="ng-View" autoscroll="true">
      {/* Navbar at the top */}
      <Navbar />
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow"  >
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
          <div className="mb-52"> {/* Added bottom margin to ensure spacing */}
            <FilteredCards />
          </div>
  
          {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
          <div className="grid grid-cols-4 gap-2 mt-8"> {/* Added margin-top for extra spacing */}
            {artworks.map((project, index) => (
              <MarketProfile key={index} project={project} />
            ))}
          </div>
          <div>
            {/* Footer always at the bottom */}
            {/* <footer className="bg-gray-200 mt-auto">
              <BidFooter />
            </footer> */}
          </div>
        </main>
      </div>
    </div>
  );
};  

export default ArtMarket;
