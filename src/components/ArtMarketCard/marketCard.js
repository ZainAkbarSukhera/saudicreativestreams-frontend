import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';


const MarketCard = ({ image, title, artist, initialLikes, initialViews }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // To track if the user has liked the item
  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="bg-yankees-blue p-1 w-full">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover mb-4" />

      {/* Title and Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
        <h3 className="text-lg font-montserrat-medium text-white">{title}</h3>
        <div className="flex space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${liked ? 'text-red-500' : ''}`}
          >
            <FaThumbsUp /> <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye /> <span>{views}</span>
          </div>
        </div>
      </div>

      {/* Artist */}
      <div className="flex flex-col">
        <p className="text-white font-montserrat-light text-sm">{artist}</p>
      </div>
    </div>
  );
};

export default MarketCard;