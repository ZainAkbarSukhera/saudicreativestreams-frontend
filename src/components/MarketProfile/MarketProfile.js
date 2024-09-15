import React, {useState} from "react";

import MarketCardLanding from "../ArtMarketCard/marketCard";
import im1 from '../../assets/After Marylin.png';
import im2 from '../../assets/Frog.png';
import im3 from '../../assets/Landscapes-13.png';
import im4 from '../../assets/Landscapes-11.png';

import image1 from '../../assets/alWaleedLogo.png';
import image2 from '../../assets/artJameelLogo.png';
import image3 from '../../assets/miskLogo.png';
import image4 from '../../assets/naila_logo.png'

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

const patrons = [
  {
    name: 'Public Investment Fund',
    image: image1, // replace with actual image path
  },
  {
    name: 'Misk Foundation',
    image: image3, // replace with actual image path
  },
  {
    name: 'Ithra (King Abdulaziz Center for World Culture)',
    image: image2, // replace with actual image path
  },
  {
    name: 'Heritage Commission (Ministry of Culture)',
    image: image4, // replace with actual image path
  },
  {
    name: 'Saudi Art Council',
    image: image3, // replace with actual image path
  },
];

const MarketProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

const Categories=["PRIMARY MARKET","SECONDARY MARKET","NFTs", "PRINTS & SOUVENIRS"];

  return (
    <div className=" border-t border-black container mx-auto p-4 bg-white"> {/* White background for container */}
      {/* Categories */}
      <div className="flex space-x-6 justify-start mb-2">
        {Categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-bold border-b-4 ${
              selectedCategory === category
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex space-x-4 mb-8">
        {artworks.map((art, index) => (
          <MarketCardLanding key={index} {...art} />
        ))}
      </div>

      <div className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-semibold text-yankees-blue uppercase mb-4">Projects</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-black mb-6" />
      </div>

      {/* Project Cards */}
      <div className="container mx-auto flex justify-center space-x-8">
        {patrons.map((patron, index) => (
          <div key={index} className="text-center">
            <img
              src={patron.image}
              alt={patron.name}
              className="h-16 w-auto object-contain mx-auto mb-2"
            />
            <p className="text-yankees-blue text-sm font-semibold">{patron.name}</p>
            <p className="text-yankees-blue text-xs font-semibold">{patron.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>

      <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-semibold text-yankees-blue uppercase mb-4">VIEW SIMILAR ARTIST</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-black mb-6" />
      </div>

      {/* Artists Cards */}
      <div className="container mx-auto flex justify-center space-x-8">
        {patrons.map((patron, index) => (
          <div key={index} className="text-center">
            <img
              src={patron.image}
              alt={patron.name}
              className="h-16 w-auto object-contain mx-auto mb-2"
            />
            <p className="text-yankees-blue text-sm font-semibold">{patron.name}</p>
          
          </div>
        ))}
      </div>

    </footer>
    
      </div>
      </div>
  );
};

export default MarketProfile;