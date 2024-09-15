import React from 'react';
import { MdHexagon } from "react-icons/md";

const BidCard = ({ project }) => {
  return (
    <div className="flex w-80 flex-col justify-between border-2 border-gray-200 rounded-lg p-4 bg-white min-h-[300px]">
      <div>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-2 rounded" />
        <h3 className="text-xl font-montserrat-medium mb-4 text-yankees-blue">{project.title}</h3>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-sm mr-4 mt-1" />
          <p className="text-yankees-blue font-montserrat-medium">Deadline:</p>
        </div>
        <p className="text-yankees-blue ml-8 mb-4 font-montserrat-light">{project.deadline}</p>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-sm mr-4 mt-1" />
          <p className="text-yankees-blue font-montserrat-medium">Eligibility: </p>
        </div>
        <p className="text-yankees-blue ml-8 mb-6 font-montserrat-light">{project.eligibility}</p>
      </div>
      
      <div className="mt-auto">
        <button className="w-full px-4 py-2 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
          {project.buttonText}
        </button>
      </div>
    </div>
  );
};

export default BidCard;
