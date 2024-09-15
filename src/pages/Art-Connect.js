import React from "react";

import ConnectCardMain from '../components/ArtConnectCard/ConnectCardMain'; 

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import Navbar from '../components/NavigationBar/Navbar';
import ConnectFilterMenu from '../components/SideFilterMenu/ConnectFilterMenu';

import fPortrait from '../assets/fatimaPortrait.png';
import f1 from '../assets/fatima1.png';
import f2 from '../assets/fatima2.png';
import f3 from '../assets/fatima3.png';

import oPortrait from '../assets/omarPortrait.png';
import o1 from '../assets/omar1.png';
import o2 from '../assets/omar2.png';
import o3 from '../assets/omar3.png';

import yPortrait from '../assets/yousafPortrait.png';
import y1 from '../assets/yousaf1.png';
import y2 from '../assets/yousaf2.png';
import y3 from '../assets/yousaf3.png';

import lPortrait from '../assets/lailaPortrait.png';
import l1 from '../assets/laila1.png';
import l2 from '../assets/laila2.png';
import l3 from '../assets/laila3.png';


const sortOptions = ['recommended','newest','oldest'];




const ArtConnect = () => {

  const creatives = [
    {
      profileImage: fPortrait,
      topImages: [f1, f2, f3],
      name: 'Abdulaziz Albassam',
      location: 'Khobar, Saudi Arabia',
      profession: 'Typographic Designer',
      initialLikes: 500000,
      initialViews: 750000,
    },
    {
      profileImage: lPortrait,
      topImages: [f1, f2, f3],
      name: 'Abdullah Qandeel',
      location: 'Jeddah, Saudi Arabia',
      profession: 'CONTEMPORARY ARTIST',
      initialLikes: 500000,
      initialViews: 750000,
    },
    {
      profileImage: oPortrait,
      topImages: [f1, f2, f3],
      name: 'Abdullah Qandeel',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Contemporary Artist',
      initialLikes: 500000,
      initialViews: 750000,
    },
    {
      profileImage: oPortrait,
      topImages: [o1, o2, o3],
      name: 'Sofana Dahlan',
      location: 'Makkah, Saudi Arabia',
      profession: 'Digital Artist',
      initialLikes: 450000,
      initialViews: 650000,
    },
    {
      profileImage: yPortrait,
      topImages: [y1, y2, y3],
      name: 'Hadel Al-Saleh',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Graphic Designer',
      initialLikes: 350000,
      initialViews: 500000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Fawaz Alotaibi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Abstract Painter',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Bader Halawani',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Portrait Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Dalya Katoah',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Printmaker',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Khaled Alharbi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Ceramic Sculptor',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Shatha Abuzinda',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Lettering Artist',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Salam Aljishi',
      location: 'Khobar, Saudi Arabia',
      profession: 'Illustrator',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Rudwan Batterjee',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Motion Graphics Designer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Yazeed Alyahya',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Product Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Majed  Alosailan',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Muralist',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Omar Alabdali',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Landscape Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Hattan Rayes',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Lithographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Omar Alkadhi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Marble Sculptor',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Ahmad Aljunaid',
      location: 'Dhahran, Saudi Arabia',
      profession: 'Calligrapher',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Ziad Alafaliq',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Visual Designert',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Mohammad Alharbi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Multimedia Specialist',
      initialLikes: 275000,
      initialViews: 475000,
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
          <ConnectFilterMenu />
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
          {creatives.map((creative, index) => (
          <ConnectCardMain key={index} {...creative} />
        ))}
          </div>
        </main>
      </div>
    </div>
  );
};  

export default ArtConnect;
