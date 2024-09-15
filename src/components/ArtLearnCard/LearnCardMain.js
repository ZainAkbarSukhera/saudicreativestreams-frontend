import React from "react";


const LearnCard = ({ title, date, location, instructor, duration, tag, tagColor, icon }) => {
  return (
    <div className="workshop-card border border-gray-300 rounded-lg flex relative p-2 max-h-48">
      <div className="w-full pr-4">
        {/* Title and Image in one line */}
        <div className="flex justify-between items-center mb-2 text-yankees-blue">
          <h3 className="text-sm font-montserrat-regular">{title}</h3>
          <img
            src={icon}
            alt="Card Icon"
            className="w-12 h-6 object-scale-down ml-4" // Smaller icon size
          />
        </div>

        <div className="flex items-center text-xs mb-1">
          <span>Date: {date}</span>
        </div>
        <div className="flex items-center text-xs mb-1">
          <span>Location: {location}</span>
        </div>
        <div className="flex items-center text-xs mb-1">
          <span>Instructor: {instructor}</span>
        </div>
        <div className="flex items-center text-xs mb-1">
          <span>Duration: {duration}</span>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-1 mr-4 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white text-xs font-montserrat-light">
            Register
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 h-full flex items-center justify-center ${tagColor} text-white rounded`}
        style={{ width: '24px' }}
      >
        <span className="font-light transform -rotate-90 whitespace-nowrap text-xs font-montserrat-light">{tag}</span>
      </div>
    </div>
  );
};

export default LearnCard;
