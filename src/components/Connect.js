import React from 'react';
import ConnectCard from './ArtConnectCard/ConnectCardLanding';  

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

const Connect = () => {
  const creatives = [
    {
      profileImage: fPortrait,
      topImages: [f1, f2, f3],
      name: 'Fatima Al-Zahrani',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Graphic Designer',
      initialLikes: 22000,
      initialViews: 45000,
    },
    {
      profileImage: oPortrait,
      topImages: [o1, o2, o3],
      name: 'Omar Al-Harbi',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Digital Artist',
      initialLikes: 18000,
      initialViews: 36000,
    },
    {
      profileImage: yPortrait,
      topImages: [y1, y2, y3],
      name: 'Yousef Al-Qahtani',
      location: 'Makkah, Saudi Arabia',
      profession: 'Photographer',
      initialLikes: 15000,
      initialViews: 30000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Laila Al-Saadi',
      location: 'Dammam, Saudi Arabia',
      profession: 'Photographer',
      initialLikes: 12000,
      initialViews: 24000,
    },
  ];

  return (
    <div className="p-8 bg-yankees-blue">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-white font-montserrat-medium">
          Art-Connect
        </h2>
        <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
          Create Your Profile
        </button>
      </div>

      <p className="text-base text-white md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 font-montserrat-regular">
        Explore Our Creative Directory
      </p>
      <p className="text-base text-white md:text-base lg:text-lg mt-2 mb-4 font-montserrat-regular">
        Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {creatives.map((creative, index) => (
          <ConnectCard key={index} {...creative} /> 
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

export default Connect;
