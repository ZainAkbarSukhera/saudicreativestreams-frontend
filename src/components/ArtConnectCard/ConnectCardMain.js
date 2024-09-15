import React, { useState } from 'react';
import { FaThumbsUp, FaEye,FaLocationArrow } from 'react-icons/fa';

const ConnectCard = ({ profileImage, topImages, name, location, profession, initialLikes, initialViews }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); 
  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2 flex-1">
      {/* Top Images */}
      <div className="flex space-x-1 mb-0 ">
        {topImages.map((image, index) => (
          <img key={index} src={image} alt={`Top image ${index + 1}`} className="h-16 w-full object-cover rounded" />
        ))}
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-2">
        <img src={profileImage} alt={name} className="h-24 w-24 rounded-full border-4 border-white shadow-lg" />
      </div>

      {/* Name, Location, and Profession */}
      <h3 className="text-lg font-bold text-center font-montserrat-regular text-yankees-blue">{name}</h3>
      <div className='flex justify-center'>
      <FaLocationArrow className='text-madder-lake text-sm mt-1 mr-2'/>
      <p className="text-madder-lake text-center font-montserrat-light">{location}</p>

      </div>
     
      <p className="text-palatinate-purple text-center text-sm mb-2 font-montserrat-light">{profession}</p>

      {/* Badges, Likes, and Views */}
      <div className="flex justify-between items-center mt-2 text-gray-700">
        <div className="flex items-center space-x-2">
          {/* Placeholder for badges */}
          <span className="bg-gray-200 px-1 py-1 rounded-full text-xs">Badge 1</span>
          <span className="bg-gray-200 px-1 py-1 rounded-full text-xs">Badge 2</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${liked ? 'text-madder-lake' : ''}`}
          >
            <FaThumbsUp /> <span className='text-xs'>{likes}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye /> <span className='text-xs'>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;