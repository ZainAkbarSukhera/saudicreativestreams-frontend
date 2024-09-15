import React from 'react';
import IntermediariesCard from './StatsCard/StatsCard';

import athr from '../assets/athr_logo.png';
import hayy from '../assets/hayy_logo.jpg';
import hafez from '../assets/hafez_logo.png';
import naila from '../assets/naila_logo.png';



const Intermediaries = () => {
  const exampleData = [
    {
      images: [],
      logo: athr,
      title: 'Athr Gallery',
      location: 'Jeddah, Saudi Arabia',
      stats: {
        artworksBought: 30,
        artworksResold: 20,
        artistsSupported: 25,
        financialContribution: '350,000 SAR',
      },
    },
    {
      images: [],
      logo: hafez,
      title: 'Hafez Gallery',
      location: 'Jeddah, Saudi Arabia',
      stats: {
        artworksBought: 33,
        artworksResold: 10,
        artistsSupported: 17,
        financialContribution: '215,000 SAR',
      },
    },
    {
      images: [],
      logo: naila,
      title: 'Naila Art Gallery',
      location: 'Riyadh, Saudi Arabia',
      stats: {
        artworksBought: 23,
        artworksResold: 7,
        artistsSupported: 12,
        financialContribution: '176,000 SAR',
      },
    },
    {
      images: [],
      logo: hayy,
      title: 'Hayy Jameel',
      location: 'Jeddah, Saudi Arabia',
      stats: {
        artworksBought: 19,
        artworksResold: 5,
        artistsSupported: 9,
        financialContribution: '100,000 SAR',
      },
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-medium text-yankees-blue mb-10">
            Art-Intermediaries
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Partner with Us
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold font-montserrat-regular text-yankees-blue mb-2">
        Connect with Key Art Market Players
        </p>
        <p className="text-base md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-regular">
        Art galleries, creative agencies, and other intermediaries play a crucial role in connecting artists with the broader market. Through 
        SCS, artists can explore partnerships with leading entities that will help them navigate the art world, enhance their visibility and 
        achieve their artistic ambitions
        </p>
      </div>

      <div className="flex justify-around items-center space-x-4">
        {exampleData.map((data, index) => (
          <IntermediariesCard key={index} {...data} />
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

export default Intermediaries;
