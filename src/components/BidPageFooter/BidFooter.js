import React from 'react';

import image1 from '../../assets/alWaleedLogo.png';
import image2 from '../../assets/artJameelLogo.png';
import image3 from '../../assets/miskLogo.png';
import image4 from '../../assets/naila_logo.png'

const Footer = () => {
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

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-semibold text-yankees-blue uppercase mb-4">View Patrons</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-black mb-6" />
      </div>

      {/* Patron Cards */}
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
  );
};

export default Footer;
