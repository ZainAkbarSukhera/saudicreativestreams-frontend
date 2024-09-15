// Bid.js
import React from 'react';
import BidCard from './ArtBidCard/BidCardLanding';  // Import BidCard component
import image1 from '../assets/Aramco.png';
import image2 from '../assets/Neom.jpg';
import image3 from '../assets/Riyadh Expo 2030.png';
import image4 from '../assets/STC.jpg';
import image5 from '../assets/World Cup 2034.jpg';
import { BiData } from 'react-icons/bi';

const projects = [
  {
    image: image1,
    title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
    deadline: 'November 15, 2024',
    eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
    buttonText: 'Apply',
  },
  {
    image: image2,
    title: 'NEOM - Future of Living: Architectural Design Competition',
    deadline: 'December 15, 2024',
    eligibility: 'Open to Saudi architects',
    buttonText: 'Apply',
  },
  {
    image: image3,
    title: 'Expo 2030 - Future Forward',
    deadline: 'January 15, 2025',
    eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
    buttonText: 'Apply',
  },
  {
    image: image4,
    title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
    deadline: 'October 20, 2024',
    eligibility: 'Open to Saudi tech developers and digital artists',
    buttonText: 'Apply',
  },
  {
    image: image5,
    title: 'FIFA 2034 - Game on',
    deadline: 'March 1, 2025',
    eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
    buttonText: 'Apply',
  }
];

const Bid = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
            Art-Bid
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Submit Your Idea
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
          Join Exciting Opportunities
        </p>
        <p className="text-base md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-regular">
          This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
        </p>
      </div>

      {/* Cards in a Horizontal Line */}
      <div className="flex overflow-x-auto space-x-2">
        {projects.map((project, index) => (
          <BidCard key={index} project={project} />
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Bid;
