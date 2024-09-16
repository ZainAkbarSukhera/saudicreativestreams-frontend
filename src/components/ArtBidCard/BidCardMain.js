import React from 'react';
import { useNavigate } from 'react-router-dom';
const BidCard = ({project}) => {
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/bidders-profile'); // Use navigate to go to the profile page
  }
  return (
    <div className="flex w-auto flex-col justify-between border-2 border-gray-700 rounded-lg p-4 bg-white min-h-[300px]"
    onClick={handleOnClick}
   >
      <div>
        <img src={project.image} alt={project.title} className="w-full h-64 object-fill mb-2 rounded" />
        <h3 className="text-xl font-montserrat-regular mb-4 text-yankees-blue">{project.title}</h3>

        <div className="flex items-start">
          <p className="text-yankees-blue font-montserrat-medium">Hosted by:</p>
        </div>
        <p className="text-yankees-blue  mb-4 font-montserrat-light">{project.hostedBy}</p>
        
        <div className="flex items-start">
          <p className="text-yankees-blue font-montserrat-medium">Deadline:</p>
        </div>
        <p className="text-yankees-blue  mb-4 font-montserrat-light">{project.deadline}</p>
        
        <div className="flex items-start">
          <p className="text-yankees-blue font-montserrat-medium">Eligibility: </p>
        </div>
        <p className="text-yankees-blue  mb-6 font-montserrat-light">{project.eligibility}</p>

        <div className="flex items-start">
          <p className="text-yankees-blue font-montserrat-medium">Prize: </p>
        </div>
        <p className="text-yankees-blue  mb-6 font-montserrat-light">{project.prize}</p>
      </div>
      
      <div className="mt-auto ">
        <button className="w-full px-4 py-2 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
          Apply
        </button>
      </div>
    </div>
  );
};

export default BidCard;


// import React from "react";

// const Card = ({ project }) => {
//   return (
//     <div className="bg-white shadow-md rounded-md overflow-hidden">
//       <img src={project.image} alt={project.title} className="w-full" />
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800 mb-2">
//         {project.title}
//         </h2>
//         <p className="text-gray-600 mb-4">
//           Hosted by: {project.hostedBy}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Deadline: {project.deadline}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Eligibility: {project.eligibility}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Prize: {project.prize}
//         </p>
//         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;