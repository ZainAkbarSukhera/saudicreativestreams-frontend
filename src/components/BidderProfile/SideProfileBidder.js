import React from "react";
import { MdHexagon } from "react-icons/md";


const sideProfileBidder =({imageUrl,initiativeName,keyDates,eligibilityCriteria}) => {
  return (
    <div className="flex flex-col mb-8">
    <img 
      src={imageUrl} 
      alt={initiativeName} 
      className="w-full h-auto rounded-md shadow-md col-span-1"
    />
    
    <div className="flex flex-col lg:col-span-2">
  <span className="text-sm font-montserrat-medium mb-4">Key Dates</span>
  <div className="text-xs space-y-2">
    {keyDates.map((date, index) => (
      <div key={index} className="flex items-start">
        <MdHexagon className="text-red-600 mr-2 flex-shrink-0" />
        <span className="whitespace-nowrap font-montserrat-regular">{date.label}: {date.value}</span>
      </div>
    ))}
  </div>


  <div className="mt-4">
    <h2 className="text-sm font-montserrat-medium mb-4">Eligibility Criteria</h2>
    <ul className="text-xs space-y-2">
      {eligibilityCriteria.map((criteria, index) => (
        <li key={index} className="flex items-center">
          <MdHexagon className="text-red-600 mr-2 mb-6 flex-shrink-0" />
          <span className="font-montserrat-regular">{criteria}</span>
        </li>
      ))}
    </ul>
    <button className="bg-red-500 text-white mt-4 px-6 py-2 rounded-full">Apply</button>
  </div>
</div>

  </div>
  );
};

export default sideProfileBidder;