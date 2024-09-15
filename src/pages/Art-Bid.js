import React, { useState } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import BidCardMain from '../components/ArtBidCard/BidCardMain';
import FilterMenu from '../components/SideFilterMenu/BidFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';

import image1 from '../assets/Aramco.png';
import image2 from '../assets/Neom.jpg';
import image3 from '../assets/Riyadh Expo 2030.png';
import image4 from '../assets/STC.jpg';
import BidFooter from '../components/BidPageFooter/BidFooter';


const sortOptions = ['recommended','newest','oldest'];


const ArtBid = () => {

  const projects = [
    {
      image: image1,
      title: 'Calligraphy Initiative',
      hostedBy:'Saudi Aramco',
      deadline: 'November 15, 2024',
      eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
      prize:'SAR 75,000 cash prize and featured in exhibitions in Aramco’s cultural centers',
    },
    {
      image: image2,
      title: 'Visual Arts Residency',
      hostedBy:'Neom',
      deadline: 'December 15, 2024',
      eligibility: 'Open to Saudi and international artists aged 18 and above with a strong portfolio in visual arts',
      prize:'SAR 100,000 grant for project development and exhibition of completed works at a prominent venue in NEOM',
    },
    {
      image: image3,
      title: 'Future Forward',
      hostedBy:'Expo 2030',
      deadline: 'January 15, 2025',
      eligibility: 'Open to Saudi and international artists across all levels',
      prize:'Opportunity to exhibit at Expo 2030 in Riyadh and featured in the official Expo 2030 art catalog',
    },
    {
      image: image4,
      title: 'Digital Art Innovation Challenge',
      hostedBy: 'Saudi Telecom (STC)',
      deadline: 'February 25, 2025',
      eligibility: 'Open to digital artists globally, with a focus on technological themes',
      prize:'SAR 100,000 cash prize and featured in a digital exhibition hosted by STC',
    },
    {image: image1,
      title: 'Calligraphy Initiative',
      hostedBy:'Saudi Aramco',
      deadline: 'November 15, 2024',
      eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
      prize:'SAR 75,000 cash prize and featured in exhibitions in Aramco’s cultural centers',
    },
    {
      image: image1,
      title: 'Calligraphy Initiative',
      hostedBy:'Saudi Aramco',
      deadline: 'November 15, 2024',
      eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
      prize:'SAR 75,000 cash prize and featured in exhibitions in Aramco’s cultural centers',
    },
    {
      image: image2,
      title: 'Visual Arts Residency',
      hostedBy:'Neom',
      deadline: 'December 15, 2024',
      eligibility: 'Open to Saudi and international artists aged 18 and above with a strong portfolio in visual arts',
      prize:'SAR 100,000 grant for project development and exhibition of completed works at a prominent venue in NEOM',
    },
    {
      image: image3,
      title: 'Future Forward',
      hostedBy:'Expo 2030',
      deadline: 'January 15, 2025',
      eligibility: 'Open to Saudi and international artists across all levels',
      prize:'Opportunity to exhibit at Expo 2030 in Riyadh and featured in the official Expo 2030 art catalog',
    },
    {
      image: image4,
      title: 'Digital Art Innovation Challenge',
      hostedBy: 'Saudi Telecom (STC)',
      deadline: 'February 25, 2025',
      eligibility: 'Open to digital artists globally, with a focus on technological themes',
      prize:'SAR 100,000 cash prize and featured in a digital exhibition hosted by STC',
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
          <FilterMenu />
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
            {projects.map((project, index) => (
              <BidCardMain key={index} project={project} />
            ))}
          </div>
          <div>
            {/* Footer always at the bottom */}
            <footer className="bg-gray-200 mt-auto">
              <BidFooter />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};  

export default ArtBid;
