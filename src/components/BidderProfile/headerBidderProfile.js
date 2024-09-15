import React from 'react';

const HeaderBidderProfile = ({ initiativeName, host, pageViews, bidsSubmitted, daysRemaining }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center ml-4">
      <div>
        <div className="border-b-2 border-black mb-2">
          <h1 className="text-3xl font-bold mb-4">{initiativeName}</h1>
        </div>
        <p className="text-lg text-red-500">Hosted by: {host}</p>
      </div>
 
      <div className="flex  flex-col items-end space-x-4 mt-4 mr-8 lg:mt-0">
        <div className="text-sm text-gray-600 mb-2">Page Views: <strong className='ml-48'>{pageViews}</strong></div>
        <div className="text-sm text-gray-600 mb-2">Bids Submitted: <strong className='ml-48'>{bidsSubmitted}</strong></div>
        <div className="text-sm text-gray-600 mb-2">Days Remaining: <strong className='ml-48'>{daysRemaining}</strong></div>
      </div>

     
    </div>
  );
};

export default HeaderBidderProfile;

