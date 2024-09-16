import React from 'react';

import status_icon from '../../assets/status_icon.png';
import projecttype_icon from '../../assets/project_icon.png';
import eligibility_icon from '../../assets/eligibility_icon.png';
import location_icon from  '../../assets/location_icon.png';
import prize_icon from '../../assets/prize_icon.png';
import deadline_icon from '../../assets/deadline_icon.png';
import hostorganization_icon from '../../assets/hostorganization_icon.png';

const FilterMenu = () => {
  return (
    <div className='mt-28'>
      <div className="w-60 h-full p-4 border-r border-black left-0 bg-white">
      {/* Status Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
        <img src={status_icon} alt="status icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">STATUS</h3>
        </div>
        <div className="ml-6">
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black font-montserrat-light">On-going</span>
            
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black font-montserrat-light">Completed</span>
            
          </label>
        </div>
      </div>

      {/* Project Type Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
        <img src={projecttype_icon} alt="project type icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">PROJECT TYPE</h3>
        </div>
        <div className="ml-6">
          {['Art Installation', 'Competition', 'Exhibition', 'Exploration', 'Initiative', 'Program', 'Residency'].map((type) => (
            <label key={type} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="projectType" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
        <img src={eligibility_icon} alt="eligibility icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">ELIGIBILITY</h3>
        </div>
        <div className="ml-6">
          {[
            'Open to All',
            'Saudi Nationals only',
            'International Artists',
            'Emerging Artists',
            'Established Artists',
            'Students',
            'Age-Specific (over 18)',
          ].map((eligibility) => (
            <label key={eligibility} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{eligibility}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
        <img src={location_icon} alt="location icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">LOCATION</h3>
        </div>
        <div className="ml-6">
          {[
            'Riyadh',
            'Jeddah',
            'Makkah',
            'Madina',
            'Khobar',
            'Dammam',
            'Tabuk',
            'Ta\'if',
            'Abha',
            'Khamis Mushait',
            'Buraidah',
            'Hail',
          ].map((location) => (
            <label key={location} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/*Prize Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
        <img src={prize_icon} alt="prize icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">PRIZE</h3>
        </div>
        <div className="ml-6">
          {[
            'Under SAR 10,000',
            'SAR 10,000 - SAR 50,000',
            'SAR 50,000 - SAR 100,000',
            'Above SAR 100,000',
            'Non-Monetary (Exposure)',
            'Non-Monetary (Collaboration)',
          ].map((location) => (
            <label key={location} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/*Deadline Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
        <img src={deadline_icon} alt="deadline icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">DEADLINE</h3>
        </div>
        <div className="ml-6">
          {[
            'Within 1 Week', 
            'This Month',
            'Next 3 Months',
            'Later This Year',
            'No Deadline',
          ].map((location) => (
            <label key={location} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{location}</span>
            </label>
          ))}
        </div>
      </div>

      
      {/*Host-Organization Section */}
      <div className='mb-6'>
              <div className="flex items-center mb-2">
              <img src={hostorganization_icon} alt="host organization icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">HOST-ORGANIZATION</h3>
              </div>
              <div className="ml-6">
                {[
                  'Government',
                  'Private Sector',
                  'Non-Profit Organisations',
                  'Art Intermediaries',
                  'Educational Institutions',
                  'Cultural Centers',
                  
                ].map((location) => (
                  <label key={location} className="flex items-center mb-1 text-yankees-blue">
                    <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
                    <span className="text-xs text-black font-montserrat-light">{location}</span>
                  </label>
                ))}
              </div>
            </div>

    </div>
    </div>
    
  );
};

export default FilterMenu;