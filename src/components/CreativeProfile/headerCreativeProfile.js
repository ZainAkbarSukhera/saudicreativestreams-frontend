import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeaderCreativeProfile = ({ initiativeName, host, pageViews, bidsSubmitted, daysRemaining }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center ml-4">
      {/* Left Section: Initiative Name and Host */}
      <div>
        <div className="border-b-2 border-black mb-2">
          <h1 className="text-3xl font-bold mb-4">{initiativeName}</h1>
        </div>
        <p className="text-lg text-red-500">Hosted by: {host}</p>
      </div>

      {/* Follow Button and Social Media Links */}
      <div className="flex flex-row  items-start space-x-2 mt-4 lg:mt-0">
        <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700">
          Follow
        </button>

        <div className="flex items-center">
          <a href="https://www.instagram.com/theqandeel" target="_blank" className="text-blue-500 hover:underline mr-4">
            <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
          </a>
          <a href="https://www.linkedin.com/in/theqandeel" target="_blank" className="text-blue-500 hover:underline">
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />@theqandeel
          </a>
        </div>
      </div>

      {/* Right Section: Stats */}
      <div className="flex flex-col items-end space-y-2 mt-4 mr-8 lg:mt-0">
        <div className="text-sm text-gray-600 mb-2">
          Page Views: <strong>{pageViews}</strong>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Bids Submitted: <strong>{bidsSubmitted}</strong>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Days Remaining: <strong>{daysRemaining}</strong>
        </div>
      </div>
    </div>
  );
};

export default HeaderCreativeProfile;
