// import React, { useState } from 'react';
// import { FaThumbsUp, FaEye } from 'react-icons/fa';


// const MarketCard = ({ image, title, artist, initialLikes, initialViews }) => {
//   const [likes, setLikes] = useState(initialLikes);
//   const [liked, setLiked] = useState(false); // To track if the user has liked the item
//   const [views] = useState(initialViews);

//   const handleLike = () => {
//     if (liked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }
//     setLiked(!liked); // Toggle the liked state
//   };

//   return (
//     <div className="p-1 w-full">
//       {/* Image */}
//       <img src={image} alt={title} className="h-40 w-full object-fill mb-4" />

//       {/* Title and Stats */}
//       <div className="flex items-center justify-between w-full mt-2 text-xs text-black">
//         <p className=" font-montserrat-medium text-black">{title}</p>
//         <div className="flex space-x-4">
//           <button
//             onClick={handleLike}
//             className={`flex items-center  ${liked ? 'text-red-500' : ''}`}
//           >
//             <FaThumbsUp /> <span className='text-xs'>{likes}</span>
//           </button>
//           <div className="flex items-center ">
//             <FaEye /> <span className='text-xs'>{views}</span>
//           </div>
//         </div>
//       </div>

//       {/* Artist */}
//       <div className="flex flex-col">
//         <p className="text-black font-montserrat-light text-xs">{artist}</p>
//       </div>
//     </div>
//   );
// };

// export default MarketCard;

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
    <div className="p-2 w-full">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-fill mb-3" />

      {/* Title and Stats */}
      <div className="flex items-center justify-between w-full mt-1">
        <p className="font-semibold text-sm text-black">{title}</p>
        <div className="flex space-x-2">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 text-xs ${liked ? 'text-red-500' : 'text-gray-600'}`}
          >
            <FaThumbsUp size={12} /> <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <FaEye size={12} /> <span>{views}</span>
          </div>
        </div>
      </div>

      {/* Artist */}
      <p className="text-gray-700 text-xs mt-1">{artist}</p>
    </div>
  );
};

export default MarketCard;
