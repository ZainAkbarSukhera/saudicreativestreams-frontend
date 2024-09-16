import React from 'react';
import { MdHexagon } from "react-icons/md";

const BidderProfile = ({
  initiativeName,
  host,
  pageViews,
  bidsSubmitted,
  daysRemaining,
  imageUrl,
  keyDates,
  eligibilityCriteria,
  overview,
  goals,
  bidRequirements,
  selectionCriteria,
  prizesAndCompensation
}) => {
  return (
    <div className="container mx-auto ml-4">
    
     <div className='border-t border-black'>
       {/* Overview Section */}
       <div className="mb-8">
        <span className="text-lg font-montserrat-medium  mb-4">Overview:</span>
        <p className="text-gray-700 leading-relaxed font-montserrat-regular">
          {overview}
        </p>
      </div>

      {/* Goals Section */}
        <div className="mb-8">
          <h2 className="text-lg font-montserrat-medium mb-4">Goals</h2>
          <ul className="pl-1 text-gray-700 space-y-2">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
                <span className='font-montserrat-regular'>{goal}</span>
              </li>
            ))}
          </ul>
      </div>


      {/* Bid Requirements Section */}
      <div className="mb-8">
        <h2 className="text-lg font-montserrat-medium mb-4">Bid Requirements</h2>
        <ol className="list-decimal pl-6 text-gray-700 font-montserrat-regular space-y-2">
          {bidRequirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ol>
      </div>

      {/* Selection Criteria Section */}
      <div className="mb-8">
        <h2 className="text-lg font-montserrat-medium mb-4">Selection Criteria</h2>
        <ul className=" text-gray-700 space-y-2">
          {selectionCriteria.map((criteria, index) => (
            <li key={index} className="flex items-start">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-regular'>{criteria}</span>
            </li>
          ))}
        </ul>
      </div>


      {/* Prizes and Compensation Section */}
      <div className="mb-8">
        <h2 className="text-lg font-montserrat-medium mb-4">Prizes and Compensation</h2>
        <ul className="text-gray-700 space-y-2">
          {prizesAndCompensation.map((prize, index) => (
            <li key={index} className="flex items-start">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-regular'>{prize}</span>
            </li>
          ))}
        </ul>
      </div>

      </div>

     </div>
     
  );
};

export default BidderProfile;
