import React from "react";

import LearnCardMain from '../components/ArtLearnCard/LearnCardMain'; 
import drawingIcon from '../assets/drawing_icon.png';
import calligraphyIcon from '../assets/calligraphy_icon.png';
import paintingIcon from '../assets/painting_icon.png';
import photographyIcon from '../assets/photography_icon.png';
import printMakingIcon from '../assets/printMaking_icon.png';
import sculptureIcon from '../assets/sculpture_icon.png';

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import BidCardMain from '../components/ArtBidCard/BidCardMain';
import LearnFilterMenu from '../components/SideFilterMenu/LearnFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';
import BidFooter from '../components/BidPageFooter/BidFooter';

import CategoryComponent from "../components/ArtLearnFooter/ArtLearnFooter";


const sortOptions = ['recommended','newest','oldest'];


const ArtLearn = () => {


  const workshops = [
    {
      title: "Digital Illustration",
      date: "September 20, 2024",
      location: "Online / Remote",
      instructor: "Omar Al-Harbi, Digital Artist",
      duration: "20 hours",
      tag: "Drawing & Illustration",
      tagColor: "bg-pewter-blue",
      icon: drawingIcon,
    },
    {
      title: "Arabic Calligraphy and Modern Art",
      date: "October 5, 2024",
      location: "Online / Remote",
      instructor: "Yousef Al-Qahtani, Calligrapher",
      duration: "12 hours",
      tag: "Calligraphy",
      tagColor: "bg-yankees-blue",
      icon: calligraphyIcon,
    },
    {
      title: "Photography in Urban Landscapes",
      date: "November 1, 2024",
      location: "Online / Remote",
      instructor: "Laila Al-Saadi, Photographer",
      duration: "10 hours",
      tag: "Photography",
      tagColor: "bg-madder-lake",
      icon: photographyIcon,
    },
    {
      title: "From Concept to Creation",
      date: "November 20, 2024",
      location: "Online / Remote",
      instructor: "Majid Al-Turki, Sculptor",
      duration: "6 hours",
      tag: "Sculpture",
      tagColor: "bg-royal-orange",
      icon: sculptureIcon,
    },
    {
      title: "Exploring Techniques and Creativity",
      date: "December 15, 2024",
      location: "Online / Remote",
      instructor: "Layla Al-Otaibi, Printmaker",
      duration: "15 hours",
      tag: "Printmaking",
      tagColor: "bg-deep-peach",
      icon: printMakingIcon,
    },
    {
      title: "Advanced Painting Techniques",
      date: "March 20, 2025",
      location: "Online / Remote",
      instructor: "Huda Al-Rashid, Fine Artist",
      duration: "8 hours",
      tag: "Painting",
      tagColor: "bg-palatinate-purple",
      icon: paintingIcon,
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
          <LearnFilterMenu />
        </aside>
  
        {/* Main content area in the middle */}
        <main className="flex-grow p-8">
          {/* Search bar, toggle, and dropdown */}
          <div className="mb-4">
            <SearchBar placeholderValue={"Search Workshops...."} />
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
          {workshops.map((workshop, index) => (
          <LearnCardMain key={index} {...workshop} />
        ))}
          </div>
          <div>
            {/* Footer always at the bottom */}
            <footer className="bg-gray-200 mt-auto">
              <CategoryComponent />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};  

export default ArtLearn;
