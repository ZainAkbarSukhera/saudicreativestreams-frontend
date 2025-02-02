import React, { useState } from "react";

import MarketCardMain from "../ArtMarketCard/MarketCardMain";
import SnapShot from "../SnapShot";
import MarketCategory from "../MarketProfile/CategoryMarkets";
import im1 from '../../assets/After Marylin.png';
import im2 from '../../assets/Frog.png';
import im3 from '../../assets/Landscapes-13.png';
import im4 from '../../assets/Landscapes-11.png';
import im5 from '../../assets/abq_pm_4.png';
import im6 from '../../assets/fawaz2.jpg';
import im7 from '../../assets/abq_pm_6.PNG';
import im8 from '../../assets/abq_pm_2.jpg';
import im9 from '../../assets/ahmadaljunaid3.jpeg'
import im10 from '../../assets/hattan5.jpg';
import im11 from '../../assets/shady3.png';
import im12 from '../../assets/khaled1.jpg';
import im13 from '../../assets/hadel1.png';
import im14 from '../../assets/abq_pm_1.PNG';
import im15 from '../../assets/sofana6.png';

import image1 from '../../assets/alWaleedLogo.png';
import image2 from '../../assets/artJameelLogo.png';
import image3 from '../../assets/miskLogo.png';
import image4 from '../../assets/naila_logo.png';

import a1 from "../../assets/nugamshi_portrait.png";
import a2 from "../../assets/halla_portrait.jpg";
import a3 from "../../assets/basma_portrait.png";
import a4 from "../../assets/shaker_portrait.png";

import { DiVim } from "react-icons/di";

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
  {
    image: im5,
    title: 'Untitled (2011)',
    artist: 'Abdullah Qandeel',
    initialLikes: 18700,
    initialViews: 21000,
  },
  {
    image: im6,
    title: 'Kaleidoscope (2024)',
    artist: 'Fawaz Alotaibi',
    initialLikes: 10400,
    initialViews: 15000,
  },
  {
    image: im7,
    title: 'Apples & Oranges (2022)',
    artist: 'Abdullah Qandeel',
    initialLikes: 195000,
    initialViews: 37000,
  },
  {
    image: im8,
    title: 'Electrostatic Tree (2020)',
    artist: 'Abdulah Qandeel',
    initialLikes: 18700,
    initialViews: 21000,
  },
  {
    image: im9,
    title: 'B&W (2022)',
    artist: 'Ahmad Aljunaid',
    initialLikes: 25700,
    initialViews: 50000,
  },
  {
    image: im10,
    title: 'Pyramids IX (2024)',
    artist: 'Hattan Rayes',
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: im11,
    title: 'Paris (2024)',
    artist: 'Shady Sirajuddin',
    initialLikes: 17400,
    initialViews: 30000,
  },
  {
    image: im12,
    title: 'Contemplate (2023)',
    artist: 'Khalid Aharbi',
    initialLikes: 18700,
    initialViews: 21000,
  },
  {
    image: im13,
    title: 'SEVA (2024)',
    artist: 'Hadel Alsaleh',
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: im14,
    title: 'Key to Serenity (2019)',
    artist: 'Abdullah Qandeel',
    initialLikes: 18700,
    initialViews: 21000,
  },
  {
    image: im15,
    title: 'Eurostar (2024)',
    artist: 'Sofana Dahlan',
    initialLikes: 25700,
    initialViews: 50000,
  },
];

const artists = [
  {
    name: 'Nugamshi',
    image: a1, // replace with actual image path
  },
  {
    name: 'Halla bint Khalid',
    image: a2, // replace with actual image path
  },
  {
    name: 'Basma Felemban',
    image: a3, // replace with actual image path
  },
  {
    name: 'Shaker Kashgari',
    image: a4, // replace with actual image path
  },

];


const MarketProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

  const Categories = ["PRIMARY MARKET", "SECONDARY MARKET", "NFTs","PRINTS & SOUVENIRS"];

  return (
    <div className=" container mx-auto p-4 bg-white">
      {/* Categories */}
      <div className=" border-b  border-black flex space-x-6 justify-start mb-2">
        {Categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular border-b-4 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {artworks.map((art, index) => (
          <MarketCardMain key={index} {...art} />
        ))}
      </div>

      <div className="bg-gray-200 mt-auto">
        <MarketCategory />
      </div>

      <footer className="bg-white py-8">
        <SnapShot />
      </footer>
    </div>
  );
};

export default MarketProfile;
